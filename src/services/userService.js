const User = require('../models/userModel');


async function getUserById(id) {
    // Add validation and business logic here
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }

    return user;
}


async function CreateUser(user) {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;

}

async function GetAll() {
    const users = await User.find();
    return users;
}

async function UpdateUser(user) {
    User.updateOne(
        { _id: user._id },
        {
            $set:
                { email: User.email, name: User.name }
        }, (err) => {
            if (err) console.log(err);
            else console.log('User updated successfully');
        });
}

module.exports = { getUserById, CreateUser, GetAll,UpdateUser };