import Show from './show.js';
import Slider from './slider.js';

let habilidades = [
    { name: 'logo-html', alt: 'logo html' },
    { name: 'logo-css', alt: 'logo css' },
    { name: 'logo-js', alt: 'logo javascript' },
    { name: 'logo-jquery', alt: 'logo jquery' },
    { name: 'logo-bootstrap', alt: 'logo bootstrap' },
    { name: 'logo-github', alt: 'logo github' },
    { name: 'logo-sass', alt: 'logo sass' },
    { name: 'logo-less', alt: 'logo less' },
    { name: 'logo-typescript', alt: 'logo typescript' },
    { name: 'logo-react', alt: 'logo react' },
    { name: 'logo-php', alt: 'logo php' },
    { name: 'logo-mysql', alt: 'logo mysql' },
    { name: 'logo-firebase', alt: 'logo firebase' },
    { name: 'logo-mongoDB', alt: 'logo mongoDB' },
    { name: 'logo-nodejs', alt: 'logo nodeJS' },
    { name: 'logo-redux', alt: 'logo redux' },
];


function skillsMobile() {
    const $boxMobile = document.createElement('div');
    $boxMobile.classList.add('habilidades-mobile');
    const $boxHabilidades = document.createElement('div');
    $boxHabilidades.classList.add('box-habilidades');

    for (let i = 0; i <= 5; i++) {
        const $boxHabilidad = document.createElement('div');
        $boxHabilidad.classList.add('box-habilidad');
        const $img = document.createElement('img');
        $img.src = `assets/images/logos/${habilidades[i].name}.webp`;
        $img.width = '100';
        $img.height = '100';
        $img.alt = habilidades[i].alt;

        $boxHabilidad.appendChild($img);
        $boxHabilidades.appendChild($boxHabilidad);
    }

    $boxMobile.appendChild($boxHabilidades);

    const $buttonShow = document.createElement('button');
    $buttonShow.classList.add('btn');
    $buttonShow.id = "habilidades-show";
    $buttonShow.textContent = 'Ver más';

    const $buttonHidden = document.createElement('button');
    $buttonHidden.classList.add('btn');
    $buttonHidden.classList.add('btn-hidden');
    $buttonHidden.id = "habilidades-hidden";
    $buttonHidden.textContent = 'Ocultar';

    $boxMobile.appendChild($buttonShow);
    $boxMobile.appendChild($buttonHidden);

    return $boxMobile;
}

function skillsDesktop() {

    const $boxDesktop = document.createElement('div');
    $boxDesktop.classList.add('habilidades-desktop');
    const $slider = document.createElement('div');
    $slider.classList.add('slider');

    const $fragment = document.createDocumentFragment();

    habilidades.forEach(el => {
        const $boxHabilidad = document.createElement('div');
        const $img = document.createElement('img');
        $img.src = `assets/images/logos/${el.name}.webp`;
        $img.alt = el.alt;
        $img.width = '100';
        $img.height = '100';

        $boxHabilidad.appendChild($img);
        $fragment.appendChild($boxHabilidad);
    });

    $slider.appendChild($fragment);
    $boxDesktop.appendChild($slider);

    return $boxDesktop;
}


export default function responsiveMedia(target, mq) {

    let breakpoint = window.matchMedia(mq);
    let $habilidad = document.querySelector(`.${target}`);

    if (breakpoint.matches) {
        const $drawSkills = skillsDesktop();
        $habilidad.appendChild($drawSkills);
        Slider();
    } else {
        const $drawSkills = skillsMobile();
        $habilidad.appendChild($drawSkills);

        const $boxHabilidades = document.querySelector('.box-habilidades');
        const $habilidades = document.getElementById('habilidades-show');
        const $hiddenHabilidades = document.getElementById('habilidades-hidden');
        Show($boxHabilidades, $habilidades, $hiddenHabilidades);
    }

    breakpoint.addEventListener("change", (e) => {
        if ($habilidad.lastElementChild.classList.contains('habilidades-desktop')) {
            $habilidad.removeChild($habilidad.lastElementChild);
        } else {
            $habilidad.removeChild($habilidad.firstElementChild.nextSibling);
        }


        if (breakpoint.matches) {
            const $drawSkills = skillsDesktop();
            $habilidad.appendChild($drawSkills);
            Slider();

        } else {

            const $drawSkills = skillsMobile();
            $habilidad.appendChild($drawSkills);

            const $boxHabilidades = document.querySelector('.box-habilidades');
            const $habilidades = document.getElementById('habilidades-show');
            const $hiddenHabilidades = document.getElementById('habilidades-hidden');
            Show($boxHabilidades, $habilidades, $hiddenHabilidades);
        }
    })
}