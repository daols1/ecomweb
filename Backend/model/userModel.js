const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:  {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }, 
    cart: {
        type: Array,
        default: []
    } 

}, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12)
    next();
});

userSchema.methods.correctPass = async function(regpass, userpass) {
    return await bcrypt.compare(regpass, userpass);
}

const User = mongoose.model('User', userSchema);

module.exports = User;