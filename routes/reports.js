

let express = require('express')
let router = express.Router()
let dbCon = require('../lib/db')

//display staffs
router.get('/', (req, res, next) => {
    dbCon.query('SELECT * FROM emp_asst_rpt', (err, rows) => {
        if (err) {
            req.flash('error', err)
            res.render('reports', { data: '' })
        } else {
            res.render('reports', { data: rows })
        }
    })
})

module.exports = router;
