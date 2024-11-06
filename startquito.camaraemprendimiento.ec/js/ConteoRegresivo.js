
      // Set the target date and time for the countdown (12 August 2024 at 3:30 PM)
      const targetDate = new Date('August 12, 2024 15:30:00').getTime();
  
      // Update the countdown every second
      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;
  
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        // Display the result in the respective elements
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  
        // If the countdown is complete, stop the interval and display "00" in all fields
        if (timeRemaining < 0) {
          clearInterval(countdownInterval);
          document.getElementById('days').textContent = '00';
          document.getElementById('hours').textContent = '00';
          document.getElementById('minutes').textContent = '00';
          document.getElementById('seconds').textContent = '00';
        }
      }, 1000);