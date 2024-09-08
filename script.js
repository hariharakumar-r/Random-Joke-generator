//got jokecontainer by paragraph element
const jokeContainer = document.getElementById("joke");
//got button element by btn class
const btn = document.getElementById("btn");
//got the url from JOKEAPI svv3 website
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
//let the getjoke be empty
let getJoke = () => {
//remove the fade element first of all
//both remove&add fade elemnt is same in the beigining & while clicking the button
    jokeContainer.classList.remove("fade");
//fetching the url from an public API
    fetch(url)
//data from the Public API is stored in an JSON data format
    .then(data => data.json())
//let the fetched item be
    .then(item => {
//joke class's element's text content is changed by fetching the data
        jokeContainer.textContent = `${item.joke}`;
//while the data is fetched the class selector adds a little transition to the joke
        jokeContainer.classList.add("fade");
    });
}
//event listener is used to loop the whole process
btn.addEventListener("click",getJoke);
//the getjoke function loops the whole fetch&then process again and again
getJoke();