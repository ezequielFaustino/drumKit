'use strict';  //pega alguns erros e más praticas e mostra;

const sounds = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
};

const createDiv = (text) => {
    const div = document.createElement('div'); //criar um elemento div na pag HTML;
    div.classList.add('key'); // add classe no elemnto 'div' crrado;
    div.textContent = text; // recebe o parametro text para adicionar conteudo a tag 'div';
    div.id = text;
    document.getElementById('container').appendChild(div) //adiciona o elemento filho 'div' ao DOM;
};

//exibir teclas
const show = (sounds) => Object.keys(sounds).forEach(createDiv); // varrer todos os elementos desse array e criar a tag 'div'

show(sounds);
