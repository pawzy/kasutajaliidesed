/**
 * Created by Pawzy on 21/02/2018.
 */



const appState = {
    lifeCount: 3,
    score: 0
};
var vm = new Vue({
    data: appState,
    methods: {
        loseLife: function (event) {
            this.lifeCount -= 1;
            if (this.lifeCount == 0) {
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
        }
    }

}).$mount('#game');