var express = require('express');
var router = express.Router();

var User = require('../models/user');

//to get the all recipes in home page
router.get('/',(req, res) => {
    User.find({}, (err, users) => {
        if (err) return err;
        else
            res.render('user', {
                users: users
            })
    })
});

router.post('/add',(req,res)=>{
    var user = new User();
    user.name = req.body.name;
    user.address = req.body.address;
    user.contact = req.body.contact;
    user.email = req.body.email;

   
    user.save(function (err) {
        if (err) {
            console.log(err);
            return;
        } else {
            req.flash('success_msg', 'You are added a new User');
            res.redirect('/');
        }
    });
})



router.delete('/delete/:id', (req, res) => {
   

    let query = { _id: req.params.id }

    User.findById(req.params.id, function (err, user) {
      
            User.remove(query, () => {
                res.send(200);
            })

        
    });


});


router.get('/edit/:id',(req,res)=>{
    User.findById(req.params.id,function(err,user){
        
        res.render('user_edit',{
            user:user
        });
    });

});

router.post('/edit/:id', function(req, res){
 
    let user = {};
    user.name = req.body.name;
    user.address = req.body.address;
    user.contact = req.body.contact;
    user.email = req.body.email;

    let query = {_id:req.params.id}
 
    User.update(query,user, function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success_msg', 'User details Updated');
        res.redirect('/');
      }
    });
  });
  module.exports = router;