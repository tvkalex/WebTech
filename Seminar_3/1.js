const tCelsius = +prompt('Введите температуру в градусах Цельсия');
const tFahrenheit = (9 / 5) * tCelsius + 32;
alert(`Цельсий: ${tCelsius}, Фаренгейт: ${tFahrenheit.toFixed(1)}`);