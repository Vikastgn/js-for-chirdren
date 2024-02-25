let pickWord = function () {
    let words = [
        "программа",
        "макака",
        "прекрасный",
        "оладушек",
        "календарь",
        "ремонт",
        "кошка"
       ];
    return words[Math.floor(Math.random() * words.length)]// Возвращает случайно выбранное слово
    };
    let setupAnswerArray = function (word) {
        // Возвращает итоговый массив для заданного слова word
        let answerArray = [];
        for (let i = 0; i < word.length; i++) {
            answerArray[i] = "_";
         }
         return answerArray;
        };
       let showPlayerProgress = function (answerArray) {
        alert(answerArray.join(" "));// С помощью alert отображает текущее состояние игры
       };
       let getGuess = function () {
        return prompt("Угадайте букву или нажмите Отмена для выхода из игры.");// Запрашивает ответ игрока с помощью prompt
       };
       let updateGameState = function (guess, word, answerArray) {
        let correctGuesses = 0;
        for (let j = 0; j < word.length; j++) {
            if ((word[j] === guess.toLowerCase()) && (answerArray[j] === "_")) {
            answerArray[j] = guess.toLowerCase();
            correctGuesses++;
        }
        }
        return correctGuesses;// Обновляет answerArray согласно ответу игрока (guess)
        // возвращает число, обозначающее, сколько раз буква guess
        // встречается в слове, чтобы можно было обновить значение
        // remainingLetters
       };
       let showAnswerAndCongratulatePlayer = function (answerArray) {
        alert(answerArray.join(" "));
        alert("Отлично! Было загадано слово " + word);// С помощью alert показывает игроку отгаданное слово 
        // и поздравляет его с победой
       };
    let word = pickWord();
    // answerArray: итоговый массив
    let answerArray = setupAnswerArray(word);
    // remainingLetters: сколько букв осталось угадать
    let remainingLetters = word.length;
    while (remainingLetters > 0) {
     showPlayerProgress(answerArray);
     // guess: ответ игрока
     let guess = getGuess(); 
     if (guess === null) {
     break;
     } else if (guess.length !== 1) {
     alert("Пожалуйста, введите одиночную букву.");
     } else {
     // correctGuesses: количество открытых букв
     let correctGuesses = updateGameState(guess, word, 
    answerArray);
     remainingLetters -= correctGuesses;
     }
    }
    showAnswerAndCongratulatePlayer(answerArray);