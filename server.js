const express = require('express');
const myRequest = require('request');

const app = express();


const PORT = process.env.PORT || 3305;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	myRequest('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', { json: true }, function (err, response, body) {
		if (!err && response.statusCode == 200) {
		console.log(body.explanation);
		res.send(body);
		}else
		console.log(err);
	})

});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});


