document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.getElementById('text').style.color = 'red';
});

document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').innerText = 'The text has been changed!';
});

document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is a new paragraph.';
    document.body.appendChild(newElement);
});

document.getElementById('removeElementButton').addEventListener('click', function() {
    const image = document.getElementById('image');
    if (image) {
        image.remove();
    }
});
