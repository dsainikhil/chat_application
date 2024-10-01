const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main()
    .then(()=> {
        console.log("server is listening");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "teach me js call backs",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "alll the best",
        created_at: new Date(),
    },
    {
        from: "anitha",
        to: "ramesh",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "Peter",
        msg: "Hello nice meeting you",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);

      