const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid');

const userSchema = new Schema ({
    _id: {
        type: String,
        unique: true,
        default: shortid.generate
    },
    username: String,
    exercise: [{
        description: String,
        duration: String,
        date: Date
    }]
})
const User = mongoose.model('user', userSchema)

const createAndSaveUser = (username, done) => {
    User.findOne({username: username}, (err, foundUser) => {
        if (err) return done(err)
        else if (!foundUser) {
            let newUser = new User({username: username})
            newUser.save((err, user) => {
                if (err) return done(err)
                return done(null, user)
            })
        } else {
            console.log(foundUser)
            return done(null, 'User found')
        }
    })
}

exports.UserModel = User
exports.createAndSaveUser = createAndSaveUser