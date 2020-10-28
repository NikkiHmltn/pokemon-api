fetch('https://api.github.com/users/NikkiHmltn')
.then(response => {
    return response.json();
})
.then(githubData => {
    console.log(githubData);
})

fetch('https://docs.spacexdata.com/')