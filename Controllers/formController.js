
const formModel = require("../model/form");
const submitController = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name) return res.send({ message: "Name is required" });
        if (!email) return res.send({ message: "Email is required" });
        if (!message) return res.send({ message: "Message is required" });
       
        const messageform = new formModel({ name, email, message }).save();

        res.status(201).send({
            success: true,
            message: "Query noted Successfully.I will reach you in a short while.",
            messageform
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in saving response",
            error
        });
    }
};
module.exports = {
    submitController
};