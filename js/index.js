// 👀Итак, задачи домашнего задания, их будет две, они ОБЯЗАТЕЛЬНЫ.
// 1️⃣‼️ Создайте всплывающее окно, которое спрашивает (у вводящего пользователя на экране) ввод вашего любимого фильма и если ввод неверен, 
// то программа отправляет запрос alert “Попробуйте ещё раз”. В функции должны быть минимум 2 условия. Не просто использовуйте prompt или alert или confirm, 
// а создайте свою функцию, пример: "function Вашеимяфункциитут()"‼️

function myLikeFilms(kino){
    if (film == 'terminator')
    alert('мой любимый фильм')
    else if (kino == 'avatar')
        alert('отличный фильм')
    else alert('попробуйте набрать снова')
}
let film = prompt("введите название фильма")
myLikeFilms(film);

// 2️⃣‼️Создайте массив с произвольными элементами. Отсортируйте его в обратном порядке и выведите в документе или консоли все данные из него. ‼️

const numbers = [25, 3, 10, 8, 3];
console.log(numbers); 
numbers.sort((a, b) => a - b); 
console.log(numbers); 
numbers.reverse();
console.log(numbers);
document.write(numbers);
// let nvm = 10
// alert(nvm)
// console.log(nvm)
// document.write(nvm)
// confirm(nvm)
