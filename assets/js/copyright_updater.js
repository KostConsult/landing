document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    copyrightElement.textContent = `© Copyright of Kost Consult 2024 - ${currentYear}`;
});