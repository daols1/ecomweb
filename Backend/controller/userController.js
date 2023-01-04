const User = require('./../model/userModel')
const asyncHandler = require('express-async-handler')

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        if(!user) return res.status(400).json({ msg: "user does not exist."})

        res.json(user)

    } catch(err) {
        return res.status(500).json({ msg: err.message})
    }
}