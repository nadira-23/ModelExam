const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  otp: String,
  otpExpiresAt: Date,
})
const User = mongoose.model('otps', userSchema)
module.exports=User