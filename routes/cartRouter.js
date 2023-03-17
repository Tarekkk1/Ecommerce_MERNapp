const express = require('express')
const { addProductToCart, removeProductFromCart, calculateCartCost,chekOutCart } = require('../controller/cartController')


const router = express.Router()



router.post('/', addProductToCart)

router.post('/remove', removeProductFromCart)

router.post('/getCartPrice', calculateCartCost)

router.post('/checkout', chekOutCart)





module.exports = router