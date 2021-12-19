const redRange = document.querySelector('.slider__input--red');
const greenRange = document.querySelector('.slider__input--green');
const blueRange = document.querySelector('.slider__input--blue');

const inputRGB = document.querySelector('.form__input[name=rgb]');
const inputHEX = document.querySelector('.form__input[name=hex]');
const inputHSV = document.querySelector('.form__input[name=hsv]');
const inputHSL = document.querySelector('.form__input[name=hsl]');
const inputCMYK = document.querySelector('.form__input[name=cmyk]');
const inputHWB = document.querySelector('.form__input[name=hwb]');
const inputNCOL = document.querySelector('.form__input[name=ncol]');
const inputNAME = document.querySelector('.form__input[name=name]');

const getRgbValue = (red, green, blue) => {
    return ``;
}
const getHexValue = (red, green, blue) => {
    return ``;
}
const getHsvValue = (red, green, blue) => {
    return ``;
}
const getHslValue = (red, green, blue) => {
    return ``;
}
const getCmykValue = (red, green, blue) => {
    return ``;
}
const getHwbValue = (red, green, blue) => {
    return ``;
}
const getNcolValue = (red, green, blue) => {
    return ``;
}
const getNameValue = (red, green, blue) => {
    return ``;
}

const calculateColors = () => {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;

    inputRGB.value = getRgbValue(red, green, blue);
}

redRange.addEventListener('input', calculateColors);
greenRange.addEventListener('input', calculateColors);
blueRange.addEventListener('input', calculateColors);