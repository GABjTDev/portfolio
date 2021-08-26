import ResponsiveHabilidad from './responsiveButton.js';

export default function Show($box, $show, $hidden) {

    $show.addEventListener('click', (e) => {

        let responsive;

        const $gif = document.createElement('img');
        $gif.src = "assets/images/loader.gif";
        $gif.classList.add('gif');

        $box.appendChild($gif);

        setTimeout(() => {
            if (e.target.id == 'habilidades-show') {
                responsive = ResponsiveHabilidad();
            }

            $box.removeChild($gif);
            $box.appendChild(responsive);

        }, 1000)


        $show.classList.add('btn-hidden');
        $hidden.classList.remove('btn-hidden');
    });

    $hidden.addEventListener('click', (e) => {

        $box.removeChild($box.lastChild);

        $show.classList.remove('btn-hidden');
        $hidden.classList.add('btn-hidden');
    });


}