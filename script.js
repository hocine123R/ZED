// Données des albums
const albums = [
    {
        title: "Album 2025 : Inspiration",
        artist: "Lamamri Hocine",
        cover: "Promenade sous le coucher du soleil.png",
        songs: [
            {
                title: "Bête eh oui",
                artist: "Lamamri Hocine",
                cover: "Portrait de Contrastes Émotionnels (1).png",
                audio: "bete eh oui.mp3",
                lyrics: `Bête eh oui :

Dans mon cœur j t reservè Tt une partie
Et malgré sa tu es parti
Tt lamour que j'avait pour toi hanane
Est devenu une haine
Un instant j cru quon etais un couple parfait
J jms cru que tallait fair ce que tu as fait
tas pas a te justifier
de toi j'ai pitier
tu chercher la liberté
almi tfghedh iyvrdan
wesaghkem hdrgham achal ivrdan
t tv3edh lalcol
tu nas pas ecouter mes paroles
tu n'as pas penser ni a ta sante ni a ta darone
tv3edh kan zhou t conne
win twaladh ghars tu colle
tu leurs joue ton role
et apres digh tu te sauve
tu court toujours apres le love
asmi tes3idh gar ifasnim
t'as choisis un autre
tili qlikem swarawim
mais au lieu de sa tes tof traine sur mim

Refrain:
jetais bete eh oui
toura c fini
madmktigh mamdqaragh
nek idem a l'infini
j'ai des remord
pour moi t morte
ont avait un accord
yarna tetais dacord

Couplet 2:
tizyam khdmet lqrar
tu tes prit pour un bijoux rare
toura dounith fellam tdewwer
itwacult im tepidd l3ar

ghilagh oufighd la bonne personne
mais finalment je crois que j'ai tord
nek jai retrouver gout a la vie
ma d kem iniyid amek astinidh inadama makmidzour`
            },
            {
                title: "Coucou",
                artist: "Lamamri Hocine",
                cover: "Détente au coucher du soleil.png",
                audio: null,
                releaseDate: "24 avril 2024",
                isComingSoon: true,
                lyrics: "Les paroles seront disponibles le 24 avril 2024"
            },
            {
                title: "Selina",
                artist: "Lamamri Hocine & Lwenas Boudawed",
                cover: "ChatGPT Image 18 avr. 2025, 22_44_38.png",
                audio: "gomez2.mp3",
                lyrics: `Kem ur tswidh d nek imysoulin Di soumam
Machi d selina Gomez d selina houmal
Zik ulac le corps tura keh

Ghilagh tella lmhibba 

Snruh hebba hebba 

Anmsa3af di lwaqth n chedda 

An3ich aken ilevda

Nighas amdavouwigh les sentiment 

Hgaghd mm les arguments 

Svhaghd dans un cas genant 

Nighamd hemlaghkem 

Kem tas dit non 

Tu mas brise carrément 

Et sa tas pa suffit 

Mykfara twalighkem zdati svah meddi 

Mais trnidh tedawaredh d l mahdi 

Tvghidh adasmagh 

Machi akka kmsnagh 

Nek l3youv im sragh 

Houdraght dighas di levghi 

Almi yidenna dyn ur yitevghi 

Tenidasen thilaghkem anlhou 

Hmm tagi ur dedri 



Dg nekhzour im tvinid ndama 

Dg oulim jighd chamma

Zran ak l3amma 

Taqsit nngh snent merra

D wagi d lmktouv im ouharsara

Asmi vghigh tenidd ala 

Matoura verra 

Bon debarat`
            },
            {
                title: "A Youl",
                artist: "Lamamri Hocine",
                cover: "ChatGPT Image 19 avr. 2025, 00_01_51.png",
                audio: "a youl.mp3",
                lyrics: `Couplet 1( cerveau)
Ayoul kec id la cause is
Tarit yshel iw kellax
Yzga yetalav smah
Ghas netta ytwadlam
Yeqel tadsa ilghachi
Xatar d niya our dychqi
Yetamen kan ur yzri
Anwi damdaklis anwa ur nelli
Mathwijedh dima yella
Youzzel af lghachi ur nouklal
Khatar d mmis n lhlal
Ixdem lxir daya gellan
S sebbak youghal dahnin
Yeqqar yirvah yeqqar ih
Ur ireffou ur yetchenif
Ur yetch3if
Ur yes3i nnif


Couplet2( cœur)
Dayen tura tsede3diyi
Ayen ak igedhran seba d keccini
Tesve3ded di texmam
Tett3ichidh di lemnam
Tettinfluensidh aken n diri lghachi
Almi qlen katen lkachi
Nekini ma3lich sensible
Twexreten ak felli teriten merra d les cibles
Teridhiyi deep


Refrain 
Anwa aramnagh tura 
D kec negh d wihena 
Wayqar aka 
Waykar akin 
Anwa aramnagh 
Dl3qel negh douliw 
Anwa aramnagh`
            },
            {
                title: "RAYANE",
                artist: "Lwenas Boudawed",
                cover: "ChatGPT Image 19 avr. 2025, 00_10_03.png",
                audio: "rayan tg g.  G.mp3",
                lyrics: "Les paroles seront disponibles prochainement"
            }
        ]
    }
];

// Initialisation des playlists depuis le localStorage
let playlists = JSON.parse(localStorage.getItem('playlists')) || [];

// Éléments du DOM
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const currentSongDisplay = document.getElementById('current-song');
const currentArtistDisplay = document.getElementById('current-artist');
const currentSongCover = document.getElementById('current-song-cover');
const lyricsModal = document.getElementById('lyrics-modal');
const lyricsText = document.getElementById('lyrics-text');
const closeLyricsBtn = document.querySelector('.close-lyrics');
const createPlaylistBtn = document.querySelector('.create-playlist');
const songsGrid = document.querySelector('.songs-grid');
const albumsGrid = document.querySelector('.albums-grid');
const playlistsGrid = document.querySelector('.playlists-grid');
const searchInput = document.querySelector('.search-bar input');
const searchResults = document.querySelector('.search-results');
const alertModal = document.getElementById('alert-modal');
const alertTitle = document.getElementById('alert-title');
const alertMessage = document.getElementById('alert-message');
const closeAlertBtn = document.querySelector('.close-alert');
const alertOkBtn = document.querySelector('.alert-ok');
const createPlaylistModal = document.getElementById('create-playlist-modal');
const addToPlaylistModal = document.getElementById('add-to-playlist-modal');
const playlistForm = document.querySelector('.playlist-form');
const playlistList = document.querySelector('.playlist-list');
const closePlaylistModal = document.querySelector('.close-playlist-modal');
const closeAddToPlaylistModal = document.querySelector('.close-add-to-playlist-modal');

// Variables globales
let currentAlbum = albums[0];
let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();
let selectedSongForPlaylist = null;

// Fonction pour sauvegarder les playlists
function savePlaylists() {
    localStorage.setItem('playlists', JSON.stringify(playlists));
}

// Fonction pour afficher une alerte personnalisée
function showAlert(title, message, type = 'info') {
    const alertModal = document.getElementById('alert-modal');
    const alertTitle = document.getElementById('alert-title');
    const alertMessage = document.getElementById('alert-message');
    const alertContent = document.querySelector('.alert-content');

    alertTitle.textContent = title;
    alertMessage.textContent = message;
    
    // Style selon le type d'alerte
    alertContent.className = 'alert-content';
    switch(type) {
        case 'success':
            alertContent.classList.add('alert-success');
            break;
        case 'error':
            alertContent.classList.add('alert-error');
            break;
        case 'warning':
            alertContent.classList.add('alert-warning');
            break;
        default:
            alertContent.classList.add('alert-info');
    }

    alertModal.style.display = 'flex';
    
    // Fermeture automatique après 3 secondes
    setTimeout(() => {
        alertModal.style.display = 'none';
    }, 3000);
}

// Fonction pour afficher les albums
function displayAlbums() {
    albumsGrid.innerHTML = '';
    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <img src="${album.cover}" alt="${album.title}">
            <h3>${album.title}</h3>
            <p>${album.artist}</p>
        `;
        albumCard.addEventListener('click', () => {
            currentAlbum = album;
            displaySongs();
            showSection('home');
        });
        albumsGrid.appendChild(albumCard);
    });
}

// Fonction pour afficher les chansons
function displaySongs() {
    songsGrid.innerHTML = '';
    currentAlbum.songs.forEach((song, index) => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        songCard.innerHTML = `
            <div class="song-cover">
                <img src="${song.cover}" alt="${song.title}">
                <div class="song-overlay">
                    <button class="play-song" data-index="${index}">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="show-lyrics" data-index="${index}">
                        <i class="fas fa-microphone"></i>
                    </button>
                </div>
            </div>
            <div class="song-info">
                <h3 class="song-title">${song.title}</h3>
                <p class="song-artist">Par ${song.artist}</p>
                ${song.isComingSoon ? `
                    <div class="coming-soon-badge">
                        <i class="fas fa-clock"></i>
                        <span>Sortie le ${song.releaseDate}</span>
                    </div>
                ` : ''}
            </div>
            <div class="song-actions">
                <button class="add-to-playlist" data-index="${index}" title="Ajouter à une playlist">
                    <i class="fas fa-plus"></i>
                </button>
                ${!song.isComingSoon ? `
                    <button class="download-song" data-index="${index}" title="Télécharger">
                        <i class="fas fa-download"></i>
                    </button>
                ` : ''}
            </div>
        `;
        songsGrid.appendChild(songCard);
    });
}

// Fonction pour afficher les playlists
function displayPlaylists() {
    const playlistsContainer = document.querySelector('.playlists-grid');
    if (!playlistsContainer) return;

    playlistsContainer.innerHTML = `
        <div class="playlist-card create-playlist-card" onclick="createPlaylist()">
            <div class="playlist-cover">
                <i class="fas fa-plus"></i>
            </div>
            <div class="playlist-info">
                <h3>Créer une playlist</h3>
                <p>Cliquez pour créer une nouvelle playlist</p>
            </div>
        </div>
    `;

    playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.innerHTML = `
            <div class="playlist-cover">
                <i class="fas fa-music"></i>
            </div>
            <div class="playlist-info">
                <h3>${playlist.name}</h3>
                <p>${playlist.songs.length} chanson${playlist.songs.length > 1 ? 's' : ''}</p>
                <p class="playlist-date">Créée le ${new Date(playlist.created).toLocaleDateString()}</p>
            </div>
            <div class="playlist-actions">
                <button onclick="viewPlaylist('${playlist.name}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button onclick="deletePlaylist('${playlist.name}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        playlistsContainer.appendChild(playlistCard);
    });
}

// Fonction pour afficher une section
function showSection(sectionName) {
    document.querySelectorAll('.main-content > div').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelector(`.${sectionName}-section`).style.display = 'block';
}

// Fonction pour jouer une chanson
function playSong(song) {
    if (song.isComingSoon) {
        showAlert('Information', `Cette chanson sera disponible le ${song.releaseDate}`);
        return;
    }

    try {
        audio.src = song.audio;
        audio.play()
            .then(() => {
                isPlaying = true;
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
                currentSongDisplay.textContent = song.title;
                currentArtistDisplay.textContent = song.artist;
                currentSongCover.src = song.cover;
                
                audio.addEventListener('loadedmetadata', () => {
                    durationDisplay.textContent = formatTime(audio.duration);
                });
            })
            .catch(error => {
                console.error('Erreur de lecture audio:', error);
                showAlert('Erreur', 'Erreur lors de la lecture du fichier audio. Vérifiez que le fichier existe et est accessible.');
            });
    } catch (error) {
        console.error('Erreur lors de la lecture:', error);
        showAlert('Erreur', 'Erreur lors de la lecture du fichier audio.');
    }
}

// Fonction pour mettre en pause/reprendre
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play()
            .then(() => {
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            })
            .catch(error => {
                console.error('Erreur de lecture:', error);
            });
    }
    isPlaying = !isPlaying;
}

// Fonction pour la chanson suivante
function nextSong() {
    if (currentSongIndex < currentAlbum.songs.length - 1) {
        currentSongIndex++;
        playSong(currentAlbum.songs[currentSongIndex]);
    }
}

// Fonction pour la chanson précédente
function prevSong() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        playSong(currentAlbum.songs[currentSongIndex]);
    }
}

// Fonction pour formater le temps
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Fonction pour afficher les paroles
function showLyrics(song) {
    lyricsText.innerHTML = song.lyrics.split('\n\n').map(section => {
        const lines = section.split('\n');
        const title = lines[0].endsWith(':') ? `<h3>${lines[0]}</h3>` : '';
        const content = lines.slice(title ? 1 : 0).map(line => `<p>${line}</p>`).join('');
        return `<div class="lyrics-section">${title}${content}</div>`;
    }).join('');
    lyricsModal.style.display = 'block';
}

// Fonction pour créer une playlist
function createPlaylist() {
    const playlistName = prompt('Entrez le nom de votre playlist :');
    if (playlistName && playlistName.trim() !== '') {
        if (playlists.some(p => p.name.toLowerCase() === playlistName.trim().toLowerCase())) {
            showAlert('Erreur', 'Une playlist avec ce nom existe déjà !', 'error');
            return;
        }
        
        const newPlaylist = {
            name: playlistName.trim(),
            songs: [],
            created: new Date().toISOString()
        };
        playlists.push(newPlaylist);
        savePlaylists();
        displayPlaylists();
        showAlert('Succès', `Playlist "${playlistName}" créée avec succès !`, 'success');
    }
}

// Fonction pour ajouter une chanson à une playlist
function addToPlaylist(song, playlistName) {
    const playlist = playlists.find(p => p.name === playlistName);
    if (playlist) {
        if (!playlist.songs.some(s => s.title === song.title)) {
            playlist.songs.push(song);
            savePlaylists();
            showAlert('Succès', `"${song.title}" ajoutée à "${playlistName}"`, 'success');
        } else {
            showAlert('Information', 'Cette chanson est déjà dans la playlist.', 'warning');
        }
    }
}

// Fonction pour afficher la liste des playlists dans la modale
function displayPlaylistList() {
    playlistList.innerHTML = playlists.map(playlist => `
        <div class="playlist-item">
            <div class="playlist-item-info">
                <h3>${playlist.name}</h3>
                <p>${playlist.songs.length} chanson${playlist.songs.length > 1 ? 's' : ''}</p>
            </div>
            <button class="add-to-playlist-btn" data-playlist="${playlist.name}">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    `).join('');
}

// Fonction pour télécharger la chanson
function downloadSong(song) {
    if (song.isComingSoon) {
        showAlert('Information', `Cette chanson sera disponible le ${song.releaseDate}`);
        return;
    }

    if (!song.audio) {
        showAlert('Erreur', 'Le fichier audio n\'est pas disponible', 'error');
        return;
    }

    try {
        const link = document.createElement('a');
        link.href = song.audio;
        link.download = `${song.title} - ${song.artist}.mp3`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showAlert('Succès', `Téléchargement de "${song.title}" démarré`, 'success');
    } catch (error) {
        console.error('Erreur lors du téléchargement:', error);
        showAlert('Erreur', 'Erreur lors du téléchargement de la chanson', 'error');
    }
}

// Fonction pour rechercher
function search(query) {
    const results = [];
    albums.forEach(album => {
        album.songs.forEach(song => {
            if (song.title.toLowerCase().includes(query.toLowerCase()) ||
                song.artist.toLowerCase().includes(query.toLowerCase())) {
                results.push({ album, song });
            }
        });
    });

    searchResults.innerHTML = results.map(result => `
        <div class="search-result">
            <img src="${result.song.cover}" alt="${result.song.title}">
            <div class="search-info">
                <h3>${result.song.title}</h3>
                <p>${result.song.artist}</p>
                <p class="album-name">${result.album.title}</p>
            </div>
        </div>
    `).join('');
}

// Fonction pour afficher le contenu d'une playlist
function viewPlaylist(playlistName) {
    const playlist = playlists.find(p => p.name === playlistName);
    if (playlist) {
        currentAlbum = {
            title: playlistName,
            artist: 'Playlist',
            cover: 'playlist-cover.png',
            songs: playlist.songs
        };
        displaySongs();
        showSection('home');
        showAlert('Information', `Affichage de la playlist "${playlistName}"`, 'info');
    }
}

// Fonction pour supprimer une playlist
function deletePlaylist(playlistName) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer la playlist "${playlistName}" ?`)) {
        playlists = playlists.filter(p => p.name !== playlistName);
        savePlaylists();
        displayPlaylists();
        showAlert('Succès', `Playlist "${playlistName}" supprimée`, 'success');
    }
}

// Gestion des événements
playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);
closeLyricsBtn.addEventListener('click', () => {
    lyricsModal.style.display = 'none';
});
closeAlertBtn.addEventListener('click', () => {
    alertModal.style.display = 'none';
});
alertOkBtn.addEventListener('click', () => {
    alertModal.style.display = 'none';
});
closePlaylistModal.addEventListener('click', () => {
    createPlaylistModal.style.display = 'none';
});
closeAddToPlaylistModal.addEventListener('click', () => {
    addToPlaylistModal.style.display = 'none';
});

// Gestion du formulaire de création de playlist
playlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = playlistForm.querySelector('input').value;
    if (name) {
        playlists.push({
            name: name,
            songs: []
        });
        displayPlaylists();
        createPlaylistModal.style.display = 'none';
        playlistForm.reset();
        showAlert('Succès', 'Playlist créée avec succès!');
    }
});

// Gestion des événements pour les cartes de chansons
document.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    const songIndex = target.dataset.index;
    if (songIndex === undefined) return;

    const song = currentAlbum.songs[songIndex];

    if (target.classList.contains('play-song')) {
        playSong(song);
    } else if (target.classList.contains('show-lyrics')) {
        showLyrics(song);
    } else if (target.classList.contains('add-to-playlist')) {
        if (playlists.length === 0) {
            createPlaylist();
        } else {
            const playlistName = prompt('Choisissez une playlist :\n' + 
                playlists.map(p => p.name).join('\n'));
            if (playlistName) {
                addToPlaylist(song, playlistName);
            }
        }
    } else if (target.classList.contains('download-song')) {
        downloadSong(song);
    }
});

// Gestion des événements pour la navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        showSection(section);
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
    });
});

// Gestion de la recherche
searchInput.addEventListener('input', (e) => {
    search(e.target.value);
});

// Mise à jour de la barre de progression
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Gestion du menu burger
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const mobileOverlay = document.querySelector('.mobile-overlay');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
});

mobileOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Fermer le menu lors du clic sur un lien
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Initialisation
displayAlbums();
displaySongs();
displayPlaylists(); 