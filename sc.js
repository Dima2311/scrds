function funct() {
document.getElementsByClassName('bonus-shop-buy-confirm-buttons')[0].innerHTML = '<div onclick="func123()" class="btn-yellow">Купить</div>';
var notie = document.getElementsByClassName("fast-notices-container")[0];
	notie.innerHTML = '<div class="fast-notices"><div class="notice" style="top: 2px; transition-duration: 0.7s; opacity: 0.95;"><div class="icon middle-block notices-sprite success"></div><div class="notice-content middle-block"><div class="title">Успешно</div><div class="text">Создатель: VK.COM/EKMGL</div><div class="date"></div></div><div class="notice-remove"><div class="notices-sprite remove"></div></div></div></div>-';
	setTimeout(function() {
		notie.innerHTML = "";
	}, 4000);
function func123() {
	var summa = document.getElementsByClassName('bonus-shop-total-price')[0].innerHTML;
	var notie = document.getElementsByClassName("fast-notices-container")[0];
	notie.innerHTML = '<div class="fast-notices"><div class="notice" style="top: 2px; transition-duration: 0.7s; opacity: 0.95;"><div class="icon middle-block notices-sprite success"></div><div class="notice-content middle-block"><div class="title">Успешно купили</div><div class="text">Потрачено: ' + summa + ' points</div><div class="date"></div></div><div class="notice-remove"><div class="notices-sprite remove"></div></div></div></div>-';
	setTimeout(function() {
		notie.innerHTML = "";
		setTimeout(function() {
			notie.innerHTML = '<div class="fast-notices"><div class="notice" style="top: 2px; transition-duration: 0.7s; opacity: 0.95;"><div class="icon middle-block notices-sprite success"></div><div class="notice-content middle-block"><div class="title">Трейд отправлен</div><div class="text">Номер трейда #6232489</div><div class="date"></div></div><div class="notice-remove"><div class="notices-sprite remove"></div></div></div></div>-';
			setTimeout(function() {
				notie.innerHTML = "";
			}, 6500);
		}, 3000);
	}, 6500);
}
}