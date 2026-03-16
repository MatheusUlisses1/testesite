<script>
        document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('intro-video');
    const introLayer = document.getElementById('intro-layer');
    const hero = document.getElementById('hero');
    const logoVideo = document.getElementById('logo-video');
    logoVideo.playbackRate = 1;

    function iniciarTransicao() {
        introLayer.classList.add('video-fade-out');
        hero.classList.add('content-fade-in');
        setTimeout(() => {
            logoVideo.play();
            introLayer.style.display = 'none'; 
            document.body.style.overflow = 'auto';
        }, 2000); 
    }
    video.addEventListener('ended', iniciarTransicao);
    video.addEventListener('error', () => {
        console.error("Erro ao carregar o vídeo da intro.");
        iniciarTransicao();
    });
    const menuIcon = document.getElementById('menu-icon');
    const accountIcon = document.getElementById('icon-account');
    const menuDrawer = document.getElementById('menu-drawer');
    const accountDrawer = document.getElementById('account-drawer');
    const overlay = document.getElementById('drawer-overlay');

    function toggleDrawer(drawer) {
        const isOpen = drawer.classList.contains('open');
        menuDrawer.classList.remove('open');
        accountDrawer.classList.remove('open');
        overlay.classList.remove('show');

        if (!isOpen) {
            drawer.classList.add('open');
            overlay.classList.add('show');
        }
    }

    menuIcon.addEventListener('click', () => toggleDrawer(menuDrawer));
    accountIcon.addEventListener('click', () => toggleDrawer(accountDrawer));
    
    overlay.addEventListener('click', () => {
        menuDrawer.classList.remove('open');
        accountDrawer.classList.remove('open');
        overlay.classList.remove('show');
    });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('transition-show');
    }
  });
});
const elements = document.querySelectorAll('.transition-box');
elements.forEach((el) => observer.observe(el));
    </script>
