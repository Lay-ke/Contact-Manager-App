const asyncHandler = require("express-async-handler");  // performs like try-catch block but using middleware

// get all contacts
const getContacts = asyncHandler( async (req,res) => {
    res.status(200).json({message: 'All contacts retrieved'});
});

// create a contact
const createContact = asyncHandler( async (req,res) => {
    console.log(req.body);
    const {email,password} = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory');
        
    }
    res.status(201).json({message: 'Create a contact'});
});

// get a contact
const getContact = asyncHandler(async (req,res) => {
    const id = req.params.id;
    res.status(200).json({message: `Get a contact of id ${id}`});
});

// update a contact
const updateContact = asyncHandler(async (req,res) => {
    const id = req.params.id;
    res.status(200).json({message: `Update a contact of id ${id}`});
});

// delete a contact
const deleteContact = asyncHandler(async (req,res) => {
    const id = req.params.id;
    res.status(200).json({message: `Delete a contact of id ${id}`});
});

module.exports = {getContacts, getContact, updateContact, createContact, deleteContact }