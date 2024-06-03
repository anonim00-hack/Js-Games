const PlayerName = document.querySelector('.user_name');
const PlayerImg = document.querySelector('.user_img');
const InputOfPlayerName = document.querySelector('.input_of_name');
const InputOfPlayerImg = document.querySelector('.input_of_img');
const BoxOfInput = document.querySelector('.box_of_inputs');
const bright = document.querySelector('.bright');
const BtnForApply = document.querySelector('.apply');
const profile = document.querySelector('.profile');

profile.addEventListener('click', () => {
    localStorage.removeItem('UserName')
    localStorage.removeItem('UserImg')
    PlayerName.textContent = '';
    PlayerImg.src = '';
    bright.style.display = 'block';
    BoxOfInput.style.display = 'flex';
})

document.addEventListener('DOMContentLoaded', () => {
    show();
    if (PlayerName.textContent != '') {
        hide(bright);
        hide(BoxOfInput);
    }
});

BtnForApply.addEventListener('click', () => {
    if (InputOfPlayerName.value.trim() && InputOfPlayerImg.files.length > 0) {
        hide(bright);
        hide(BoxOfInput);
        if (InputOfPlayerName.value.length >= 10) {
            const editName = InputOfPlayerName.value.slice(0, 5);
            const editName2 = editName + '...';
            PlayerName.textContent = editName2;
        } else {
            PlayerName.textContent = InputOfPlayerName.value;
        }

        const file = InputOfPlayerImg.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            PlayerImg.src = e.target.result;
            localStorage.setItem('UserImg', e.target.result);
        };

        reader.readAsDataURL(file);

        localStorage.setItem('UserName', PlayerName.textContent);
    } else {
        alert('Пожалуйста, введите имя и выберите изображение.');
    }
});

function hide(HideEl) {
    HideEl.style.display = 'none';
}

function show() {
    const savedName = localStorage.getItem('UserName');
    const savedUrl = localStorage.getItem('UserImg');

    if (savedName) {
        PlayerName.textContent = savedName;
    }

    if (savedUrl) {
        PlayerImg.src = savedUrl;
    }
}