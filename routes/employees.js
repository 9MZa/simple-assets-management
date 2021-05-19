let express = require('express')
let router = express.Router()
let dbCon = require('../lib/db')

router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM employees', (err, rows) => {
        if (err) {
            req.flash('error', err)
            res.render('employees', { data: '' })
        } else {
            res.render('employees', { data: rows })
        }
    })
})


// display add 
router.get('/add', (req, res, next) => {
    res.render('employees/add', {

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
        res.render('employees/add', {

            name: name
        })
    }

    // if no error
    if (!errors) {
        let form_data = {

            name: name
        }

        // insert query
        dbCon.query('INSERT INTO employees SET ?', form_data, (err, result) => {
            if (err) {
                req.flash('error', err)

                res.render('employees/add', {

                    name: form_data.name,
                })
            } else {
                req.flash('success', 'employees successfully added');
                res.redirect('/employees');
            }
        })
    }
})

// display edit 
router.get('/edit/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('SELECT * FROM employees WHERE id = ' + id, (err, rows, fields) => {
        if (rows.length <= 0) {
            req.flash('error')
            res.redirect('/employees');
        } else {
            res.render('employees/edit', {

                id: rows[0].id,
                name: rows[0].name,

            })
        }
    });
})

// update employees page

router.post('/update/:id', (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let errors = false;

    if (name.length === 0) {
        errors = true;
        req.flash('error', 'Please enter name ');
        res.render('employees/edit', {
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
        dbCon.query("UPDATE employees SET ? WHERE id = " + id, form_data, (err, result) => {
            if (err) {
                req.flash('error', err);
                res.render('employees/edit', {
                    id: req.params.id,
                    name: form_data.name,

                })
            } else {
                req.flash('success', 'Staff successfully updated');
                res.redirect('/employees')
            }
        })
    }
})

// delete
router.get('/delete/(:id)', (req, res, next) => {
    let id = req.params.id;

    dbCon.query('DELETE FROM employees WHERE id = ' + id, (err, result) => {
        if (err) {
            req.flash('error', err),
                res.redirect('/employees');
        } else {
            req.flash('success', 'employees successfully deleted! ID = ' + id);
            res.redirect('/employees');
        }
    })
})


module.exports = router;
