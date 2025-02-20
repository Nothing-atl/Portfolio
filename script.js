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
            description = 'I created this website as a fun project. It features the current moon phase and NASA"s Astronomy Picture of the Day. The site includes engaging sections such as "Stars,""Coffee," and "Zodiac," where you can explore interesting facts about each topic.Additionally, it offers a language converter tool that supports translations between 48 different languages. I used HTML, CSS and javascript to create this website.';
            link = 'https://nothing-atl.github.io/tree/'; // Add your project link here
        } else if (projectId === '3') {
            title = 'Image Recognition';
            description = 'I worked on image classification in Python using Convolutional Neural Networks (CNNs)with TensorFlow. I trained and validated the model to improve its performance, and in the end, it was able to classify complex images with great accuracy.';
            link = 'https://github.com/Nothing-atl/image-recognition'; // Add your project link here
        }
        else if (projectId === '4') {
            title = 'Laptop Sales Analysis and Forecasting';
            description = 'I analyzed Best Buy"s 2024 laptop sales data to uncover trends and forecast future sales using tools like Python and machine learning models, including Linear Regression. My work focused on identifying the best- and worst-selling brands, understanding how pricing affects sales, and exploring consumer preferences. I found that mid-priced laptops were the most popular, while HP stood out for offering diverse and competitively priced models. These insights provided actionable recommendations to help retailers and manufacturers align their strategies with what customers are looking for, making them more competitive in the market.';
            link = 'https://github.com/Nothing-atl/Laptop-Sales-Analysis-and-Forecasting'; // Add your project link here
        }

        else if (projectId === '5') {
            title = 'object-detection ';
            description = 'This project uses the powerful YOLOv8 framework for detecting objects in images and vedios with high accuracy and efficiency.';
            link = 'https://your-link-to-project3.com'; // Add your project link here
        }

        else if (projectId === '6') {
            title = 'Story-website ';
            description = 'This is a website i made for publishing my stories..';
            link = 'https://nothing-atl.github.io/Story-website/'; // Add your project link here
        }

        else if (projectId === '7') {
            title = 'Alarm App (iOS)';
            description = 'A fully customizable alarm app built with SwiftUI. It supports scheduling alarms, custom sounds, dark mode, repeat settings, and real-time alarm management.';
            link = 'https://github.com/Nothing-atl/alarm-app'; // Add your project link here
        }

        else if (projectId === '8') {
            title = 'Fifteenpuzzle ';
            description = 'This project aims to develop a solver for the NxN puzzle using a variety of algorithms, heuristics, and techniques. The solver will be programmed in Java and optimized for solving the puzzle in the least possible moves. The project involves testing the solver on various NxN puzzle configurations, ranging from 3x3 to 9x9. During the process I have tried many algorithms and heuristics to develop this solver. The project will contribute to the development of more efficient and effective solvers for the NxN puzzle, which has implications for various industries, including gaming, logistics, and transportation.';
            link = 'https://github.com/Nothing-atl/fifteenpuzzle'; // Add your project link here
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