// Get modal element
const modal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-btn');

// Get all projects
const projects = document.querySelectorAll('.project');

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "DEVELOPER",
    "PAINTER",
    "CODER"
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
document.querySelectorAll('.show-more').forEach(function(button) {
    button.addEventListener('click', function() {
        const project = this.closest('.project');
        const fullDesc = project.querySelector('p');
        
        if (fullDesc.style.maxHeight) {
            fullDesc.style.maxHeight = null; // Hide the description
            this.textContent = 'Show More'; // Change text to "Show More"
        } else {
            fullDesc.style.maxHeight = fullDesc.scrollHeight + "px"; // Show full description
            this.textContent = 'Show Less'; // Change text to "Show Less"
        }
    });
});

// Add event listeners to each project
projects.forEach(project => {
    project.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project-id');
        
        // Set the modal content based on the project clicked
        let title, description, link;

        if (projectId === '1') {
            title = 'Dungeon-Chef ';
            description = 'A 2D arcade-style game where you collect ingredients while avoiding enemies to create magical recipes. Navigate through three unique boards - Fire, Ice and Earth - each with their own challenges and ingredients.';
            link = 'https://github.com/Nothing-atl/Dungeon-Chef'; // Add your project link here
        } else if (projectId === '2') {
            title = 'Tree';
            description = 'I created this website as a fun project. It features the current moon phase and NASA s Astronomy Picture of the Day. The site includes engaging sections such as "Stars,""Coffee," and "Zodiac," where you can explore interesting facts about each topic.Additionally, it offers a language converter tool that supports translations between 48 different languages. I used HTML, CSS and javascript to create this website.';
            link = 'https://nothing-atl.github.io/tree/'; // Add your project link here
        } else if (projectId === '3') {
            title = 'Project 3: Another Awesome App';
            description = 'A new app designed to improve workflow in Z. It helps users manage their tasks efficiently, integrating with various tools to provide seamless performance.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }
        else if (projectId === '4') {
            title = 'Project 3: Another Awesome App';
            description = 'A new app designed to improve workflow in Z. It helps users manage their tasks efficiently, integrating with various tools to provide seamless performance.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }

        else if (projectId === '5') {
            title = 'Project 3: Another Awesome App';
            description = 'A new app designed to improve workflow in Z. It helps users manage their tasks efficiently, integrating with various tools to provide seamless performance.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }

        else if (projectId === '6') {
            title = 'Project 3: Another Awesome App';
            description = 'A new app designed to improve workflow in Z. It helps users manage their tasks efficiently, integrating with various tools to provide seamless performance.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }

        else if (projectId === '7') {
            title = 'Project 3: Another Awesome App';
            description = 'A new app designed to improve workflow in Z. It helps users manage their tasks efficiently, integrating with various tools to provide seamless performance.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }

        else if (projectId === '8') {
            title = 'Project 3: Another Awesome App';
            description = 'A new app designed to improve workflow in Z. It helps users manage their tasks efficiently, integrating with various tools to provide seamless performance.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }


        // Populate the modal content
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalDesc').innerText = description;
        document.getElementById('modalLink').setAttribute('href', link); // Set the project link dynamically

        // Display the modal
        modal.style.display = 'block';
    });
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});