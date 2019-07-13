const router = require('express').Router();
const client = require('../config/database');



router.get('/addSubjects', (req, res, next) => {
    res.render('addSubject');
})

router.post('/addSubjects', (req, res, next) => {
    const { branch, subject } = req.body;
    const text = `INSERT INTO subjects (branch, subject) VALUES ('${branch}', '${subject}')`;
    console.log(text);
    client.query(text)
        .then(() => {
            res.redirect('/addSubjects');
        })
        .catch(err => {
            console.log(`some error has occured ${err}`);
        })
})

router.get('/getSubjects', (req, res, next) => {
    client.query("SELECT * FROM subjects")
        .then((result) => {
            res.render('getSubjects', { subjects: result.rows });
        })
        .catch(err => { console.log(`some err is occured ${err}`) });
})

router.get('/delete:id', (req, res, next) => {
    const id = req.params.id;
    // console.log(id);
    client.query(`DELETE FROM subjects WHERE id = ${id}`)
        .then(() => {
            console.log(`deleted`);
            res.redirect('/getSubjects');
        })
        .catch((err) => { console.log(`some err occured ${err}`) });
})

module.exports = router;