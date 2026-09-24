// Scrollspy
document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('menuNav');
    if (mainNav) {
        const spy = bootstrap.ScrollSpy.getInstance(document.body) || new bootstrap.ScrollSpy(document.body, {
            target: '#menuNav'
        });
        spy.refresh();
    }

    // Hover Cards
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.transition = "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
            card.style.borderColor = "#2a8c9d";
            card.style.boxShadow = "0 10px 20px rgba(42, 140, 157, 0.4)";
            card.style.transition = "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease";
            card.style.transform = "translateY(-8px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.borderColor = "#6c757d";
            card.style.boxShadow = "none";
        });
        
    });

    // Toast E-mail
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