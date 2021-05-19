var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
let dbCon = require('../lib/db')

router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM employee_assets', (err, rows) => {
        if (err) {
            req.flash('error', err)
            res.render('borrows', { data: '' })
        } else {
            res.render('borrows', { data: rows })
        }
    })
})



// display add 
router.get('/add', (req, res, next) => {
    res.render('borrows/add', {

        asset_id: '',
        employee_id: '',
        staff_id: ''
    })
})


// add a new
router.post('/add', (req, res, next) => {

    let asset_id = req.body.asset_id;
    let employee_id = req.body.employee_id;
    let staff_id = req.body.staff_id;
    let errors = false;

    if (asset_id.length === 0 || employee_id.length === 0 || staff_id.length === 0) {
        errors = true;
        // set flash message
        req.flash('error', 'Please add borrow');
        // render to add.ejs with flash message
        res.render('borrows/add', {
            asset_id: asset_id,
            employee_id: employee_id,
            staff_id: staff_id
        })
    }

    // if no error
    if (!errors) {
        let form_data = {
            asset_id: asset_id,
            employee_id: employee_id,
            staff_id: staff_id
        }

        // insert query
        dbCon.query('INSERT INTO employee_assets SET ? ', form_data, (err, result) => {
            if (err) {
                req.flash('error', err)

                res.render('borrows/add', {
                    asset_id: form_data.asset_id,
                    employee_id: form_data.employee_id,
                    staff_id: form_data.staff_id
                })
            } else {
                req.flash('success', 'borrow successfully added');
                res.redirect('/borrows');
            }
        })
    }
})
// edit display

router.get('/edit/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM employee_assets WHERE id = ' + id, (err, rows, fields) => {
        if (rows.length <= 0) {
            req.flash('error')
            res.redirect('/borrows');
        } else {
            res.render('borrows/edit', {
                id: rows[0].id,
                asset_id: rows[0].asset_id,
                employee_id: rows[0].employee_id,
                staff_id: rows[0].staff_id,
            })
        }
    });
})

// update

router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let asset_id = req.body.asset_id;
    let employee_id = req.body.employee_id;
    let staff_id = req.body.staff_id;
    let errors = false;

    if (asset_id.length === 0 || employee_id.length === 0, staff_id.length === 0) {
        errors = true;
        req.flash('error', 'Please enter name ');
        res.render('borrows/edit', {
            id: req.params.id,
            asset_id: req.params.asset_id,
            employee_id: req.params.employee_id,
            staff_id: req.params.staff_id,
        })
    }
    // if no error
    if (!errors) {
        let form_data = {
            asset_id: asset_id,
            employee_id: employee_id,
            staff_id: staff_id,
        }
        // update query
        dbCon.query("UPDATE employee_assets SET ? WHERE id = " + id, form_data, (err, result) => {
            if (err) {
                req.flash('error', err);
                res.render('borrows/edit', {
                    id: req.params.id,
                    asset_id: req.params.asset_id,
                    employee_id: req.params.employee_id,
                    staff_id: req.params.staff_id,

                })
            } else {
                req.flash('success', 'Staff successfully updated');
                res.redirect('/borrows')
            }
        })
    }
})

// delete
router.get('/delete/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM employee_assets WHERE id = ' + id, (err, result) => {
        if (err) {
            req.flash('error', err),
                res.redirect('/borrows');
        } else {
            req.flash('success', 'assets successfully deleted! ID = ' + id);
            res.redirect('/borrows');
        }
    })
})


module.exports = router;
