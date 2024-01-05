<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="scripts/script.js"> 
    </script>
    <link rel="stylesheet" href="styles/styles.css"
    <title>Калькулятор</title>
</head>
<body>
    <div class="container"
        <h1>Калькулятор</h1>

        <div>
            <input type="number" value="6" id="first-input">
            <input type="number" value="4" id="second-input">
        </div>

        <div>
            <button id="plus">+</button>
            <button id="minus">-</button>
        </div>
        <div>
            <button id="multi">*</button>
            <button id="division">/</button> 
        </div>

        <button id="calc">Посчитать</button>

        <p>Результат: <span id="res">10</span></p>
    </div>
</body>
</html>
