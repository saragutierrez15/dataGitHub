const api = 'https://api.github.com'

const html = document.querySelector('#app');

const templateContent = `
<section id = 'container'>
  <header>
    User GitHub
  </header>
  <main>    
    <div id ="users">
      <ul id ="listUsers"></ul>
    </div>
  </main>
</section>
`;
html.innerHTML = templateContent

const userContent = document.getElementById('listUsers')

const getUsers = () => {
  fetch(`${api}/users`)
    .then((response) => response.json()
      .then((users) => {
        console.log(users)
        const template = users.map(user =>                 
         `<div class="card">
            <h3>${user.login}</h3>
            <img class='imagen' src=${user.avatar_url}>
            <a href = ${user.html_url} target = blank> ${user.html_url} </a>
          </div>           
        `)        
          userContent.innerHTML = template
      }))
    }
  getUsers()
 
const searcher = (data, condition) => {
    const userSearch =data.filter(user => user.login.includes(condition));
    return userSearch
  }
 



