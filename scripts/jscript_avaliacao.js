document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('nota');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            updateStars(selectedRating);
            ratingValue.textContent = `Avaliação: ${selectedRating} estrela${selectedRating > 1 ? 's' : ''}`;
        });

        star.addEventListener('mouseover', function() {
            updateStars(this.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', function() {
            updateStars(selectedRating);
        });
    });

    document.getElementById('submit-button').addEventListener('click', function() {
        if (selectedRating > 0) {
            alert(`Você enviou uma avaliação de ${selectedRating} estrela${selectedRating > 1 ? 's' : ''}!`);
            // Exibe a mensagem de avaliação concluída
            alert('Avaliação concluída!');
        } else {
            alert('Por favor, selecione uma avaliação antes de enviar.');
        }
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});
