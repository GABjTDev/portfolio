export default function Loading() {

    const loadingContainer = document.querySelector('.loading');

    setTimeout(() => {
        loadingContainer.classList.add('active');
    }, 2000);

    setTimeout(() => {
        document.body.removeChild(loadingContainer);
    }, 3000);

}