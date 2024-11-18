function playSound() {
    const sound = document.getElementById('parrySound');
    sound.play();
}

document.getElementById('soundBtn').addEventListener('click', playSound);