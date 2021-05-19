var express = require('express');
var router = express.Router();
let dbCon = require('../lib/db')

router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM assets_item', (err, rows) => {
        if (err) {
            req.flash('error', err)
            res.render('assets', { data: '' })
        } else {
            res.render('assets', { data: rows })
        }
    })
})

// display add 
router.get('/add', (req, res, next) => {
    res.render('assets/add', {

        name: '',
        asset_type_id: ''
    })
})


// add a new
router.post('/add', (req, res, next) => {

    let name = req.body.name;
    let asset_type_id = req.body.asset_type_id;
    let errors = false;

    if (name.length === 0 || asset_type_id.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', 'Please enter name and author');
        // render to add.ejs with flash message
        res.render('assets/add', {
            name: name,
            asset_type_id: asset_type_id
        })
    }

    // if no error
    if (!errors) {
        let form_data = {
            name: name,
            asset_type_id: asset_type_id
        }

        // insert query
        dbCon.query('INSERT INTO assets_item SET ? ', form_data, (err, result) => {
            if (err) {
                req.flash('error', err)

                res.render('assets/add', {
                    name: form_data.name,
                    asset_type_id: form_data.asset_type_id
                })
            } else {
                req.flash('success', 'assets successfully added');
                res.redirect('/assets');
            }
        })
    }
})


// display edit assets page
router.get('/edit/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM assets_item WHERE id = ' + id, (err, rows, fields) => {
        if (rows.length <= 0) {
            req.flash('error')
            res.redirect('/assets');
        } else {
            res.render('assets/edit', {

                id: rows[0].id,
                name: rows[0].name,

            })
        }
    });
})

// update assets page

router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let errors = false;

    if (name.length === 0) {
        errors = true;
        req.flash('error', 'Please enter name ');
        res.render('assets/edit', {
            id: req.params.id,
            name: name,

        })
    }
    // if no error
    if (!errors) {
        let form_data = {
            name: name,
        }
        // update query
        dbCon.query("UPDATE assets_item SET ? WHERE id = " + id, form_data, (err, result) => {
            if (err) {
                req.flash('error', err);
                res.render('assets/edit', {
                    id: req.params.id,
                    name: form_data.name,

                })
            } else {
                req.flash('success', 'Asset successfully updated');
                res.redirect('/assets')
            }
        })
    }
})


// delete
router.get('/delete/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM assets_item WHERE id = ' + id, (err, result) => {
        if (err) {
            req.flash('error', err),
                res.redirect('/assets');
        } else {
            req.flash('success', 'assets successfully deleted! ID = ' + id);
            res.redirect('/assets');
        }
    })
})


module.exports = router;
