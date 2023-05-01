function greetings() {
    const name = prompt('Как вас зовут?');
    msg = `Привет, ${name}!`;
    alert(msg);
}

greetings();
console.log(msg);