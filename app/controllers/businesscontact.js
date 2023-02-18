import businesscontactModel from '../models/businesscontact.js';

import { UserDisplayName } from "../utils/index.js";

//R ead Operations
export function DisplayContactList(req, res, next){
    businesscontactModel.find(function (error, businesscontactCollection){
        if(error){
            console.error(error);
            res.end(error);
        }

        console.log(businesscontactCollection);

        res.render('index', {title: 'Business Contact List', page: 'businesscontact/list', 
            businesscontact: businesscontactCollection,
            displayName: UserDisplayName(req)  
        })
    })
}


//C reate
export function DisplayContactAddPage(req, res, next){
    res.render('index', {title: 'Add Contact', page: 'businesscontact/edit', contact: {},
    displayName: UserDisplayName(req)})
}

export function ProcessContactAddPage(req, res, next){
    let newContact = businesscontactModel({
        contactname: req.body.contactname,
        contactnumber: req.body.contactnumber,       
        emailaddress: req.body.emailaddress
       
    });

    businesscontactModel.create(newContact,function(error, contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contact-list');
    })
}

//U pdate
export function DisplayContactEditPage(req, res, next){

    let id = req.params.id;

    businesscontactModel.findById(id, function(error, contact){
        if(error){
            console.error(error);
            res.end(error);
        }

       res.render('index', {title: 'Edit Contact', page: 'businesscontact/edit', contact,
       displayName: UserDisplayName(req)})
    })    
}

export function ProcessContactEditPage(req, res, next){
    let id = req.params.id


    let editContact = businesscontactModel({
        _id: req.body.id,
        contactname: req.body.contactname,
        contactnumber: req.body.contactnumber,       
        emailaddress: req.body.emailaddress
    });

    businesscontactModel.updateOne({_id: id}, editContact,function(error, contact){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contact-list');
    })
}


//D elete
export function ProcessContactDelete(req, res, next){
    let id = req.params.id

    businesscontactModel.remove({_id: id}, function(error){
        if(error){
            console.error(error);
            res.end(error);
        }

        res.redirect('/contact-list');
    })
}