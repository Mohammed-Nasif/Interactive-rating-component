// CopeRights => Mohammed Nasif

const rateNums = document.querySelectorAll('.rate li');
const rate = document.querySelector('.rate');
const btn = document.querySelector('.sub-btn');
let heading = document.querySelector('#selection-heading');
const rateScreen = document.querySelector('.firstScreen');
const thanksScreen = document.querySelector('.secondScreen');

rate.addEventListener('click', function (e) {
	if (!e.target.closest('li')) return;
	rateNums.forEach((num) => {
		if (e.target !== num) {
			num.classList.remove('selected');
		}
	});
	e.target.classList.toggle('selected');
	heading.textContent = `You Selected ${e.target.dataset.value} out of 5`;

	btn.onclick = function () {
		if (e.target.classList == 'selected') {
			rateScreen.style.display = 'none';
			thanksScreen.style.display = 'block';
		}
	};
});

// CopeRights => Mohammed Nasif
