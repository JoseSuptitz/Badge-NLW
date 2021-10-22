const LinksSocialMedia = {
  github: 'Dethrak',
  youtube: 'channel/UCU7Ai3fFVEm4RUzKMKfhZSQ',
  facebook: 'lerryasz.uwu.7',
  instagram: 'journeyh_photos',
  twitter: 'Asmongold'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
