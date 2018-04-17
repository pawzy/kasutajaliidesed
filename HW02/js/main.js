/**
 * Created by Pawzy on 21/02/2018.
 */

const appState = {
    lifeCount: 3,
    score: 0,
    messagesOnHold: 0,
    messagesSorted: 0,
    gameOver: false,
    timerActive: true,
    timerValue: 0,
    timerInterval: "",
    timerMax: 1000,
    specialAvailable: false,
    specialCount: 0,
    losePoint: false,
    increaseScore: false,
    duplicateScore: false,
    focus: false,
    loseLifeSound: "",
    gameOverSound: "",
    doubleScoreSound: "",
    increaseScoreSound: "",
    gameStart: "",
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
            correct: true,
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
            this.loseLifeSound.play();
            this.lifeCount -= 1;
            this.losePoint = true;
            this.closeModals();
            if (this.lifeCount == 0) {
                this.gameOverSound.play();
                this.gameOver = true;
                clearInterval(this.timerInterval);
                document.getElementById("gameOver").classList.add("md-show");
            }
        },
        gainLife: function () {
            if (this.lifeCount < 3) {
                this.lifeCount += 1;
            }
        },
        doubleScore: function () {
            this.doubleScoreSound.play();
            this.duplicateScore = true;
            this.score *= 2;
        },
        correctChoice: function () {
            this.increaseScoreSound.play();
            this.increaseScore = true;
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
            this.gameOver = true;
            this.messagesOnHold = 0;
            this.specialAvailable = false;
            this.messagesSorted = 0;
            this.specialCount = 0;
        },
        generateRandomModal: function () {
            this.losePoint = false;
            this.duplicateScore = false;
            this.increaseScore = false;
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
            this.messagesSorted += 1;
            this.messagesOnHold -= 1;
            this.specialCount += 1;
            if (this.specialCount == 4) {
                this.specialAvailable = true;
                this.specialCount = 0;
            }
        },
        generateEquation: function () {
            this.losePoint = false;
            this.duplicateScore = false;
            this.increaseScore = false;
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            sum = x + y;
            this.equation.x = x;
            this.equation.y = y;
            this.equation.sum = sum;
            document.getElementById("equation").value = x + " + " + y + " = ";
            document.getElementById("solution").value = "";

            // if (this.specialAvailable == true) {
            if (this.focus) {
                addFocus = setInterval(function () {
                    document.getElementById("solution").focus();
                    this.focus = false;
                    clearInterval(addFocus);
                }, 50);
            }
        },
        checkEquationSolution: function () {
            if (document.getElementById("solution").value == this.equation.sum) {
                this.doubleScore();
                this.gainLife();
            } else {
                this.loseLife()
            }
            document.getElementById("solution").value = "";
            this.messagesSorted += 1;
            this.specialAvailable = false;
        },
        timer: function () {
            console.log("timer called");
            if (this.timerValue >= this.timerMax) {
                this.timerValue = 0;
                this.addMessage();
                return
            } else {
                this.timerValue += 5 + this.messagesSorted / 2;
            }
            document.getElementById("progress").style.width = (this.timerValue / 2) + 'px';
        },
        closeModals: function () {
            document.getElementById("message").classList.remove("md-show");
            document.getElementById("special").classList.remove("md-show");

        },
        addMessage: function () {
            this.losePoint = false;
            this.duplicateScore = false;
            this.increaseScore = false;
            if (this.messagesOnHold == 3 || (this.messagesOnHold == 2 && this.specialAvailable)) {
                this.messagesOnHold = 0;
                this.specialAvailable = false;
                this.specialCount = 0;
                this.loseLife();
                return
            }
            this.messagesOnHold += 1;
        },
        timerStart: function () {
            this.reset();
            this.generateEquation();
            this.messagesOnHold = 1;
            this.timerInterval = setInterval(this.timer, 25);
        },
        openModalInstructions: function () {
            console.log("called");
            document.getElementById("instructions").classList.add("md-show");
        },
        openInstructions: function () {
            document.getElementById("instructions").classList.add("md-show");
            this.reset();
        },
        generateSpecial: function () {
            this.focus = true;
            this.generateEquation();
        }
    },
    beforeMount: function () {
        this.gameStart = new Audio("audio/gameStart.mp3");
        this.loseLifeSound = new Audio("audio/loseLife.mp3");
        this.gameOverSound = new Audio("audio/gameOver.mp3");
        this.doubleScoreSound = new Audio("audio/doubleScore.mp3");
        this.increaseScoreSound = new Audio("audio/increaseScore.mp3");

    },
    mounted: function () {
        this.openModalInstructions();
        this.gameStart.play();
        window.addEventListener('keyup', function (event) {
            if (event.keyCode === 13 && $("#special").hasClass("md-show")) {
                vm.checkEquationSolution();
                $("#special").removeClass("md-show");
            }
        });
    }


}).$mount('#game');

