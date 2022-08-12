const express = require('express')
const router = express.Router()



const {getpeople, postname, postpostman, putname} = require('../controller/people')

// router.get('/', getpeople)

// router.post('/', postname)


// router.post('/postman', postpostman)

// router.put('/:id', putname)

//you can also chain routes.
router.route('/').get(getpeople).post(postname)

module.exports = router

