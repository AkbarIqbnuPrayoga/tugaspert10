function showThankYouModal() {
    // Cek jika form valid sebelum menampilkan pop up
    const form = document.getElementById('subscriptionForm');
    if (form.checkValidity()) {
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show();
        form.reset(); // Reset form setelah berhasil subscribe
    }
}

// JavaScript for handling form submission
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Mencegah refresh halaman
    const myModal = new bootstrap.Modal(document.getElementById('sendMessageModal'));
    myModal.show();
    this.reset();
};

const fadeUps = document.querySelectorAll('.fade-up');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeUps.forEach(element => {
    observer.observe(element);
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".fashion-card");
    const cardsPerPage = 3;
    let currentPage = 1;

    function showPage(page) {
        currentPage = page;
        const start = (page - 1) * cardsPerPage;
        const end = start + cardsPerPage;

        cards.forEach((card, index) => {
        card.style.display = index >= start && index < end ? "block" : "none";
        });

        document.getElementById("prevPage").classList.toggle("disabled", page === 1);
        document.getElementById("nextPage").classList.toggle("disabled", page === Math.ceil(cards.length / cardsPerPage));
    }
    document.getElementById("prevPage").addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage > 1) showPage(currentPage - 1);
    });
    document.getElementById("nextPage").addEventListener("click", function(e) {
        e.preventDefault();
        if (currentPage < Math.ceil(cards.length / cardsPerPage)) showPage(currentPage + 1);
    });
    document.getElementById("page1").addEventListener("click", function(e) {
        e.preventDefault();
        showPage(1);
    });
    document.getElementById("page2").addEventListener("click", function(e) {
        e.preventDefault();
        showPage(2);
    });
    // Initialize first page
    showPage(1);
    });


