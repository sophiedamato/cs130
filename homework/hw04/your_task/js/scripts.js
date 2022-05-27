const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

const element = document.querySelector('#tracks')
element.innerHTML = "";
fetch(baseURL + '?type=track&q=' + term) 
.then((response) => response.json())
.then((data) => {

    if (data.length == 0) {
        document.querySelector("#tracks").innerHTML += "No tracks found"
       }   

    for(track of data.slice(0,5)) {
        element.innerHTML +=`
        <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event);">
        <img src="${track.album.image_url}" alt="${track.name}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${track.name}</h2>
            <p>
                ${track.artist.name}
            </p>
        </div>
    </button>`
    }
});
};

const playTrack = () => {
    for (const track of tracks){
        onclick = document.querySelector('#current-track').innerHTML += (`
        <div id="current-track" class="track-item" data-preview-track="${track.spotify_url}"> 
        <img src="${track.spotify_url}" alt="${track.name}">
        <i class="fas play-track fa-pause" aria-hidden=:true"></i>
        <div class="label">
            <h2<${track.name}}</h2>
            <p>
                ${track.name}
                </p>
        </div>`)
        ;}
};
 

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
        const element = document.querySelector('#albums')
element.innerHTML = "";
fetch(baseURL + '?type=album&q=' + term) 
.then((response) => response.json())
.then((data) => {
    for(album of data) {
        element.innerHTML +=`<button class="track-item preview" data-preview-track="${album.preview_url}" onclick="handleTrackClick(event);">
        <img src="${album.image_url}" alt="${album.name}">
        <i class="fas play-track fa-play" aria-hidden="true"></i>
        <div class="label">
            <h2>${album.name}</h2>
            <p>
                ${album.name}
            </p>
        </div>
    </button>`
    }
});
};


const getArtistHTML = (artist) => {
    if (!artist.image_url) {
//set any image in//
    }
    return `
    <section class="artist-card" id="${artist.id}">
        <div>
            <img src="${artist.image_url} alt="${artist.name}" >
            <h2>${artist.name}</h2>
            <div class="footer">
                <a href="${artist.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${artist}" and load the first artist into the #artist section 
        of the DOM...`);

        document.querySelector("#artist").innerHTML = "";
        fetch(baseURL + '?type=artist&q=' + term) 
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.length > 0) {
                const firstArtist = data [0]
                console.log (firstArtist);
                document.querySelector("#artist").innerHTML += getArtistHTML(firstArtist)
               }   
        })
        
    };

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);

    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }}
