document.addEventListener('DOMContentLoaded', function() {
    [...document.querySelectorAll('td')].map(
        (element) => { 
            const elementText = element.innerHTML;
            element.onclick = () => displayAlert(elementText);
        }
    )
});

changeImageSize = () => {
    let image = document.getElementById('profilePic');
    let caption = document.getElementById('imageCaption');

    if (image.height == 400) {
        image.style.height = '800px';
        caption.innerHTML = 'Click image to reset its size'
    } else {
        image.style.height = '400px';
        caption.innerHTML = 'Click image to enlarge it'
    }
}

changeDescriptionFont = () => {
    let description = document.getElementById('description')
    description.style.textDecoration = 'underline solid black 2px';
}

resetFont = () => {
    let description = document.getElementById('description')
    description.style.textDecoration = '';
}

displayAlert = (alertText) => {
    let text = "You have clicked on the table cell: ";
    text += alertText;
    text += ".";
    alert(text);
}