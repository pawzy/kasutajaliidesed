/**
 * Created by Pawzy on 21/02/2018.
 */

const appState = {
    lifeCount: 3,
    score: 0,
    messagesOnHold: 0,
    gameOver: false,
    timerActive: true,
    timerValue: 0,
    timerInterval: "",
    timerMax: 1000,
    displayNone: "none",
    equation: {
        x: 0,
        y: 0,
        sum: 0
    },
    currentMessage: {
        correct: false,
        sender: "",
        recipient: "",
        subject: "",
        content: ""
    },
    messages: [
        {
            correct: true,
            sender: "studentlife@tipikas.ee",
            recipient: "tudeng@gmail.com",
            subject: "TTÜ Tudengielu nädalakiri kevad 11. õppenädal",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: false,
            sender: "studentlife@tu.ee",
            recipient: "tudeng@gmail.com",
            subject: "Suvemängudel näeme, eks?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: true,
            sender: "studentlife@tipikas.ee",
            recipient: "tudeng@gmail.com",
            subject: "Hinda TLÜ raamatukogu teenuseid / Evaluate TLÜ Library services",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: true,
            sender: "alumni@ttu.ee",
            recipient: "tudeng@gmail.com",
            subject: "TTÜ saab 100. aastaseks, tule ja võta osa erinevatest üritustest!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: false,
            sender: "studentlife@tlu.ee",
            recipient: "tudeng@gmail.com",
            subject: "Enginaator 2018",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: true,
            sender: "studentlife@tipikas.ee",
            recipient: "tudeng@gmail.com",
            subject: "Veel jõuad! Kandideeri voli- ja esinduskokku!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: true,
            sender: "valisstipendiumid@lists.ttu.ee",
            recipient: "tudeng@gmail.com",
            subject: "[Stipiinfo] Euroopa ülikoolid ootavad!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: true,
            sender: "studentlife@tipikas.ee",
            recipient: "tudeng@gmail.com",
            subject: "TTÜ Tudengielu Nädalakiri Kevad 5. õppenädal",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: true,
            sender: "noreply@ois.ttu.ee",
            recipient: "tudeng@gmail.com",
            subject: "Esinduskogu ja IT-teaduskonna Üliõpilaskogu volikogu valimised",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: false,
            sender: "robotiklubi@robotiklubi.ee",
            recipient: "tudeng@gmail.com",
            subject: "[List] Isetegemise Õhtud 2018",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: false,
            sender: "studentlife@tipikas.ee",
            recipient: "tudeng@gmail.com",
            subject: "Kandideeri välisõppesse!",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: false,
            sender: "studentlife@tartu.ee",
            recipient: "tudeng@gmail.com",
            subject: "TÜ Õhtu – III saatesalvestus",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        },
        {
            correct: false,
            sender: "studentlife@tlu.ee",
            recipient: "tudeng@gmail.com",
            subject: "TLÜ tudengielu nädalakiri kevad 2. õppenädal",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada nisi augue, vitae tincidunt ante commodo eget. Curabitur ultricies facilisis est. Mauris gravida massa quis ex bibendum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque, mi sed imperdiet elementum, odio arcu elementum urna, sit amet tristique lacus nunc in dui. Sed tellus elit, sagittis dictum lectus sed, tincidunt consequat mauris. Donec gravida ipsum et felis tincidunt semper. Ut nibh velit, tempus eget imperdiet eget, sodales sit amet purus. Mauris eu convallis risus."
        }
    ]
};
var vm = new Vue({
    data: appState,
    methods: {
        loseLife: function () {
            this.lifeCount -= 1;
            if (this.lifeCount == 0) {
                this.gameOver = true;
                alert("Game Over");
            }
        },
        gainLife: function () {
            if (this.lifeCount < 3) {
                this.lifeCount += 1;
            }
        },
        doubleScore: function () {
            this.score *= 2;
        },
        correctChoice: function () {
            this.score += 1;
        },
        wrongChoice: function () {
            this.loseLife();
        },
        specialTaskCorrect: function () {
            this.gainLife();
            this.doubleScore();
        },
        reset: function () {
            this.lifeCount = 3;
            this.score = 0;
            this.gameOver = false;
            this.timerValue = 0;
            document.getElementById("progress").style.width = '0px';
            clearInterval(this.timerInterval);
        },
        generateRandomModal: function () {
            var random = Math.floor(Math.random() * this.messages.length);
            this.currentMessage.correct = this.messages[random].correct;
            this.currentMessage.sender = this.messages[random].sender;
            this.currentMessage.recipient = this.messages[random].recipient;
            this.currentMessage.subject = this.messages[random].subject;
            this.currentMessage.content = this.messages[random].content;
        },
        checkUserDecision: function (action) {
            if (action == "archive" && this.currentMessage.correct) {
                this.correctChoice();
            } else if (action == "delete" && !this.currentMessage.correct) {
                this.correctChoice();
            } else {
                this.wrongChoice();
            }
            this.messagesOnHold -= 1;
        },
        generateEquation: function() {
            x = Math.floor(Math.random() * 100);
            y = Math.floor(Math.random() * 100);
            sum = x + y;
            this.equation.x = x;
            this.equation.y = y;
            this.equation.sum = sum;
            document.getElementById("equation").value = x + " + " + y + " = ";
        },
        checkEquationSolution: function() {
            if (document.getElementById("solution").value == this.equation.sum) {
                this.doubleScore();
            } else {
                this.loseLife()
            }
            document.getElementById("solution").value = "";
        },
        timer: function() {
            console.log("timer called");
            if (this.timerValue >= this.timerMax) {
                this.timerValue = 0;
                this.addMessage();
                return
            } else {
                this.timerValue += 5;
            }
            document.getElementById("progress").style.width = (this.timerValue / 2) + 'px';
        },
        addMessage: function () {
            this.messagesOnHold += 1;
            console.log(this.messagesOnHold);
        },
        timerStart: function() {
            this.messagesOnHold = 1;
            this.timerInterval = setInterval(this.timer, 50);
        },
        openModalInstructions: function () {
            console.log("called");
            document.getElementById("instructions").classList.add("md-show");
        }
    },
    mounted: function () {
        this.openModalInstructions();
    }

}).$mount('#game');

