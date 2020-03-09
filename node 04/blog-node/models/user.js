let mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/tou.jpg'
    },
    bio: {
        type: String,
        default: '请输入你的介绍'
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: {
            // 0 没有权限限制
            // 1 不可以评论
            // 2 不可以登录
            enum: [0, 1, 2],
            default: 0
        }
    }
})

module.exports = mongoose.model('User', userSchema)