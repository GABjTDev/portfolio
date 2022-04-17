async function getData() {
    const res = await fetch('../data/data.json');
    const data = await res.json();
    return await data;
};

function drawBox(el, box) {
    const $boxHabilidad = document.createElement('div');
    $boxHabilidad.classList.add('box-img');

    $boxHabilidad.addEventListener('click', () => {

        function removeModal() {
            $modal.classList.remove('modal-active');
        }

        let $modal = document.getElementById('modal');
        $modal.classList.contains('modal-active') ? $modal.classList.remove('modal-active') : $modal.classList.add('modal-active');

        let $close = document.getElementById('close-modal');
        $close.addEventListener('click', removeModal)
        $modal.addEventListener('click', removeModal)

        const $containModal = document.querySelector('.contain-modal');

        $containModal.addEventListener('click', (e) => {
            e.stopPropagation();
        })

        let $title = document.getElementById('title');
        $title.innerHTML = el.title;

        let $img = document.getElementById('img-modal');
        $img.src = `./assets/images/trabajos/${el.name}.jpg`;
        $img.alt = el.alt;

        let $desc = document.getElementById('desc');
        $desc.innerHTML = el.desc || '';

        let $tools = document.getElementById('tools');

        while ($tools.firstElementChild) {
            $tools.removeChild($tools.firstElementChild);
        }

        el.tools.forEach(tool => {
            const $p = document.createElement('p');
            $p.innerHTML = tool;
            $tools.appendChild($p);
        })

        let $demo = document.getElementById('demo');
        $demo.href = el.demo;
        let $code = document.getElementById('code');
        $code.href = el.code;
    })

    const $img = document.createElement('img');
    $img.src = `assets/images/trabajos/${el.name}.jpg`;
    $img.width = '330';
    $img.alt = el.alt;

    $boxHabilidad.appendChild($img);
    box.appendChild($boxHabilidad);
}

function crearElementos(box, difficulty = '') {

    getData().then(res => {
        res.forEach((el) => {

            if (el.difficulty === difficulty) {
                drawBox(el, box);
            } else if (difficulty === 'all') {
                drawBox(el, box);
            }
        });
    });


}

function classExist($button) {
    $button.forEach($btn => {

        if ($btn.classList.contains('is-active')) {
            $btn.classList.remove('is-active');
        }

    })
}

export function createGallery() {

    const $boxGallery = document.querySelector('.box-gallery');

    getData().then(res => {

        res.forEach((el, i) => {
            if (i <= 3) {
                drawBox(el, $boxGallery);
            }
        });

    });

}

export function filter() {

    const $box = document.querySelector('.box-gallery');
    const $button = document.querySelectorAll('.filter-box');

    $button.forEach($btn => {

        $btn.addEventListener('click', (e) => {

            $button.forEach($disabled => {
                $disabled.firstElementChild.disabled = 'disabled';
            })

            classExist($button);
            $btn.classList.add('is-active');

            while ($box.firstElementChild) {
                $box.removeChild($box.firstElementChild);
            }

            const className = e.target.classList[0];

            const $gif = document.createElement('img');
            $gif.src = "assets/images/loader.gif";
            $gif.classList.add('gif');

            $box.appendChild($gif);

            setTimeout(() => {

                while ($box.firstElementChild) {
                    $box.removeChild($box.firstElementChild);
                }

                switch (className) {
                    case 'junior': crearElementos($box, 'junior');
                        break;
                    case 'intermediate': crearElementos($box, 'intermediate');
                        break;
                    case 'advanced': crearElementos($box, 'advanced');
                        break;
                    default: crearElementos($box, 'all');
                        break;
                }

                $button.forEach($enabled => {
                    $enabled.firstElementChild.removeAttribute('disabled');
                })

            }, 2000);

        });
    });
}