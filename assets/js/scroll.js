function Touch($list) {

    $list.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });

}

export default function scroll() {

    const $listActive = document.querySelectorAll('.nav ul li');

    window.addEventListener('scroll', () => {

        Touch($listActive)

        if (window.scrollY === 0 || window.scrollY < 695) {
            $listActive[0].classList.add('active');
        } else if (window.scrollY === 695 || window.scrollY < 1277) {
            $listActive[1].classList.add('active');
        } else if (window.scrollY === 1277 || window.scrollY < 1644) {
            $listActive[2].classList.add('active');
        } else if (window.scrollY === 1644 || window.scrollY < 2267) {
            $listActive[3].classList.add('active');
        } else if (window.scrollY >= 2267) {
            $listActive[4].classList.add('active');
        }

    });

}