import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    favouriteWebsites: [String]
});

var User = mongoose.model('User', userSchema);

export default User;
