// Obtener los elementos del DOM
const siguienteBtn = document.getElementById('siguienteBtn');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const imagen = document.getElementById('imagen');
const musica = document.getElementById('musica');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');
const texto = document.getElementById('texto');
const body = document.body;
const h1 = document.getElementById('texto');
const lyricsContainer = document.getElementById('lyricsContainer');

//Aqui pones la letra o lyrics de tu cancion, buscas el forma .LRC de la cancion, la copeas y le pides a alguna IA que te ayude a
// pasarla a este codigo convirtiendo los segundos o minutos a MILISEGUNDO (IMPORTANTE)
const lyrics = [
    { time: 8250, text: "Esta noche otra vez la veo, oh-oh 🌙" },
    { time: 12920, text: "Aguantarme las gana' no puedo, bebé 😩" },
    { time: 17860, text: "No sé cómo voy a pasar 🤔" },
    { time: 20310, text: "Pero sé cómo va a terminar 🔚" },
    { time: 22290, text: "Es que todavía no puedo explicar 🤷‍♂️" },
    { time: 25150, text: "Lo rica, mami, que tú estás 😍" },
    { time: 27480, text: "En un rato otra vez la veo, oh-oh 🌟" },
    { time: 32300, text: "Aguantarme las gana' no puedo, bebé 😩" },
    { time: 36960, text: "No sé cómo voy a pasar 🤔" },
    { time: 39440, text: "Pero sé cómo va a terminar 🔚" },
    { time: 41540, text: "Es que todavía no puedo explicar 🤷‍♂️" },
    { time: 44040, text: "Lo rica, mami, que tú estás, yeah 😘" },
    { time: 48640, text: "Ya estoy afuera 🚪" },
    { time: 50380, text: "La veo y todo se me acelera 💓" },
    { time: 52640, text: "Mi lambo pega con tu cartera 🚗💨" },
    { time: 55010, text: "Algo mágico pasa cuando estamo' tú y yo ✨" },
    { time: 58270, text: "Esto es una movie, me siento en L.A., eh 🎬" },
    { time: 61020, text: "Hoy llegamo' después de las 6:00, ey ⏰" },
    { time: 63120, text: "Yo te deseo y no te vo'a dar break 💔" },
    { time: 64940, text: "Por ti yo rompo la ley, yeah 🚨" },
    { time: 67260, text: "¿A qué sabes tú? 🤔" },
    { time: 69980, text: "Te pienso to el día ☀️" },
    { time: 71189, text: "Yo me muero por tenerte 💖" },
    { time: 74180, text: "Ven, ¿por qué te me resistes? 😏" },
    { time: 77020, text: "Si tú me deseas, ma 😘" },
    { time: 79158, text: "Se te nota en tu mirada 👀" },
    { time: 81205, text: "Que no quieres que me vaya, baby 😢" },
    { time: 85080, text: "En un rato otra vez la veo 🌙" },
    { time: 89800, text: "Aguantarme las gana' no puedo, bebé 😩" },
    { time: 91380, text: "No sé cómo voy a pasar 🤔" },
    { time: 96630, text: "Pero sé cómo va a terminar 🔚" },
    { time: 99878, text: "Es que todavía no puedo explicar 🤷‍♂️" },
    { time: 101450, text: "Lo rica, mami, que tú estás, eh 😍" },
    { time: 106632, text: "Mamichula, estoy al borde de la locura 😵" }, 
    { time: 109555, text: "La más cara de toda' las pinturas 🎨" },
    { time: 111815, text: "Tus besos toa' las penas me curan 💋" }, 
    { time: 113558, text: "Te tengo desnuda 🌹" }, 
    { time: 110807, text: "Quieres to, de eso no tengo duda 🤔" },
    { time: 120026, text: "Me estrellé en las curva' de tu cintura 💃" },
    { time: 122777, text: "Llegó el momento, se acabó la tortura ⏳" },
    { time: 125160, text: "¿A qué sabes tú? 🤔" },
    { time: 127762, text: "Te pienso to el día ☀️" },
    { time: 129041, text: "Yo me muero por tenerte 💖" },
    { time: 131166, text: "Ven, ¿por qué te me resistes? 😏" },
    { time: 134085, text: "Si tú me deseas, ma 😘" },
    { time: 136708, text: "Se te nota en tu mirada 👀" },
    { time: 138905, text: "Que no quieres que me vaya, baby 😢" },
    { time: 142259, text: "En un rato otra vez la veo, oh 🌙" },
    { time: 147742, text: "Aguantarme las gana' no puedo, bebé 😩" },
    { time: 153238, text: "No sé cómo voy a pasar 🤔" },
    { time: 156463, text: "Pero sé cómo va a terminar 🔚" },
    { time: 159678, text: "Es que todavía no puedo explicar 🤷‍♂️" },
    { time: 163045, text: "Lo rica, mami, que tú estás, eh 😍" },
    { time: 164294, text: "Yeah 👍" },
    { time: 167777, text: "Ra-Rauw, Rauw Alejandro 🎤" },
    { time: 169947, text: "Con Tainy 🎶" },
    { time: 172445, text: "Yeah, yeah, yeah 🙌" },
    { time: 179996, text: "Uh-uh 🎵" }
];

let lyricsTimeouts = [];

// Imágenes del carrusel (agrega aquí las imágenes que deseas mostrar)
const imagenesCarrusel = [
    'img/musica/gato.jpeg',  // Cambia estas rutas con tus imágenes
    'img/musica/jugo.jpeg',
    'img/musica/baño.jpeg',
    'img/musica/nerd.jpeg',
    'img/musica/lentes.jpeg',
    'img/musica/hehe.jpeg',
    'img/musica/rosa.jpeg',
    'img/musica/spider.jpeg',
    'img/musica/uwu.jpeg',
    'img/musica/woa.jpeg',
    'img/musica/parado.jpeg',
    'img/musica/bat.jpeg',
    'img/musica/game.jpeg',
    'img/musica/ciga.jpeg',
    'img/musica/mucho.jpeg',
    'img/musica/call.jpeg',
    // Puedes agregar más imágenes aquí
];

// imágenes de fondo
const fondos = [
    'url("img/Musica/Snoopy.jpeg")',
    'url("img/Musica/logo.jpeg")'
];

// Medidas de las imagenes de fondo
const medidas = [
    '84.375px 150px',
    '183.75px 169.75px'
]

const fondoTitulo = [
    '',
    '#ff8bec'
]

// Aqui puedes EDITAR las listas de imágenes, GIFs y textos para cada transicion
const opciones = [
    { img: 'img/musica/bailesnoop.gif', text: 'Estuve escuchando una cancion... ❤️👀', gif: 'img/musica/piano.gif' },
    { img: 'img/musica/data.jpeg', text: '❤️ Y QUIERO DEDICARTELA 💕', gif: 'img/musica/amor.gif' }
];

const musicaSrc = 'musica/sci-fi.mp3'; // Aqui se cambia el archivo por otra cancion
let index = 0;



// Función para cambiar contenido al presionar "Siguiente"
siguienteBtn.addEventListener('click', () => {
    if (index < opciones.length) {
        imagen.src = opciones[index].img;
        texto.textContent = opciones[index].text;
        gif1.src = opciones[index].gif;
        gif2.src = opciones[index].gif;
        body.style.backgroundImage = fondos[index];
        body.style.backgroundSize = medidas[index];
        h1.style.backgroundColor = fondoTitulo[index];
        index++;
    }
    
    // Si ya se han hecho dos clics, ocultar "Siguiente" y mostrar "Play"
    if (index === opciones.length) {
        siguienteBtn.style.display = 'none';
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'inline-block';

        musica.src = musicaSrc;
    }
});

// Función para cambiar las imágenes en el carrusel
function cambiarImagenCarrusel() {
    if (index < imagenesCarrusel.length) {
        imagen.src = imagenesCarrusel[index];
        index++;
    } else {
        index = 0; // Reiniciar el carrusel
    }
}

// Función para mostrar las lyrics sincronizadas
function showLyrics() {
    lyricsContainer.style.display = "block"; // Asegurar que las lyrics sean visibles

    lyrics.forEach(line => {
        const timeout = setTimeout(() => {
            lyricsContainer.innerHTML = line.text;
        }, line.time - musica.currentTime * 1000); // Ajusta al tiempo actual

        lyricsTimeouts.push(timeout); // Guarda el timeout
    });
}

// Función para reproducir la música al presionar "Play"
playBtn.addEventListener('click', () => {
    musica.play();
    
    // Iniciar el carrusel después de un pequeño delay (puedes ajustarlo)
    setTimeout(() => {
        // Mostrar el carrusel
        cambiarImagenCarrusel();
        carruselIntervalo = setInterval(cambiarImagenCarrusel, 3000); // Cambia la imagen cada 3 segundos
    }, 1000); // Espera 1 segundo para comenzar a cambiar las imágenes

    
    showLyrics();
});

// Función para pausar la música al presionar "Pause"
pauseBtn.addEventListener('click', () => {
    musica.pause();

    clearInterval(carruselIntervalo); // Detener el carrusel

    // Cancelar todos los timeouts activos
    lyricsTimeouts.forEach(timeout => clearTimeout(timeout));
    lyricsTimeouts = []; // Vaciar la lista de timeouts
});
