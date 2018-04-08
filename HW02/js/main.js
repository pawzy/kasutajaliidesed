/**
 * Created by Pawzy on 21/02/2018.
 */



const appState = {
    lifeCount: 3,
    score: 0,
    messagesOnHold: 0,
    messageSender: "zero",
    messageRecipient: "tolkien",
    messageBody: "Lorem ipsum",
    gameOver: false
};
var vm = new Vue({
    data: appState,
    methods: {
        loseLife: function (event) {
            this.lifeCount -= 1;
            if (this.lifeCount == 0) {
                this.gameOver = true;
                alert("Game Over");
            }
        },
        gainLife: function (event) {
            if (this.lifeCount < 3) {
                this.lifeCount += 1;
            }
        },
        doubleScore: function (event) {
            this.score *= 2;
        },
        correctChoice: function (event) {
            this.score += 1;
        },
        wrongChoice: function (event) {
            this.loseLife();
        },
        specialTaskCorrect: function (event) {
            this.gainLife();
            this.doubleScore();
        },
        reset: function(event) {
            this.lifeCount = 3;
            this.score = 0;
            this.gameOver = false;
        }
    }

}).$mount('#game');