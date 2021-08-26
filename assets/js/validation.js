function addClass($div) {
    $div.classList.add("error");
}

function removeClass($div) {
    $div.classList.remove("error");
}

export default function Validation() {

    const $form = document.getElementById("form");

    $form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('_replyto');
        const subject = form.get('subject');
        const message = form.get('message');

        const $success = $form.querySelector('.success');
        const $fail = $form.querySelector('.fail');

        // EXPRESIONES REGULARES
        const regName = /^[a-z + a-z]{4,20}$/gi;
        const regEmail = /^[a-z0-9]{1,20}[.]?[_]?[a-z0-9]{1,10}@{1}[a-z]{1,20}[.][a-z]{1,5}?[.a-z]{1,10}$/gi;
        const regSubject = /^[a-z0-9-_]{1,10}[ ]?[a-z0-9-_]{1,10}?[ ]?[a-z0-9-_]{1,10}?$/gi;
        const regMessage = /^[a-zñ0-9 -./a-zñ]{10,150}$/gi;

        // ERRORES
        const $boxError = $form.firstElementChild;
        const $errorName = $boxError.firstElementChild;
        const $errorEmail = $errorName.nextElementSibling;
        const $errorSubject = $errorEmail.nextElementSibling;
        const $errorMessage = $errorSubject.nextElementSibling;

        let status = {
            name: false,
            email: false,
            subject: false,
            message: false
        }

        if (regName.test(name)) {
            if ($errorName.classList.contains('error')) {
                removeClass($errorName);
            }
            status.name = true;
        } else {
            addClass($errorName);
        }

        if (regEmail.test(email)) {
            if ($errorEmail.classList.contains('error')) {
                removeClass($errorEmail);
            }
            status.email = true;
        } else {
            addClass($errorEmail);
        }


        if (regSubject.test(subject)) {
            if ($errorSubject.classList.contains('error')) {
                removeClass($errorSubject);
            }
            status.subject = true;
        } else {
            addClass($errorSubject);
        }


        if (regMessage.test(message)) {
            if ($errorMessage.classList.contains('error')) {
                removeClass($errorMessage);
            }
            status.message = true;
        } else {
            addClass($errorMessage);
        }

        let formValues = Object.values(status);
        let valid = formValues.findIndex(valor => valor === false);

        if (valid === -1) {

            const response = await fetch($form.action, {
                method: $form.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                $form.reset();
                $fail.style.display = 'none';
                $success.style.display = 'block';
            }

        } else {
            $success.style.display = 'none';
            $fail.style.display = 'block';
        }

    });

}