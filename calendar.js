// Calendar functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('dayModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');
    const calendarDays = document.querySelectorAll('.calendar-day');

    // Load opened days from localStorage
    const openedDays = JSON.parse(localStorage.getItem('openedDays') || '[]');
    openedDays.forEach(day => {
        const dayElement = document.querySelector(`[data-day="${day}"]`);
        if (dayElement) {
            dayElement.classList.add('opened');
        }
    });

    // Function to check if a day can be opened
    function canOpenDay(dayNumber) {
        const today = new Date();
        const currentMonth = today.getMonth(); // 0-11, where 11 is December
        const currentDay = today.getDate();
        
        // Check if it's December
        if (currentMonth !== 11) {
            return false;
        }
        
        // Check if the current day is >= the advent day
        if (currentDay >= parseInt(dayNumber)) {
            return true;
        }
        
        return false;
    }

    // Mark locked days with visual indicator
    calendarDays.forEach(day => {
        const dayNumber = day.getAttribute('data-day');
        if (!canOpenDay(dayNumber) && !openedDays.includes(dayNumber)) {
            day.classList.add('locked');
        }
    });

    // Add click event to each calendar day
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            const dayNumber = this.getAttribute('data-day');
            
            // Check if the day can be opened
            if (!canOpenDay(dayNumber)) {
                modalBody.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <h2 style="color: #c41e3a; margin-bottom: 1rem;"></h2>
                        <p style="font-size: 1.2rem; color: #2c3e50;">E prea devreme sa deschizi acest cadou iubita</p>
                        <p style="margin-top: 1rem; color: #7f8c8d;">Revino pe ${dayNumber} decembrie! </p>
                    </div>
                `;
                modal.style.display = 'block';
                return;
            }
            
            openDay(dayNumber);

            // Mark as opened and remove locked class
            if (!openedDays.includes(dayNumber)) {
                openedDays.push(dayNumber);
                localStorage.setItem('openedDays', JSON.stringify(openedDays));
                this.classList.add('opened');
                this.classList.remove('locked');
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function openDay(dayNumber) {
        const data = calendarData[dayNumber];

        if (!data) {
            modalBody.innerHTML = '<p>Aceasta zi nu este disponibila inca!</p>';
            modal.style.display = 'block';
            return;
        }

        if (dayNumber == 25) {
            // Special content for day 25
            modalBody.innerHTML = data.message;
        } else {
            // Regular day content
            modalBody.innerHTML = `
                <h2 class="modal-day-title">Ziua ${dayNumber} </h2>
                <img src="${data.image}" alt="Ziua ${dayNumber}" class="modal-image">
                <div class="modal-memory">
                    <strong> Amintire:</strong> ${data.memory}
                </div>
                <div class="modal-message">
                    ${data.message}
                </div>
                ${data.task ? `<div class="modal-task">${data.task}</div>` : ''}
            `;
        }

        modal.style.display = 'block';
    }
});
