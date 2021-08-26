let habilidades = [
    { name: 'logo-sass', alt: 'logo sass' },
    { name: 'logo-less', alt: 'logo less' },
    { name: 'logo-typescript', alt: 'logo typescript' },
    { name: 'logo-react', alt: 'logo react' },
    { name: 'logo-php', alt: 'logo php' },
    { name: 'logo-mysql', alt: 'logo mysql' }
];

export default function ResponsiveHabilidad() {

    const $responsiveHabilidad = document.createElement('div');
    $responsiveHabilidad.classList.add('responsive-habilidad');

    habilidades.forEach((el) => {
        const $boxHabilidad = document.createElement('div');
        $boxHabilidad.classList.add('box-habilidad');
        const $img = document.createElement('img');
        $img.src = `assets/images/logos/${el.name}.webp`;
        $img.alt = el.alt;
        $img.width = '100';
        $img.height = '100';

        $boxHabilidad.appendChild($img);
        $responsiveHabilidad.appendChild($boxHabilidad);
    });

    return $responsiveHabilidad;

}