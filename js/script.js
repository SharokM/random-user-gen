const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#user");

const getData = async function (numUsers) {
    const userRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await userRequest.json();

    const userResults = data.results;
    displayUsers(userResults);
    // console.log(data)
};

getData(1);


const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (let user of userResults) {
        let country = user.location.country
        let name = user.name.last
        let imageUrl = user.picture.medium
        const userDiv = document.createElement("div");
        
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
} 
};

selectUserNumber.addEventListener("change", function(e) {
    const numUsers = e.target.value;
    getData(numUsers);
})