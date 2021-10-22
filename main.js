const socialMediaLinks = {
  github: 'devcastilho',
  youtube: 'channel/UC6mhNwN-kseGTJR5v2PBs3Q',
  instagram: 'rafaeldecastilho_',
  facebook: 'aguiargh',
  twitter: 'aguiar1995_'
}
function changeSocialMediaLinks() {
  /*document.getElementById('userName').textContent = 'Rafael e Dayane'*/
  /*userName.textContent = 'Rafael e Dayane'*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://www.${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      linkGitHub.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
