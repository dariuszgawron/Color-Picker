// Sliders
const redRange = document.querySelector('.slider__input--red');
const greenRange = document.querySelector('.slider__input--green');
const blueRange = document.querySelector('.slider__input--blue');

// Color outputs
const inputRGB = document.querySelector('.form-fieldset__input[name=rgb]');
const inputHEX = document.querySelector('.form-fieldset__input[name=hex]');
const inputHSV = document.querySelector('.form-fieldset__input[name=hsv]');
const inputHSL = document.querySelector('.form-fieldset__input[name=hsl]');
const inputCMYK = document.querySelector('.form-fieldset__input[name=cmyk]');
const inputHWB = document.querySelector('.form-fieldset__input[name=hwb]');
const inputNAME = document.querySelector('.form-fieldset__input[name=name]');

const colorNames = {
    "#00bfff": "deepskyblue",
    "#00ced1": "darkturquoise",
    "#00fa9a": "mediumspringgreen",
    "#00ff00": "lime",
    "#00ff7f": "springgreen",
    "#00ffff": "cyan",
    "#0000cd": "mediumblue",
    "#0000ff": "blue",
    "#000000": "black",
    "#1e90ff": "dodgerblue",
    "#2e8b57": "seagreen",
    "#2f4f4f": "darkslategray",
    "#3cb371": "mediumseagreen",
    "#4b0082": "indigo",
    "#5f9ea0": "cadetblue",
    "#6a5acd": "slateblue",
    "#6b8e23": "olivedrab",
    "#7b68ee": "mediumslateblue",
    "#7cfc00": "lawngreen",
    "#7fff00": "chartreuse",
    "#7fffd4": "aquamarine",
    "#00008b": "darkblue",
    "#008b8b": "darkcyan",
    "#8a2be2": "blueviolet",
    "#8b0000": "darkred",
    "#8b008b": "darkmagenta",
    "#8b4513": "saddlebrown",
    "#8fbc8f": "darkseagreen",
    "#9acd32": "yellowgreen",
    "#20b2aa": "lightseagreen",
    "#32cd32": "limegreen",
    "#40e0d0": "turquoise",
    "#48d1cc": "mediumturquoise",
    "#66cdaa": "mediumaquamarine",
    "#000080": "navy",
    "#87ceeb": "skyblue",
    "#87cefa": "lightskyblue",
    "#90ee90": "lightgreen",
    "#98fb98": "palegreen",
    "#228b22": "forestgreen",
    "#483d8b": "darkslateblue",
    "#556b2f": "darkolivegreen",
    "#4169e1": "royalblue",
    "#4682b4": "steelblue",
    "#006400": "darkgreen",
    "#6495ed": "cornflowerblue",
    "#008000": "green",
    "#008080": "teal",
    "#9370d8": "mediumpurple",
    "#9400d3": "darkviolet",
    "#9932cc": "darkorchid",
    "#191970": "midnightblue",
    "#663399": "rebeccapurple",
    "#696969": "dimgray",
    "#708090": "slategray",
    "#778899": "lightslategray",
    "#800000": "maroon",
    "#800080": "purple",
    "#808000": "olive",
    "#808080": "gray",
    "#a9a9a9": "darkgray",
    "#a52a2a": "brown",
    "#a0522d": "sienna",
    "#add8e6": "lightblue",
    "#adff2f": "greenyellow",
    "#afeeee": "paleturquoise",
    "#b0c4de": "lightsteelblue",
    "#b0e0e6": "powderblue",
    "#b8860b": "darkgoldenrod",
    "#b22222": "firebrick",
    "#ba55d3": "mediumorchid",
    "#bc8f8f": "rosybrown",
    "#bdb76b": "darkkhaki",
    "#c0c0c0": "silver",
    "#c71585": "mediumvioletred",
    "#cd5c5c": "indianred",
    "#cd853f": "peru",
    "#d2b48c": "tan",
    "#d3d3d3": "lightgrey",
    "#d8bfd8": "thistle",
    "#d2691e": "chocolate",
    "#d87093": "palevioletred",
    "#da70d6": "orchid",
    "#daa520": "goldenrod",
    "#dc143c": "crimson",
    "#dcdcdc": "gainsboro",
    "#dda0dd": "plum",
    "#deb887": "burlywood",
    "#e0ffff": "lightcyan",
    "#e6e6fa": "lavender",
    "#e9967a": "darksalmon",
    "#ee82ee": "violet",
    "#eee8aa": "palegoldenrod",
    "#f0e68c": "khaki",
    "#f0f8ff": "aliceblue",
    "#f0fff0": "honeydew",
    "#f0ffff": "azure",
    "#f4a460": "sandybrown",
    "#f5deb3": "wheat",
    "#f5f5dc": "beige",
    "#f5f5f5": "whitesmoke",
    "#f5fffa": "mintcream",
    "#f8f8ff": "ghostwhite",
    "#f08080": "lightcoral",
    "#fa8072": "salmon",
    "#faebd7": "antiquewhite",
    "#faf0e6": "linen",
    "#fafad2": "lightgoldenrodyellow",
    "#fdf5e6": "oldlace",
    "#ff00ff": "magenta",
    "#ff0000": "red",
    "#ff7f50": "coral",
    "#ff8c00": "darkorange",
    "#ff69b4": "hotpink",
    "#ff1493": "deeppink",
    "#ff4500": "orangered",
    "#ff6347": "tomato",
    "#ffa07a": "lightsalmon",
    "#ffa500": "orange",
    "#ffb6c1": "lightpink",
    "#ffc0cb": "pink",
    "#ffd700": "gold",
    "#ffdab9": "peachpuff",
    "#ffdead": "navajowhite",
    "#ffe4b5": "moccasin",
    "#ffe4c4": "bisque",
    "#ffe4e1": "mistyrose",
    "#ffebcd": "blanchedalmond",
    "#ffefd5": "papayawhip",
    "#fff0f5": "lavenderblush",
    "#fff5ee": "seashell",
    "#fff8dc": "cornsilk",
    "#fffacd": "lemonchiffon",
    "#fffaf0": "floralwhite",
    "#fffafa": "snow",
    "#ffff00": "yellow",
    "#ffffe0": "lightyellow",
    "#fffff0": "ivory",
    "#ffffff": "white"
}

// Color converters
const getRgbValue = (red, green, blue) => {
    return `${red}, ${green}, ${blue}`;
}
const getHexValue = (red, green, blue) => {
    return `#${red.toString(16).padStart(2,'0')}${green.toString(16).padStart(2,'0')}${blue.toString(16).padStart(2,'0')}`;
}
const getHsvValue = (red, green, blue) => {
    red /= 255;
    green /= 255;
    blue /= 255;
    const cMax = Math.max(red, green, blue);
    const cMin = Math.min(red, green, blue);
    const delta = cMax - cMin;
    let hue = (delta === 0) ? 0 :
        (cMax === red) ? 60 * (((green - blue) / delta) % 6) :
        (cMax === green) ? 60 * ((blue - red) / delta + 2) :
        60 * ((red - green) / delta + 4);
    let saturation = cMax === 0 ? 0 : (delta / cMax);
    let value = cMax;
    hue = Math.round(hue);
    if (hue < 0) hue += 360;
    saturation = (saturation * 100).toFixed();
    value = (value * 100).toFixed();
    return `${hue}°, ${saturation}%, ${value}%`;
}
const getHslValue = (red, green, blue) => {
    red /= 255;
    green /= 255;
    blue /= 255;
    const cMax = Math.max(red, green, blue);
    const cMin = Math.min(red, green, blue);
    const delta = cMax - cMin;
    let hue = (delta === 0) ? 0 :
        (cMax === red) ? 60 * (((green - blue) / delta) % 6) :
        (cMax === green) ? 60 * ((blue - red) / delta + 2) :
        60 * ((red - green) / delta + 4)
    let lightness = (cMax + cMin) / 2;
    let saturation = (delta === 0) ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
    hue = Math.round(hue);
    if (hue < 0) hue += 360;
    lightness = (lightness * 100).toFixed();
    saturation = (saturation * 100).toFixed();
    return `${hue}°, ${saturation}%, ${lightness}%`;
}
const getCmykValue = (red, green, blue) => {
    red /= 255;
    green /= 255;
    blue /= 255;
    let key = 1 - Math.max(red, green, blue);
    let cyan = (1 - red - key) / (1 - key);
    let magenta = (1 - green - key) / (1 - key);
    let yellow = (1 - blue - key) / (1 - key);
    key = (key * 100).toFixed();
    cyan = (cyan * 100).toFixed();
    magenta = (magenta * 100).toFixed();
    yellow = (yellow * 100).toFixed();
    return `${cyan}%, ${magenta}%, ${yellow}%, ${key}%`;
}
const getHwbValue = (red, green, blue) => {
    red /= 255;
    green /= 255;
    blue /= 255;
    const cMax = Math.max(red, green, blue);
    const cMin = Math.min(red, green, blue);
    const delta = cMax - cMin;
    let hue = (delta === 0) ? 0 :
        (cMax === red) ? 60 * (((green - blue) / delta) % 6) :
        (cMax === green) ? 60 * ((blue - red) / delta + 2) :
        60 * ((red - green) / delta + 4);
    let whiteness = cMin;
    let blackness = 1 - cMax;
    hue = Math.round(hue);
    if (hue < 0) hue += 360;
    whiteness = (whiteness * 100).toFixed();
    blackness = (blackness * 100).toFixed();
    return `${hue}°, ${whiteness}%, ${blackness}%`;
}
const getNcolValue = (red, green, blue) => {
    return ``;
}
const getNameValue = (red, green, blue) => {
    const hex = getHexValue(red, green, blue);
    return colorNames[hex] || '-';
}

const calculateColors = () => {
    const red = parseInt(redRange.value);
    const green = parseInt(greenRange.value);
    const blue = parseInt(blueRange.value);

    inputRGB.value = getRgbValue(red, green, blue);
    inputHEX.value = getHexValue(red, green, blue);
    inputHSV.value = getHsvValue(red, green, blue);
    inputHSL.value = getHslValue(red, green, blue);
    inputCMYK.value = getCmykValue(red, green, blue);
    inputHWB.value = getHwbValue(red, green, blue);
    inputNAME.value = getNameValue(red, green, blue);

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// Listeners
window.addEventListener('load', calculateColors);
redRange.addEventListener('input', calculateColors);
greenRange.addEventListener('input', calculateColors);
blueRange.addEventListener('input', calculateColors);