const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('LucasOliveiraDev');

async function getUser(user){
    const resp = await fetch(APIURL+user);
    const respData = await resp.json();

    createrUserCard(respData);
}

function createrUserCard(user){
    
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class="cardText">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                
            </div>
        </div>
    `
    main.innerHTML = cardHTML;
}

form.addEventListener('submit',e=>{
    e.preventDefault();

    const user = search.value;

    if(user){
        getUser(user);

        search.value = '';
    }

});