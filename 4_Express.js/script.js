// Express.js Framework

// Introduction to Express.js
// MERN STACK
// Express js ek npm package hai
// Framework -> It is a flow in which we have to work (Doesn't matter how the flow is to be executed, but the flow must go on)
// Manages everything from receiving the request and giving the response


// Setting up basic Express application
const express = require('express')
const app = express()

// Routing
// Route create karna

// app.get(route, requestHandler)
// requestHandler = Middleware ka part hai

// app.get('/', function (req, res) {
//     res.send('Champion mera anuj')
// })

// app.get('/profile', function (req, res) {
//     res.send('Champion uska coach')
// })


// app.listen(3000)


// Middleware
// Routes ke pehle lagta hai middleware
// Middleware mein wo kaaam hota hai jo hum routes se pehle karwana chahte hai
// Jab bhi server request accept karta hai waha se route mein pahuchne tak agar aap uss request ko bich mei rok ke kuch perform karte ho to ye element middleware kehlata hai

// app.use(function (req, res, next) {
//     console.log("Middleware on hua")
//     next()
// })

// app.get('/', function (req, res) {
//     res.send('Champion mera anuj')
// })

// app.listen(3000)


// Request and Response handling
// Frontend - Backend - Frontend
// URL likha - Code backend mein gaya - Display kiya

// Error handling

app.get("/profile", function (req, res, next) {
    // Error aate hi yahi pe exit kar dega aage execute hi nai karega
    return next(new Error("Something went wrong"))
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

app.listen(3000)