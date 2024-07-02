let selectedRating = 0;

function createResponse(rating) {
    return `
        <div class="thank-you-card">
            <img class="thank-you-card__img"  src="images/illustration-thank-you.svg" alt="POS illustration">
            <p class="thank-you-card__rating">
            You selected ${rating} out of 5
            </p>
            <h1 class="thank-you-card__heading">Thank you!</h1>
            <p class="thank-you-card__sub-heading">
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!
            </p>
        </div>
        `
}

Array.from(document.getElementsByClassName("card__rating-container__btn"))
    .forEach(button => {
        button.addEventListener('click', () => {
            const selectedButton = document.getElementsByClassName('selected');

            if(selectedButton[0])
                selectedButton[0].classList.remove('selected');
            
            button.classList.add(['selected']);
            selectedRating = button.textContent;
        });
});

document.getElementById('submit-btn').addEventListener('click', function () {
    if(selectedRating) 
        document.getElementById('card').innerHTML = createResponse(selectedRating);
});



