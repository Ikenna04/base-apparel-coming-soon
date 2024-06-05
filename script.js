const info = document.getElementById('info'),
	mail = document.getElementById('email'),
	icon = document.getElementById('error-icon'),
	form = document.getElementById('form');

let pattern;

const showError = () => {
		pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

		mail.value === ''
			? ((info.textContent = 'Enter an email address'),
			  (info.style.color = 'var(--dark-grayish-red)'),
			  (icon.style.display = 'flex'),
			  (form.style.borderColor = 'var(--soft-red)'))
			: !mail.value.match(pattern)
			? ((info.textContent = 'Please provide a valid email'),
			  (info.style.color = 'var(--dark-grayish-red)'),
			  (icon.style.display = 'flex'),
			  (form.style.borderColor = 'var(--soft-red)'))
			: mail.value.match(pattern)
			? ((info.textContent = 'Check your email'),
			  (icon.style.display = 'none'),
			  (info.style.color = 'var(--dark-grayish-red)'),
			  (form.style.borderColor = 'var(--dark-grayish-red)'))
			: '';

		mail.value = '';
	},
	hideError = () => {
		info.innerText = '';
		icon.style.display = 'none';
		form.style.borderColor = 'var(--dark-grayish-red)';
		mail.value = '';
	};

document.getElementById('input').onclick = hideError;
