import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const getCurrentSecValue = function ({ seconds }) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
};

const currentSec = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;

player.on('timeupdate', throttle(getCurrentSecValue, 1000));
// console.log(currentSec);

player.setCurrentTime(currentSec).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});