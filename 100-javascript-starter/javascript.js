function doit() {
    var conditions = [
        'true',
        'false',
        '!true',
        '!false',
        '!!true',
        'true === true',
        'true == 1',
        'true === 1',
        'false == 0',
        'true != false',
        'true !== false',
        'true != 1',
        'true !== 1',
        '1 > 0',
        '0 > 1',
        '9001 > 9000',
        'true > 0',
        'false > true',
        'true || false',
        'false || true',
        'false || false',
        'true && true',
        'false && false',
        'true && false',
        'false && true'
    ];

    var gameOver = false;
    var htmlConsole = document.getElementById('js-html-console');
    alert("Play the if-else game. Ok means yes, cancel means no");
    conditions.some(function(condition) {
        var answer = confirm(`Does\n"${condition}"\nevaluate to true?`);
        var expectedResult = eval(condition);
        var message = "Nope .. \nThe correct Anser was ";

        if (answer !== expectedResult) {
            if(expectedResult) {
                message += "[OK]";
            } else {
                message += "[Cancel]";
            }
            alert(message);
            gameOver = true; // we are game over
            return true; // break out of .some loop
        }
        
    });

    if (gameOver) {
        alert("You died..");
    } else {
        alert("You win!!");
        htmlConsole.innerHTML = '<h1>winner chicken Dinner!</h1>';
    }

    // return true if gameover

    // return false to continue game (Default for now)
    // return false;

}
doit();
