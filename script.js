(function() {
            const countdownElement = document.getElementById("countdown");
            const launchDate = new Date("August 1, 2025 00:00:00").getTime();

            function updateCountdown() {
                const now = new Date().getTime();
                const distance = launchDate - now;

               if (distance < 0) {
                     clearInterval(countdown);
                    window.location.href = "home.html"; // or "main.html" or whatever your homepage file is
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.textContent = `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }

            const timer = setInterval(updateCountdown, 1000);
            updateCountdown(); // initial call immediately

            // Form handling
            const form = document.getElementById('notify-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = form.querySelector('input[type="email"]');
                if (emailInput.validity.valid) {
                    alert(`Thank you! We'll notify you at ${emailInput.value}.`);
                    form.reset();
                } else {
                    alert('Please enter a valid email address.');
                    emailInput.focus();
                }
            });
        })();