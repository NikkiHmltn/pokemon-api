const container = document.querySelector(".container");


fetch('https://api.github.com/users/NikkiHmltn')
.then(response => {
    return response.json();
})
.then(githubData => {
    const nikkiObj = {
        name: githubData.name,
        username: githubData.login,
        location: githubData.location
    }
    console.log(nikkiObj);

    const newElement = document.createElement('p');
    newElement.textContent = nikkiObj.name;
    container.appendChild(newElement);
})

