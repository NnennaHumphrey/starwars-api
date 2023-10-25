

document.addEventListener('DOMContentLoaded', () => {
    const characterNames = document.getElementById('characterNames');
    const charName = document.getElementById('charName');
    const charGender = document.getElementById('charGender');
    const charHeight = document.getElementById('charHeight');

    // Function to fetch and populate character names
    const fetchCharacterNames = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people');
            const data = await response.json();

            data.results.forEach((character) => {
                const li = document.createElement('li');
                li.textContent = character.name;
                li.addEventListener('click', () => {
                    displayCharacterDetails(character);
                });
                characterNames.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Function to display character details and show the corresponding image
    const displayCharacterDetails = (character) => {
        // Hide all character images
        const characterImages = document.querySelectorAll('.character-image');
        characterImages.forEach((img) => {
            img.style.display = 'none';
        });

        charName.textContent = character.name;
        charGender.textContent = `Gender: ${character.gender}`;
        charHeight.textContent = `Height: ${character.height} cm`;

        // Show the corresponding image based on the character's name
        const characterImage = document.getElementById(character.name.toLowerCase().replace(/\s/g, '-'));
        if (characterImage) {
            characterImage.style.display = 'block';
        }
    };

    fetchCharacterNames();
});
