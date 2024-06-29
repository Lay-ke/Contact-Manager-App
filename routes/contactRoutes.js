const {Router} = require('express');
const contactControllers = require('../controllers/contactController');

const router = Router();

router.get('/api/contacts', contactControllers.getContacts);    //get all contacts route

router.post('/api/contact', contactControllers.createContact);  //create a contact route

router.get('/api/contact/:id', contactControllers.getContact);  //get a single contact route

router.put('/api/contact/:id', contactControllers.updateContact);   //update a s contact route

router.delete('/api/contact/:id', contactControllers.deleteContact);    //delete a contact route

module.exports = router