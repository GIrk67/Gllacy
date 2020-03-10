var feedback = document.querySelector('.button-feedback');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.feedback-overlay');
var close = document.querySelector('.modal-close');
var name = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');
var form = popup.querySelector('form');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
    storageName = localStorage.getItem('name');
    storageEmail = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
    evt.preventDefault();

    overlay.classList.add("modal-show-overlay")
    popup.classList.add('modal-show');

    if (storage) {
        name.value = storage;
        email.focus();
    } else {
        name.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove("modal-show-overlay");
    popup.classList.remove('modal-error');
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name.value);
        }
    }
})

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove('modal-show');
        overlay.classList.remove("modal-show-overlay");
        popup.classList.remove('modal-error');
    }
});