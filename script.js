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
const menuToggle = document.querySelector('.menu-toggle');
const mobileOverlay = document.querySelector('.mobile-overlay');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const player = document.querySelector('.player');

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
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    
    // Style selon le type d'alerte
    alertModal.className = 'alert-modal';
    alertModal.classList.add(`alert-${type}`);
    
    // Afficher l'alerte
    alertModal.classList.add('active');
    
    // Fermer automatiquement après 3 secondes
    setTimeout(() => {
        alertModal.classList.remove('active');
    }, 3000);
}

// Fonction pour afficher les albums
function displayAlbums() {
    albumsGrid.innerHTML = '';
    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <div class="album-cover">
                <img src="${album.cover}" alt="${album.title}">
            </div>
            <div class="album-info">
                <h3>${album.title}</h3>
                <p>${album.artist}</p>
            </div>
        `;
        albumCard.addEventListener('click', () => {
            currentAlbum = album;
            showSection('home');
            displaySongs();
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
                ${song.isComingSoon ? `
                    <div class="coming-soon">
                        <i class="fas fa-clock"></i>
                        <span>Disponible le ${song.releaseDate}</span>
                    </div>
                ` : ''}
            </div>
            <div class="song-info">
                <h3 class="song-title">${song.title}</h3>
                <p class="song-artist">Par ${song.artist}</p>
            </div>
            <div class="song-actions">
                ${song.audio ? `
                    <button class="action-btn play-btn" title="Lire">
                        <i class="fas fa-play"></i>
                    </button>
                ` : ''}
                <button class="action-btn lyrics-btn" title="Paroles">
                    <i class="fas fa-music"></i>
                </button>
                <button class="action-btn add-to-playlist-btn" title="Ajouter à une playlist">
                    <i class="fas fa-plus"></i>
                </button>
                ${song.audio ? `
                    <button class="action-btn download-btn" title="Télécharger">
                        <i class="fas fa-download"></i>
                    </button>
                ` : ''}
            </div>
        `;
        
        // Gestionnaires d'événements
        const playBtn = songCard.querySelector('.play-btn');
        const lyricsBtn = songCard.querySelector('.lyrics-btn');
        const addToPlaylistBtn = songCard.querySelector('.add-to-playlist-btn');
        const downloadBtn = songCard.querySelector('.download-btn');
        
        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                playSong(song);
            });
        }
        
        lyricsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showLyrics(song);
        });
        
        addToPlaylistBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToPlaylist(song);
        });
        
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                downloadSong(song);
            });
        }
        
        songCard.addEventListener('click', () => {
            if (song.audio) {
                playSong(song);
            } else {
                showAlert('Information', `Cette chanson sera disponible le ${song.releaseDate}`, 'info');
            }
        });
        
        songsGrid.appendChild(songCard);
    });
}

// Fonction pour afficher les playlists
function displayPlaylists() {
    playlistsGrid.innerHTML = '';
    
    if (playlists.length === 0) {
        playlistsGrid.innerHTML = `
            <div class="no-playlists">
                <p>Vous n'avez pas encore de playlists</p>
                <button class="create-playlist-btn" onclick="createPlaylist()">
                    <i class="fas fa-plus"></i> Créer une playlist
                </button>
            </div>
        `;
        return;
    }
    
    playlists.forEach(playlist => {
        const playlistCard = document.createElement('div');
        playlistCard.className = 'playlist-card';
        playlistCard.innerHTML = `
            <div class="playlist-cover">
                <img src="${playlist.songs.length > 0 ? playlist.songs[0].cover : 'default-playlist.png'}" alt="${playlist.name}">
            </div>
            <div class="playlist-info">
                <h3>${playlist.name}</h3>
                <p>${playlist.songs.length} chanson${playlist.songs.length > 1 ? 's' : ''}</p>
            </div>
            <div class="playlist-actions">
                <button class="view-playlist" title="Voir la playlist">
                    <i class="fas fa-play"></i>
                </button>
                <button class="edit-playlist" title="Modifier la playlist">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-playlist" title="Supprimer la playlist">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        const viewBtn = playlistCard.querySelector('.view-playlist');
        const editBtn = playlistCard.querySelector('.edit-playlist');
        const deleteBtn = playlistCard.querySelector('.delete-playlist');
        
        viewBtn.addEventListener('click', () => {
            viewPlaylist(playlist.name);
        });
        
        editBtn.addEventListener('click', () => {
            editPlaylist(playlist.name);
        });
        
        deleteBtn.addEventListener('click', () => {
            deletePlaylist(playlist.name);
        });
        
        playlistsGrid.appendChild(playlistCard);
    });
}

// Fonction pour afficher une section
function showSection(sectionName) {
    // Cacher toutes les sections
    document.querySelectorAll('.main-content > div').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section demandée
    const targetSection = document.querySelector(`.${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Mettre à jour le menu actif
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === sectionName) {
            link.classList.add('active');
        }
    });
    
    // Mettre à jour le contenu
    switch (sectionName) {
        case 'home':
            displaySongs();
            break;
        case 'albums':
            displayAlbums();
            break;
        case 'playlists':
            displayPlaylists();
            break;
        case 'search':
            document.querySelector('.search-section').classList.add('active');
            break;
    }
    
    // Fermer le menu mobile si ouvert
    if (window.innerWidth <= 1024) {
        menuToggle.classList.remove('active');
        mobileOverlay.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

// Fonction pour jouer une chanson
function playSong(song) {
    if (!song.audio) {
        showAlert('Information', 'Cette chanson sera disponible le ' + song.releaseDate, 'info');
        return;
    }
    
    audio.src = song.audio;
    audio.play()
        .then(() => {
            isPlaying = true;
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
            currentSongDisplay.textContent = song.title;
            currentArtistDisplay.textContent = song.artist;
            currentSongCover.src = song.cover;
            
            // Mettre à jour l'index de la chanson actuelle
            currentSongIndex = currentAlbum.songs.findIndex(s => s.title === song.title);
        })
        .catch(error => {
            showAlert('Erreur', 'Impossible de lire la chanson', 'error');
            console.error('Erreur de lecture:', error);
        });
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
                showAlert('Erreur', 'Impossible de lire la chanson', 'error');
                console.error('Erreur de lecture:', error);
            });
    }
    isPlaying = !isPlaying;
}

// Fonction pour passer à la chanson suivante
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % currentAlbum.songs.length;
    const nextSong = currentAlbum.songs[currentSongIndex];
    playSong(nextSong);
}

// Fonction pour revenir à la chanson précédente
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + currentAlbum.songs.length) % currentAlbum.songs.length;
    const prevSong = currentAlbum.songs[currentSongIndex];
    playSong(prevSong);
}

// Fonction pour formater le temps
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Fonction pour afficher les paroles
function showLyrics(song) {
    lyricsText.innerHTML = song.lyrics.split('\n').map(line => `<p>${line}</p>`).join('');
    lyricsModal.classList.add('active');
}

// Fonction pour créer une playlist
function createPlaylist() {
    createPlaylistModal.classList.add('active');
}

// Fonction pour éditer une playlist
function editPlaylist(playlistName) {
    const playlist = playlists.find(p => p.name === playlistName);
    if (!playlist) return;
    
    createPlaylistModal.classList.add('active');
    const input = playlistForm.querySelector('input');
    input.value = playlistName;
}

// Fonction pour supprimer une playlist
function deletePlaylist(playlistName) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette playlist ?')) return;
    
    playlists = playlists.filter(p => p.name !== playlistName);
    savePlaylists();
    displayPlaylists();
    showAlert('Succès', 'Playlist supprimée', 'success');
}

// Fonction pour afficher une playlist
function viewPlaylist(playlistName) {
    const playlist = playlists.find(p => p.name === playlistName);
    if (!playlist) return;
    
    songsGrid.innerHTML = '';
    playlist.songs.forEach(song => {
        const songCard = document.createElement('div');
        songCard.className = 'song-card';
        songCard.innerHTML = `
            <div class="song-cover">
                <img src="${song.cover}" alt="${song.title}">
            </div>
            <div class="song-info">
                <h3 class="song-title">${song.title}</h3>
                <p class="song-artist">Par ${song.artist}</p>
            </div>
            <div class="song-actions">
                <button class="play-btn" title="Lire">
                    <i class="fas fa-play"></i>
                </button>
                <button class="lyrics-btn" title="Paroles">
                    <i class="fas fa-music"></i>
                </button>
                <button class="remove-from-playlist-btn" title="Retirer de la playlist">
                    <i class="fas fa-minus"></i>
                </button>
            </div>
        `;
        
        const playBtn = songCard.querySelector('.play-btn');
        const lyricsBtn = songCard.querySelector('.lyrics-btn');
        const removeBtn = songCard.querySelector('.remove-from-playlist-btn');
        
        playBtn.addEventListener('click', () => {
            playSong(song);
        });
        
        lyricsBtn.addEventListener('click', () => {
            showLyrics(song);
        });
        
        removeBtn.addEventListener('click', () => {
            playlist.songs = playlist.songs.filter(s => s.title !== song.title);
            savePlaylists();
            viewPlaylist(playlistName);
            showAlert('Succès', 'Chanson retirée de la playlist', 'success');
        });
        
        songsGrid.appendChild(songCard);
    });
}

// Fonction pour ajouter une chanson à une playlist
function addToPlaylist(song) {
    selectedSongForPlaylist = song;
    addToPlaylistModal.classList.add('active');
    displayPlaylistList();
}

// Fonction pour afficher la liste des playlists
function displayPlaylistList() {
    playlistList.innerHTML = '';
    
    if (playlists.length === 0) {
        playlistList.innerHTML = `
            <div class="no-playlists">
                <p>Vous n'avez pas encore de playlists</p>
                <button onclick="createPlaylist()">
                    <i class="fas fa-plus"></i> Créer une playlist
                </button>
            </div>
        `;
        return;
    }
    
    playlists.forEach(playlist => {
        const playlistItem = document.createElement('div');
        playlistItem.className = 'playlist-item';
        playlistItem.innerHTML = `
            <span>${playlist.name}</span>
            <button class="add-to-playlist" data-name="${playlist.name}">
                <i class="fas fa-plus"></i>
            </button>
        `;
        
        const addBtn = playlistItem.querySelector('.add-to-playlist');
        addBtn.addEventListener('click', () => {
            const playlist = playlists.find(p => p.name === addBtn.dataset.name);
            if (!playlist) return;
            
            if (playlist.songs.some(s => s.title === selectedSongForPlaylist.title)) {
                showAlert('Information', 'Cette chanson est déjà dans la playlist', 'info');
                return;
            }
            
            playlist.songs.push(selectedSongForPlaylist);
            savePlaylists();
            addToPlaylistModal.classList.remove('active');
            showAlert('Succès', 'Chanson ajoutée à la playlist', 'success');
        });
        
        playlistList.appendChild(playlistItem);
    });
}

// Fonction pour télécharger une chanson
function downloadSong(song) {
    if (!song.audio) {
        showAlert('Information', 'Cette chanson sera disponible le ' + song.releaseDate, 'info');
        return;
    }
    
    const link = document.createElement('a');
    link.href = song.audio;
    link.download = `${song.title} - ${song.artist}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showAlert('Succès', 'Téléchargement commencé', 'success');
}

// Fonction pour rechercher
function search(query) {
    if (!query) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = [];
    albums.forEach(album => {
        album.songs.forEach(song => {
            if (song.title.toLowerCase().includes(query.toLowerCase()) ||
                song.artist.toLowerCase().includes(query.toLowerCase())) {
                results.push({
                    ...song,
                    albumTitle: album.title
                });
            }
        });
    });
    
    searchResults.innerHTML = '';
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <img src="${result.cover}" alt="${result.title}">
            <div class="search-result-info">
                <h3>${result.title}</h3>
                <p>${result.artist} • ${result.albumTitle}</p>
            </div>
            <button class="play-search-result" data-title="${result.title}">
                <i class="fas fa-play"></i>
            </button>
        `;
        
        const playBtn = resultItem.querySelector('.play-search-result');
        playBtn.addEventListener('click', () => {
            const song = currentAlbum.songs.find(s => s.title === result.title);
            if (song) {
                playSong(song);
            }
        });
        
        searchResults.appendChild(resultItem);
    });
}

// Fonction pour basculer le menu mobile
function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    sidebar.classList.toggle('active');
}

// Fonction pour mettre à jour la mise en page du lecteur
function updatePlayerLayout() {
    const width = window.innerWidth;
    if (width <= 768) {
        player.style.left = '0';
        mainContent.style.marginLeft = '0';
    } else {
        player.style.left = '250px';
        mainContent.style.marginLeft = '250px';
    }
}

// Événements
document.addEventListener('DOMContentLoaded', () => {
    // Initialisation
    displaySongs();
    updatePlayerLayout();
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            showSection(link.dataset.section);
        });
    });
    
    // Menu mobile
    menuToggle.addEventListener('click', toggleMenu);
    mobileOverlay.addEventListener('click', toggleMenu);
    
    // Lecteur audio
    playButton.addEventListener('click', togglePlay);
    prevButton.addEventListener('click', prevSong);
    nextButton.addEventListener('click', nextSong);
    
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });
    
    audio.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audio.duration);
    });
    
    audio.addEventListener('ended', () => {
        nextSong();
    });
    
    progressBar.addEventListener('input', () => {
        const time = (progressBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });
    
    // Volume
    const volumeSlider = document.getElementById('volume');
    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value / 100;
        });
    }
    
    // Modales
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal, .playlist-modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    // Formulaire de playlist
    playlistForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = playlistForm.querySelector('input');
        const playlistName = input.value.trim();
        
        if (!playlistName) {
            showAlert('Erreur', 'Veuillez entrer un nom pour la playlist', 'error');
            return;
        }
        
        const existingPlaylist = playlists.find(p => p.name === playlistName);
        if (existingPlaylist) {
            // Mise à jour de la playlist existante
            existingPlaylist.name = playlistName;
        } else {
            // Création d'une nouvelle playlist
            playlists.push({
                name: playlistName,
                songs: []
            });
        }
        
        savePlaylists();
        displayPlaylists();
        createPlaylistModal.classList.remove('active');
        showAlert('Succès', existingPlaylist ? 'Playlist mise à jour' : 'Playlist créée avec succès', 'success');
        input.value = '';
    });
    
    // Redimensionnement
    window.addEventListener('resize', updatePlayerLayout);
}); 