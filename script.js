document.addEventListener('DOMContentLoaded', () => {
    // Scrollspy
    const mainNav = document.getElementById('menuNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#menuNav',
            rootMargin: '0px 0px -40%',
            smoothScroll: true
        });
    }

    // E-mail toast
    const btnEmail = document.getElementById('btnCopiarEmail');
    if (btnEmail) {
        btnEmail.addEventListener('click', function () {
            const email = 'ailuj3109@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const toastEl = document.getElementById('toastEmail');
                if (toastEl) {
                    const toast = new bootstrap.Toast(toastEl);
                    toast.show();
                }
            });
        });
    }
});