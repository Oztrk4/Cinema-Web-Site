const countdown = setInterval(function () {
  const timeleft = new Date(2024, 5, 10) - new Date();

  if (timeleft <= 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML =
      "Campaign is Finished";
  } else {
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeleft % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
}, 1000);