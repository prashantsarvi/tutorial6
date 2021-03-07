const userData= require('../model/userModel');

const searchUser =(key, value)=>{
    const match = userData.find(userData=>{
        return userData[key]=== value;
    })
    if(!match) throw new Error("No user found");
    return match;
}

const updatedUser = (req, res) => {
    const email = req.params && req.params.email;
    if (!email) res.send("please enter a valid username as path param");
    const updated_email = req.body && req.body.email;
    if(!updated_email) res.send("please enter a valid new username");
    const email_list = [];
    userData.map((item) => {
        if (item.email === email) 
        {
            item.email = updated_email;
            email_list.push(item);
        }
    });
    res.send("Update success");
}

const getUserName = (req, res) => {
    const userName = (req.params && req.params.username) || (req.query && req.query.username);
    if (userName!=null) {
        const dataFind = userData.find(item => item.userName === userName );
        if(dataFind!=null) {
            res.json(dataFind)
        }
        else{
            res.send('Not a valid user');
        }
    } else res.send('invalid input');
}

const addingUser = (req, res) => {
    const userName = req.body && req.body.username;
    const Uid = req.body && req.body.uuid;
    const userEmail = req.body && req.body.email;
    db.push({
        uuid: Uid,
        username: userName,
        email: userEmail
    });
    res.send("Add success");
}

module.exports = {
    searchUser,
    updatedUser,
    getUserName,
    addingUser
}