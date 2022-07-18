const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('user list')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else { 
        console.log('Error')
        res.render('users/new', {firstName: req.body.firstName})
    }
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`user id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`update user ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete user ${req.params.id}`)
    })


const users = [{ name: 'drew'}, {name: 'akira'}]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    console.log(req.user)
    next()
})


module.exports = router