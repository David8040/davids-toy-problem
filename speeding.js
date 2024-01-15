const prompt = require("prompt-sync")({ sigint: true });

function speedChecker() {
    let speed = parseFloat(prompt("Enter your speed: "));
    const allowedSpeed = 70;
    const extraSpeedPerDemerit = 5;
    const maxPoints = 12;

    if (speed <= allowedSpeed) {
        return "Ok";
    }

    const demeritPoints = Math.floor((speed - allowedSpeed) / extraSpeedPerDemerit);

    if (demeritPoints >= maxPoints) {
        return "License suspended";
    }

    return `Points: ${demeritPoints}`;
}

console.log(speedChecker());
