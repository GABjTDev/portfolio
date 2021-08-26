export default function Menu() {

    const $menu = document.getElementById('burger');
    const $nav = document.querySelector('.nav');
    const $list = document.querySelectorAll('.nav ul li a');

    $menu.addEventListener('click', () => {

        $menu.classList.toggle('is-active');

        if (!$nav.classList.contains('show') || $nav.classList.contains('hidden')) {
            $nav.classList.add('show');
            $nav.classList.remove('hidden');
        } else {
            $nav.classList.add('hidden');
            $nav.classList.remove('show');
        }

    })

    const touch = () => {
        if (window.outerWidth < 1024) {
            $menu.classList.toggle('is-active');

            $nav.classList.add('hidden');
            $nav.classList.remove('show');

        }
    }

    let breakpoint = window.matchMedia('(min-width:1024px)');

    const responsive = (e) => {

        if (e.matches) {
            if ($nav.classList.contains('hidden')) {
                $nav.classList.remove('hidden');
            }
        } else {

            $list.forEach(el => {
                el.addEventListener('click', touch);
            });

        }

    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);

}