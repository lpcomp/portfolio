function handleSkills() {
    const wrapSkills = document.querySelector('#skills-list');
    var tempElements = '';

    for (const key in skillsData) {
        tempElements += `<h5>${skillsData[key].title}</h5>`;
        tempElements += '<ul>';
            skillsData[key].skills.forEach(element => {
                tempElements += `<li>${element}</li>`;
            });
        tempElements += '</ul>';        
    }    

    wrapSkills.innerHTML = tempElements;
}