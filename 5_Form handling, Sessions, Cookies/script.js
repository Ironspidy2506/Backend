// Form handling and working with the forms

// Handle backend process of forms and making sure the data coming from any frontend lib, fw, templating engines, we still handle it at the backend


// Sessions and Cookies
// Hum log kuch bhi data frontend par browser par rakh sakte hai and jab bhi kuch bhi request backend pe karoge wo frontend par saved data backend par chala jaayega

// Ek attachment with the data jata hai server pe taaki usko yaad rahe ki user kon hai -- Cookie

// Communication/Process b/w the user and server jo chal raha hai -- Session

const exp = require('constants')
const express = require('express')
const app = express()


// Tumne to bheja tha plain text par server ko mila blob which is not directly readable ab iss chij ko handle karna padega ki hum us blob ko readable kaise kar sake

app.use(express.json()) // JSON ko readable banati hai
app.use(express.urlencoded({ extended: true })) // Encoded data ko readable banati hai

app.get('/', function (req, res) {
    res.send('Champion mera anuj')
})

app.get('/about', function (req, res) {
    res.send('Welcome to about page')
})

app.get('/profile', function (req, res) {
    res.send('Welcome to profile page')
})

app.listen(3000)