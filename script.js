document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function createCloud() {
    const cloudEmojis = ['☁️', '⛅️'];
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.innerHTML = cloudEmojis[Math.floor(Math.random() * cloudEmojis.length)];
    cloud.style.top = Math.random() * window.innerHeight + 'px';
    cloud.style.animation = `cloudFloat ${Math.random() * 20 + 30}s linear`;
    cloud.style.opacity = (Math.random() * 0.4 + 0.6).toString();
    cloud.style.transform = `scale(${Math.random() * 0.5 + 0.8})`;
    document.body.appendChild(cloud);
    
    cloud.addEventListener('animationend', () => cloud.remove());
}

setInterval(createCloud, 6000);
for(let i = 0; i < 4; i++) createCloud();

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
