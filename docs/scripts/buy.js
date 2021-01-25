window.paymentSettings = {
	payments: {
		'pp': {
			actionUrl: 'https://primepayer.com/pay',
			signUrl: '/payment/sign.php',
			method: 'POST'
		},
	},
	vias: {
		paymentDefault: 'pp'
	}
}

function end(data) {
	let form = document.createElement('form'),
		itemInput, inputs = [];
	for (let key in data) {
		itemInput = document.createElement('input');
		itemInput.setAttribute('name', key);
		itemInput.setAttribute('value', data[key]);
		inputs.push(itemInput)
	}
	form.append(...inputs);
	form.setAttribute('action', window.paymentSettings.payments[window.payment].actionUrl);
	form.setAttribute('method', window.paymentSettings.payments[window.payment].method);
	document.getElementById('hiddenForm_containerJS').innerHTML = '';
	document.getElementById('hiddenForm_containerJS').append(form);
	form.submit();
}

function sign(fields) {
	Ajax('get', window.paymentSettings.payments[window.payment].signUrl, fields, (answer) => {
		answer = JSON.parse(answer);
		end(answer);
	});
}

function getFields() {
	let fields = document.querySelectorAll('[data-baseform]'),
		data = {},
		vias = document.querySelector('[data-baseformcheck]:checked');
	if (!vias) {
		alert('Выберите способ оплаты!');
	}
	fields = Array.from(fields);
	fields.push(vias);
	fields.forEach(item => {
		data[item.name] = item.value;
	})
	return data;
}

function validate(data) {
	let errs = {
			via: 'Выберите способ оплаты',
			email: 'Введите ваш email адрес',
			amount: 'Некоррекная цена'
		},
		re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	try {
		for (let key in data) {
			if (key === 'amount' && data[key] < 119) throw {
				name: 'amount',
				field: key
			}
			if (data[key] === '' || data[key] === null) throw {
				name: 'empty',
				field: key
			}
			if (key === 'email' && !re.test(data[key])) throw {
				name: 'email'
			}
		}
		return true;
	} catch (err) {
		switch (err.name) {
			case 'amount':
				alert(errs[err.field]);
				break;
			case 'empty':
				if (errs[err.field] !== undefined) {
					alert(errs[err.field]);
				} else {
					console.error('Empty field ' + err.field);
				}
				break;
			case 'email':
				alert('Некорректный email!');
				break;
		}
		return false;
	}
}

function paymentName(via) {
	let name = window.paymentSettings.vias[via];
	if (!name) name = window.paymentSettings.vias.paymentDefault;
	return name;
}

function start() {
	let fields = getFields();
	if (!validate(fields)) return;
	window.payment = paymentName(fields.via);
	sign(fields)
}

function $_GET(key) {
	var p = window.location.search;
	p = p.match(new RegExp(key + '=([^&=]+)'));
	return p ? p[1] : false;
}
document.getElementById('price').innerHTML = $_GET('a');
document.getElementById('amount_value').value = $_GET('a');
document.getElementById('buy_buy_page').addEventListener('click', start);
