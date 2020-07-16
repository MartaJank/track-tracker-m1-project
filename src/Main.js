'use strict';

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('genre');
console.log(myParam)



let rock = ["https://api.deezer.com/genre/133/artists", "https://api.deezer.com/genre/152/artists", "https://api.deezer.com/genre/154/artists", "https://api.deezer.com/genre/156/artists", "https://api.deezer.com/genre/160/artists"];
let metal = ["https://api.deezer.com/genre/155/artists", "https://api.deezer.com/genre/464/artists"];
let reggae = ["https://api.deezer.com/genre/144/artists", "https://api.deezer.com/genre/146/artists", "https://api.deezer.com/genre/147/artists"];
let indie = ["https://api.deezer.com/genre/85/artists", "https://api.deezer.com/genre/86/artists", "https://api.deezer.com/genre/87/artists", "https://api.deezer.com/genre/106/artists", "https://api.deezer.com/genre/110/artists", "https://api.deezer.com/genre/134/artists", "https://api.deezer.com/genre/154/artists", "https://api.deezer.com/genre/466/artists"];
let classical = ["https://api.deezer.com/genre/98/artists", "https://api.deezer.com/genre/99/artists", "https://api.deezer.com/genre/100/artists", "https://api.deezer.com/genre/103/artists", "https://api.deezer.com/genre/105/artists", "https://api.deezer.com/genre/173/artists", "https://api.deezer.com/genre/174/artists", "https://api.deezer.com/genre/175/artists", "https://api.deezer.com/genre/176/artists", "https://api.deezer.com/genre/179/artists"];
let rap = ["https://api.deezer.com/genre/116/artists", "https://api.deezer.com/genre/166/artists", "https://api.deezer.com/genre/167/artists", "https://api.deezer.com/genre/202/artists", "https://api.deezer.com/genre/206/artists", "https://api.deezer.com/genre/208/artists"];
let pop = ["https://api.deezer.com/genre/95/artists", "https://api.deezer.com/genre/110/artists", "https://api.deezer.com/genre/132/artists", "https://api.deezer.com/genre/165/artists", "https://api.deezer.com/genre/168/artists"];
let latin = ["https://api.deezer.com/genre/60/artists", "https://api.deezer.com/genre/67/artists", "https://api.deezer.com/genre/71/artists", "https://api.deezer.com/genre/73/artists", "https://api.deezer.com/genre/116/artists", "https://api.deezer.com/genre/122/artists", "https://api.deezer.com/genre/138/artists", "https://api.deezer.com/genre/145/artists", "https://api.deezer.com/genre/197/artists"];
let jazz = ["https://api.deezer.com/genre/129/artists", "https://api.deezer.com/genre/130/artists", "https://api.deezer.com/genre/131/artists", "https://api.deezer.com/genre/153/artists", "https://api.deezer.com/genre/171/artists", "https://api.deezer.com/genre/181/artists", "https://api.deezer.com/genre/183/artists", "https://api.deezer.com/genre/184/artists", "https://api.deezer.com/genre/185/artists"];
let electronic = ["https://api.deezer.com/genre/106/artists", "https://api.deezer.com/genre/108/artists", "https://api.deezer.com/genre/109/artists", "https://api.deezer.com/genre/111/artists", "https://api.deezer.com/genre/113/artists", "https://api.deezer.com/genre/115/artists"];
let world = ["https://api.deezer.com/genre/2/artists", "https://api.deezer.com/genre/16/artists", "https://api.deezer.com/genre/33/artists", "https://api.deezer.com/genre/35/artists", "https://api.deezer.com/genre/36/artists", "https://api.deezer.com/genre/37/artists", "https://api.deezer.com/genre/38/artists", "https://api.deezer.com/genre/42/artists", "https://api.deezer.com/genre/44/artists", "https://api.deezer.com/genre/48/artists", "https://api.deezer.com/genre/50/artists", "https://api.deezer.com/genre/58/artists", "https://api.deezer.com/genre/60/artists", "https://api.deezer.com/genre/67/artists", "https://api.deezer.com/genre/71/artists", "https://api.deezer.com/genre/73/artists", "https://api.deezer.com/genre/75/artists", "https://api.deezer.com/genre/81/artists", "https://api.deezer.com/genre/177/artists", "https://api.deezer.com/genre/178/artists"];
let whatever = ["https://api.deezer.com/genre/0/artists"];



  const getArtists = (array) => {
    console.log(array)
    let trackList = [];
    Promise.all(array.map((url) => fetch(`https://cors-anywhere.herokuapp.com/${url}`).then((resp) => resp.json())))
      .then((json) => {
        //console.log(json);
        return json;
      })
      .then((res) => {
        return Promise.all(res.map((obj) => obj.data))
       })
          .then((arr) =>
            //console.log(arr.flat())
            arr.flat()
          )
          .then((res) => {
            return Promise.all(res.map((obj) => obj.tracklist))
        })
              .then((arr) => {
              //console.log(arr)
              const randomLists = [];
              for (let i = 0; i < 4; i++) {
                let randomIndex = Math.floor(Math.random() * arr.length);
                
                let randomList = arr[randomIndex];
                if (!randomLists.includes(randomList)) {
                  randomLists.push(randomList)
                }
              }
             //console.log(randomLists)
              return Promise.all(randomLists.map((url) => fetch(`https://cors-anywhere.herokuapp.com/${url}`).then((resp) => resp.json())))
        })
      .then((res) => {
        return Promise.all(res.map((obj) => obj.data))
       })
          .then((arr) =>
            //console.log(arr.flat())
            arr.flat()
          )
          .then((res) => {
            return Promise.all(res.map((obj) => obj.id))
        })
    .then((arr) => {
              //console.log(arr)
              const randomTracks = [];
              for (let i = 0; i < 4; i++) {
                let randomIndex = Math.floor(Math.random() * arr.length);
                
                let randomId = arr[randomIndex];
                if (!randomTracks.includes(randomId)) {
                  randomTracks.push(randomId)
                }
              }
      //console.log(randomTracks)
      return randomTracks
    })
    .then((randomTracks) => { 
        let ul = document.getElementById("songs-list");
        ul.innerHTML = ""
    
        for (let y = 0; y < randomTracks.length; y++) {
           let trackIds = document.createElement("li"); 
            trackIds.innerHTML = `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=600&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=${randomTracks[y]}&app_id=1" width="600" height="90"></iframe>`
            ul.appendChild(trackIds)
        }
          })
      .catch((err) => {
        console.log(err);
      });
  };
  //console.log(getArtists(rockArray));

getArtists(eval(myParam))








