
window.validate = function(element, regexp) {
    const isValidated = element.value.search(regexp);
    if (isValidated > -1) {
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
    }
}

export default window.validate;