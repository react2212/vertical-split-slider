const panel = document.querySelector('.panel');
const panel_li = panel.querySelectorAll('li');
const panel_li_arr = Array.from(panel_li);
const btnUp = document.querySelector('.btnUp');
const btnDown = document.querySelector('.btnDown');
const len = panel_li.length;
const delay = 600;

btnUp.addEventListener('click', moveUp);
btnDown.addEventListener('click', moveDown);

function moveUp(e) {
	e.preventDefault();
	const current_item = panel.querySelector('.on');
	const current_index = panel_li_arr.indexOf(current_item);
	let next_index = null;
	current_index !== len - 1 ? (next_index = current_index + 1) : (next_index = 0);

	current_item.classList.remove('on');
	current_item.classList.add('up');
	panel_li[next_index].classList.add('down');

	setTimeout(() => {
		panel_li[next_index].classList.remove('down');
		panel_li[next_index].classList.add('on');
		panel.querySelector('.up').classList.remove('up');
	}, delay);
}

function moveDown(e) {
	e.preventDefault();
	const current_item = panel.querySelector('.on');
	const current_index = panel_li_arr.indexOf(current_item);
	let prev_index = null;
	current_index !== 0 ? (prev_index = current_index - 1) : (prev_index = len - 1);

	current_item.classList.remove('on');
	current_item.classList.add('down');
	panel_li[prev_index].classList.add('up');

	setTimeout(() => {
		panel_li[prev_index].classList.remove('up');
		panel_li[prev_index].classList.add('on');
		panel.querySelector('.down').classList.remove('down');
	}, delay);
}
