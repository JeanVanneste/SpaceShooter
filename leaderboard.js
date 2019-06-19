// import { html, render } from './node_modules/lit-html/lit-html';
const ip = 'localhost';

function getScores() {
    fetch(`http://${ip}:3030/scores`).then(res => res.json()).then(json => {
        let leaderboard = '';
        console.log(json.scores);
        for (score in json.scores) {
            console.log(json.scores[score]);
            leaderboard += `<li>${json.scores[score].player} ${json.scores[score].score}</li> `;
        }
        document.getElementById('leaderboard').innerHTML = leaderboard;
    });
}