const colorsBoxes = ['#9cb380', '#7fd1b9', '#ffc09f', '#79addc', '#ffee93', '#048a81', '#a6d49f', '#ffb051', '#f2786d', '#de6e4b', '#e56399', '#e3b505', '#f93943', '#7fd1b9', '#4ecdc4', '#e7ad99'];
const colorsTexts = ['white', 'white'];

const boxes = document.getElementsByClassName("fond");
const texts = document.getElementsByClassName("girl");

function buttonRun() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colorsBoxes[Math.floor(Math.random() * colorsBoxes.length)];
    }

    for (i = 0; i < texts.length; i++) {
        boxes[i].style.color = colorsTexts[Math.floor(Math.random() * colorsTexts.length)];
    }
};

anton
prompt