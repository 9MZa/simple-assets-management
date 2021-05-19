let express = require('express')
let router = express.Router()
let dbCon = require('../lib/db')

//display staffs
router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM staffs', (err, rows) => {
        if (err) {
            req.flash('error', err)
            res.render('staffs', { data: '' })
        } else {
            res.render('staffs', { data: rows })
        }
    })
})

// display add 
router.get('/add', (req, res, next) => {
    res.render('staffs/add', {

        name: ''
    })
})

// add a new
router.post('/add', (req, res, next) => {

    let name = req.body.name;
    let errors = false;

    if (name.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', 'Please enter name and author');
        // render to add.ejs with flash message
        res.render('staffs/add', {

            name: name
        })
    }

    // if no error
    if (!errors) {
        let form_data = {

            name: name
        }

        // insert query
        dbCon.query('INSERT INTO staffs SET ?', form_data, (err, result) => {
            if (err) {
                req.flash('error', err)

                res.render('staffs/add', {

                    name: form_data.name,
                })
            } else {
                req.flash('success', 'staffs successfully added');
                res.redirect('/staffs');
            }
        })
    }
})

// display edit staffs page
router.get('/edit/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM staffs WHERE id = ' + id, (err, rows, fields) => {
        if (rows.length <= 0) {
            req.flash('error')
            res.redirect('/staffs');
        } else {
            res.render('staffs/edit', {

                id: rows[0].id,
                name: rows[0].name,

            })
        }
    });
})

// update staffs page

router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let errors = false;

    if (name.length === 0) {
        errors = true;
        req.flash('error', 'Please enter name ');
        res.render('staffs/edit', {
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
        dbCon.query("UPDATE staffs SET ? WHERE id = " + id, form_data, (err, result) => {
            if (err) {
                req.flash('error', err);
                res.render('staffs/edit', {
                    id: req.params.id,
                    name: form_data.name,

                })
            } else {
                req.flash('success', 'Staff successfully updated');
                res.redirect('/staffs')
            }
        })
    }
})

// delete
router.get('/delete/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM staffs WHERE id = ' + id, (err, result) => {
        if (err) {
            req.flash('error', err),
                res.redirect('/staffs');
        } else {
            req.flash('success', 'staffs successfully deleted! ID = ' + id);
            res.redirect('/staffs');
        }
    })
})


module.exports = router