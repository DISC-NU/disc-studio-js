document.addEventListener('DOMContentLoaded', function() {
    [...document.querySelectorAll('.form-check-input')].map(
        (element) => { 
            element.onchange = () => updateTextLabel(element);
        }
    )
});

document.addEventListener('DOMContentLoaded', function() {
    [...document.querySelectorAll('.btn')].map(
        (element) => { 
            const elementText = element.innerHTML;
            element.onclick = () => displayAlert(elementText);
        }
    )
});

welcomeMessageColor = () => {
    let welcomeMsg = document.getElementById('welcomeMessage');
    welcomeMsg.style.color = 'red';
}

resetColor = () => {
    let welcomeMsg = document.getElementById('welcomeMessage');
    welcomeMsg.style.color = 'black';
}

changePizzaSize = () => {
    let pizzaImage = document.getElementById('pizzaImage');
    let imageHeight = pizzaImage.height;

    if (imageHeight == 300) {
        pizzaImage.style.height = '175px';
        pizzaImage.style.width = 'auto';
        pizzaImage.style.display = '';
        pizzaImage.style.marginLeft = '';
        pizzaImage.style.marginRight = '';
    } else {
        pizzaImage.style.height = '300px';
        pizzaImage.style.width = 'auto';
        pizzaImage.style.display = 'block';
        pizzaImage.style.marginLeft = 'auto';
        pizzaImage.style.marginRight = 'auto';
    }
}

updateTextLabel = (element) => {
    let labelId = element.id;
    labelId += "Label";

    const textLabel = document.getElementById(labelId);

    if (element.checked) {
        textLabel.style.color = 'green';
    } else {
        textLabel.style.color = 'black';
    }
}

displayAlert = (alertText) => {
    const sizeOptions = ['Small', 'Medium', 'Large']
    let text = "You have clicked on the ";

    if (sizeOptions.includes(alertText)) {
        text += "'Size: ";
        text += alertText;
        text += "' "
    } else {
        text += "'Sauce: ";
        text += alertText;
        text += "' "
    }

    text += "button.";
    alert(text);
}