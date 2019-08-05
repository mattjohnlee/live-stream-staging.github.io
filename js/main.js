var countDownDate = new Date("August 8, 2019 9:45:00").getTime(),
    countdown = document.getElementById('js-countdown');
    cta = document.getElementById('js-cta');
    title = document.getElementById('js-title');
    deck = document.getElementById('js-deck');
    livestream = document.getElementById('js-livestream');
    countdown.classList.remove('d-none');

var x = setInterval(function() {
    d = new Date();
    localOffset = d.getTimezoneOffset() * 60000;
    utc = d.getTime() + localOffset;
    sf = utc - (3600000*7);
    now = new Date(sf).getTime();
    distance = countDownDate - now;
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdown.innerHTML = '<div class="countdown__item"><span class="countdown__number">' + days + '</span><span class="countdown__label">days</span></div><div class="countdown__item"><span class="countdown__number">' + hours + '</span><span class="countdown__label">hours</span></div><div class="countdown__item"><span class="countdown__number">' + minutes + '</span><span class="countdown__label">minutes</span></div><div class="countdown__item"><span class="countdown__number">' + seconds + '</span><span class="countdown__label">seconds</span></div>';
    deck.innerHTML = 'We have an exciting product announcement coming your way—be one of the first to hear what it is on August 8 at 10 am PT. Join the live stream to see demos and deep dives on our latest release by CEO Nat Friedman and the team who worked on it.';
    
    title.classList.add('fade-in');
    deck.classList.add('fade-in');
    livestream.classList.add('fade-in');
    countdown.classList.add('fade-in');

    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "";
        deck.innerHTML = 'We’re live from GitHub HQ in San Francisco! See demos and deep dives on our latest ship by CEO Nat Friedman and the team who worked on it.';
        countdown.classList.add('d-none');
        cta.classList.add('d-none');
    }
}, 
1000);
