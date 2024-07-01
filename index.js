// returns a list of elements named body
// access the first index of the list
const body = document.getElementsByTagName("body")[0]

const setBgColor = (color) => {
    body.style.backgroundColor = color;
};

const setBgRandom = () => {
    let red = Math.round((Math.random() * 255));
    let green = Math.round((Math.random() * 255));
    let blue = Math.round((Math.random() * 255));

    let color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;

};