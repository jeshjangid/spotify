const music = new Audio('');
music.play();

const songs = [
    {
        id: 1,
        songName: `Naina Ashak Na Ho <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/1.jpg'
    },
    {
        id: 2,
        songName: `Kheriyat <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/2.jpg'
    },
    {
        id: 3,
        songName: `O Desh Mere <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/3.jpg'
    },
    {
        id: 4,
        songName: `Tera Naam Dhoka Rakh Du <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/4.jpg'
    },
    {
        id: 5,
        songName: `Tera Yaar Hu Main <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/5.jpg'
    },
    {
        id: 6,
        songName: `Chunariya - abcd2 <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/6.jpg'
    },
    {
        id: 7,
        songName: `Galti Se Mistake <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/7.jpg'
    },
    {
        id: 8,
        songName: `Hamari Adhuri Khani <br>
        <div class='subtitle'>Neha Kakker</div>
        `,
        poster: 'img/arijit/8.jpg'
    },
    {
        id: 9,
        songName: `Neki Ki Raaho Pe Tu Chal <br>
        <div class='subtitle'>Satyameva Jayate</div>
        `,
        poster: 'img/arijit/9.jpg'
    },
    {
        id: 10,
        songName: `Hamdard <br>
        <div class='subtitle'>Luka Chuppi</div>
        `,
        poster: 'img/arijit/10.jpg'
    },
    {
        id: 11,
        songName: `Mere Yaara <br>
        <div class='subtitle'>Street Dance 3</div>
        `,
        poster: 'img/arijit/11.jpg'
    },
    {
        id: 12,
        songName: `Nashse Se Chad Gayi <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/12.jpg'
    },
    {
        id: 13,
        songName: `Ae Vatan Mera Aabad Rhe Tu <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/13.jpg'
    },
    {
        id: 14,
        songName: `Agar Tum Saat Ho <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/14.jpg'
    },
    {
        id: 15,
        songName: `Pachatoge <br>
        <div class='subtitle'>Arijit Singh</div>
        `,
        poster: 'img/arijit/15.jpg'
    },
]





Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let search_results = document.getElementsByClassName('search-results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
        <div class="content">
            ${songName}
        </div>
    `
    search_results.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = 'flex';
        } else {
            items[index].style.display = 'none';
        }
        if (input.value == 0) {
            search_results.style.display = 'none'
        } else {
            search_results.style.display = ''
        }
    }
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')
    }
})


const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    })
}


const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgba(105, 105, 105, 0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster-master-play');
let download_music = document.getElementById('download-music');
let title = document.getElementById('title');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/arijit/${index}.mp3`;
        poster_master_play.src = `img/arijit/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        download_music.href = `audio/arijit/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        })
        songTitles.forEach((elem) => {
            let { songName } = elem;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName)
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)';
        makeAllplays();

        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    })

})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }

    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;

    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar')[0]
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    } else {

    }
    music.src = `audio/arijit/${index}.mp3`;
    poster_master_play.src = `img/arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach((elem) => {
        let { songName } = elem;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)';
    makeAllplays();

    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/arijit/${index}.mp3`;
    poster_master_play.src = `img/arijit/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill')
    masterPlay.classList.add('bi-pause-fill')

    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach((elem) => {
        let { songName } = elem;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)';
    makeAllplays();

    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


let pop_song_left = document.getElementById('pop-song-left');
let pop_song_right = document.getElementById('pop-song-right');
let pop_song = document.getElementsByClassName('pop-song')[0];
let pop_art_left = document.getElementById('pop-art-left');
let pop_art_right = document.getElementById('pop-art-right');
let artists_bx = document.getElementsByClassName('artists-bx')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

pop_art_right.addEventListener('click', () => {
    artists_bx.scrollLeft += 330;
})

pop_art_left.addEventListener('click', () => {
    artists_bx.scrollLeft -= 330;
})

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case 'next':
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case 'repeat':
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case 'random':
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});



const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach((elem) => {
        let { songName } = elem;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)';
    makeAllplays();

    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach((elem) => {
        let { songName } = elem;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)';
    makeAllplays();

    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    })
    songTitles.forEach((elem) => {
        let { songName } = elem;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName)
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(105, 105, 105, .1)';
    makeAllplays();

    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;

        case 'next':
            next_music();
            break;

        case 'random':
            random_music();
            break;


    }
})