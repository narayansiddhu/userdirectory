var faker = require('faker');
var express = require('express');
var User = require('./models/user');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/internship');


function createUser() {
            var name = faker.name.findName();
            var address = faker.address.city();
     
            var contact = faker.helpers.userCard();
            var email = faker.internet.email();

            var user = new User({ name: name, address: address, contact: contact, email: email })
            user.save();
            console.log(user);


};

createUser();

