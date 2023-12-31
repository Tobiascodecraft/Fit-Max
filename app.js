
  function scrollToSectioncontact() {
    const section = document.getElementById('sectioncontact'); // Change to the ID of the target section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToSectionmain() {
    const section = document.getElementById('sectionmain'); // Change to the ID of the target section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToSectionopening() {
   const section = document.querySelector ("#sectiom_openinghrs");
   section .scrollIntoView ({behavior:"smooth"});
  } 



  document.addEventListener('DOMContentLoaded', function () {
    const floatingItems = document.querySelectorAll('.floating-item');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    floatingItems.forEach(item => {
      observer.observe(item);
    });
  });




  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number you want to count to
    const targetNumber = 34;
  
    // Get the counter element
    const counterElement = document.getElementById('icon');
  
    // Set the initial count to 0
    let count = 25;
  
    // Update the counter every 50 milliseconds
    const interval = setInterval(() => {
      // Increment the count
      count++;
  
      // Update the counter element
      counterElement.textContent = count;
  
      // Check if the target number is reached
      if (count === targetNumber) {
        clearInterval(interval); // Stop the counting when the target is reached
      }
    }, 110);
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number you want to count to
    const targetNumber = 91;
  
    // Get the counter element
    const counterElement = document.getElementById('icon2');
  
    // Set the initial count to 0
    let count = 79;
  
    // Update the counter every 50 milliseconds
    const interval = setInterval(() => {
      // Increment the count
      count++;
  
      // Update the counter element
      counterElement.textContent = count;
  
      // Check if the target number is reached
      if (count === targetNumber) {
        clearInterval(interval); // Stop the counting when the target is reached
      }
    }, 110);
  });

 
  document.addEventListener('DOMContentLoaded', function () {
    // Set the target number you want to count to
    const targetNumber = 10;
  
    // Get the counter element
    const counterElement = document.getElementById('icon3');
  
    // Set the initial count to 0
    let count = 0;
  
    // Update the counter every 100 milliseconds
    const interval = setInterval(() => {
      // Increment the count
      count++;
  
      // Update the counter element
      counterElement.textContent = count;
  
      // Check if the target number is reached
      if (count === targetNumber) {
        clearInterval(interval); // Stop the counting when the target is reached
      }
    }, 110); // Set the interval to 100 milliseconds
});


  
  