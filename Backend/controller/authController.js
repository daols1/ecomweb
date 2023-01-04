const jwt = require('jsonwebtoken');
const User = require('./../model/userModel')
const asyncHandler = require('express-async-handler')

const registerToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRES_IN
    })
}

const RefreshToken = id => {
    return jwt.sign({id}, process.env.JWT_REFRESH_TOKEN, {
        expiresIn : process.env.JWT_REFRESH_EXPIRES_IN
    })
}


exports.register = asyncHandler(async(req, res, next) => {
    const {name, email, role, password} = req.body
    if(!name || !email, !password) {
        res.status(400)
        throw new Error('Please fill in the fields')
    }
    // Check to see if use exists
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    if(password.length < 8) {
        res.status(400) 
        throw new Error('Password be at least 8 characters long')
    }



    const newUser = await User.create({
        name,
        email,
        role,
        password
        
    })
    await newUser.save();

    const token = registerToken(newUser._id)
    const refreshtoken = RefreshToken(newUser._id)

    res.cookie('refreshtoken', refreshtoken, {
        httpOnly: true,
        path: '/user/refresh_token'
    })

    console.log(req.cookies)

    res.status(200).json({
        msg: "success",
        token,

        newUser
    })
})

exports.login = asyncHandler(async (req, res) => {

    const {email, password} = req.body
    if(!email || !password) {
        res.status(400)
        throw new Error('Please provide your email and password')
    }
   const user = await User.findOne({ email })
   if(!user || await user.correctPass(password, user.password)) {
    res.status(400) 
    throw new Error('Incorrect email or password')
   }

   const token = registerToken(user._id)   
   const refreshtoken = RefreshToken(user._id) 
   res.cookie('refreshtoken', refreshtoken, {
    httpOnly: true,
    path: '/user/refresh_token'
   })
   res.status(200).json(token)
})

exports.logout = async(req, res) => {
    try{
        res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
        return res.json({msg: "Logged out"})
    } catch(err) {
        return res.status(500).json({msg: err.message})
    }
}

exports.protect = async (req, res, next) => {
    try {
        let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')
        next()
    } catch(err) {
        res.status(401)
        throw new Error('not authorized')
    }
}

exports.role = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({ msg: 'You don not have permission to perform this action'})
        }
        next();
    }
} 

exports.refreshToken = (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken
        if(!rf_token) return res.status(400).json({ msg: "Please Login or Register"})

        jwt.verify(rf_token, process.env.JWT_REFRESH_TOKEN,(err, user) => {
            if(err) return res.status(400).json({ msg: "Please Login or Register" })
            const accesstoken = registerToken(user.id)
            res.json({ accesstoken})
        })
        // res.json({rf_token})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
    } 
    
    