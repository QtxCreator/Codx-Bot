let running = false;

document.getElementById("generate").addEventListener("click", async () => {

    if (running) return;

    let time = parseInt(document.getElementById("time").value);
    let timerEl = document.getElementById("timer");
    let signalEl = document.getElementById("signal");

    running = true;

    // Fetch signal
    const res = await fetch("/signal");
    const data = await res.json();

    signalEl.innerText = data.signal;

    let countdown = time;

    timerEl.innerText = countdown;

    let interval = setInterval(() => {
        countdown--;
        timerEl.innerText = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            running = false;
            signalEl.innerText = "";
        }
    }, 1000);

});