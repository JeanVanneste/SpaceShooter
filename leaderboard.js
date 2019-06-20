// import { html, render } from './node_modules/lit-html/lit-html';
const ip = 'localhost';

function getScores() {
    fetch(`http://${ip}:3030/scores`).then(res => res.json()).then(json => {
        let leaderboard = '';
        console.log(json.scores);
        for (let score of json.scores) {
            console.log(json.scores[score]);
            leaderboard += `<li>${score.player} ${score.score}</li> `;
        }
        document.getElementById('leaderboard').innerHTML = leaderboard;
    });
}