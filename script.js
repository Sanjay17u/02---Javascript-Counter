(function() {
    const buttons = document.querySelectorAll('.btn-counter')
    let count = 0;

    buttons.forEach(function(button){
        button.addEventListener('click', function() {
            if(button.classList.contains('decrease-btn')) {
                 count--;
            }
            else if (button.classList.contains('increase-btn')) {
                count++;
            }

            const counter = document.querySelector(".counter")
            counter.textContent=count

            if (count > 0) {
                counter.style.color = "green"
            } else {
                counter.style.color = "red"
            }
        })
    })
})()