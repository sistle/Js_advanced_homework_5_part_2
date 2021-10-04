const html = document.getElementById('container')
let bankCurrency;

async function response() {
	await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
		.then(data => data.json())
		.then(data => bankCurrency = data)
		// .then(() => print())
		.catch(err => console.log(err));

	await print();
};

function print() {
	let div = ''
	const exchanche = 10000;

	bankCurrency.forEach(function (element, index) {
		if (element.base_ccy === 'UAH') {
			div += `<div> ${exchanche} ${element.base_ccy} =  ${(exchanche / element.buy).toFixed(3)}  ${element.ccy}</div>
		`;
		}
	});

	html.innerHTML = div;
};
response()

// async function execute() {
// 	await response();
//    await print();
// }
// execute();