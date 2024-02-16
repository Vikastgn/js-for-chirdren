let randomBodyParts = ["глаз", "нос", "череп"];
let radomAdjectives = ["вонючий", "унылый", "дурацкий"];
let randomBodyPartsAnimals = ["морда", "лапа", "тело", "хвост"];
let randomWords = ["мухи", "выдры", "дубины", "мартышки", "крысы"];
let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let radomAdjective = radomAdjectives[Math.floor(Math.random() *3 )];
let randomBodyPartsAnimal = randomBodyPartsAnimals[Math.floor(Math.random() * 4)]
let randomWord = randomWords[Math.floor(Math.random() * 5)];
let randomInsult = "У тебя " + randomBodyPart + " еще более " + radomAdjective + ",чем " + randomBodyPartsAnimal + " у " + randomWord + "!!!";
console.log(randomInsult);