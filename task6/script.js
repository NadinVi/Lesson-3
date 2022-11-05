// You need to make simple quiz.

// Ask the users a few questions (>4), using prompt.
// If the answer is right add 10 points (for every right answers).
// If the answer is wrong or user clicked cancel - you don't add any points.
// When the user will answer all questions, show the result using alert (like: You have 30 points. You answered correctly for 3/10.).


// Some question for example:

// How much will 2+2?
// The sun rises in the east?
// How much will 5 / 0 be?
// What color is the sky?
// What is the correct answer to the ultimate question of life, the universe and all that. (42)


// Вам нужВам нужно сделать простой тест.

// Задайте пользователям несколько вопросов (> 4), используя prompt.
// Если ответ правильный, добавьте 10 баллов (за каждый правильный ответ).
// Если ответ неверный или пользователь нажал кнопку "Отмена" - баллы не добавляются.
// Когда пользователь ответит на все вопросы, покажите результат с помощью оповещения 
//(например: У вас 30 баллов. Вы ответили правильно на 3/10.).


questionOne = prompt("How many days in a week?"); //7
questionTwo = prompt("Is it 2022 now?"); // Yes
questionThree = prompt("What is the capital of Ukraine?"); // Kyiv
questionFour = prompt("How much will 2+2?"); // 4

userPoints = 0;
correctAnswer = 0;


if (+questionOne === 7) {
    userPoints += 10;
    correctAnswer += 1;
}

if (questionTwo?.toLowerCase() === "yes") {
    userPoints += 10;
    correctAnswer += 1;
}

if (questionThree?.toLowerCase() === "kyiv") {
    userPoints += 10;
    correctAnswer += 1;
 }

if (+questionFour === 4) {
    userPoints += 10;
    correctAnswer += 1;
}

alert(`You got ${userPoints} points. You answered correctly ${correctAnswer}/4.`);



