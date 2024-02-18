function getUserInfo() {
  const username = document.getElementById("username-input").value.trim();
  if (username === "") {
    alert("Please enter valid Github username.");
    return;
  }

  fetch(`https://api.github.com/users/${username}`, {
  })
  .then(async response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // return response.json();
    const data = await response.json();
    displayUserInfo(data);
    // console.log(await response.json());
  })  
  .catch(error => {
    console.error('Error fetching user information:', error);
    alert("Error fetching user information. Please try again.");
  });
}

function displayUserInfo(data) {
  const userInfoDiv = document.getElementById("user-info");
  userInfoDiv.innerHTML = `
    <h5 class="text-primary mb-4 mb-sm-5">Your requested user information is provided below:</h5>
    <div class="row">
        <div class="col-sm-4">
            <img class="mb-4" src="${data.avatar_url}">
        </div>
        <div class="col-sm-8">
            <p><strong>Username:</strong> ${data.login}</p>        
            <p><strong>Bio:</strong> ${data.bio ? data.bio : '<em>Bio not available</em>'}</p>       
            <p><strong>Name:</strong> ${data.name ? data.name : '<em>Name not available</em>'}</p>        
            <p><strong>Company:</strong> ${data.company ? data.company : '<em>Company info not available</em>'}</p>        
            <p><strong>Location:</strong> ${data.location ? data.location : '<em>Location info not available</em>'}</p>        
            <p><strong>Followers:</strong> ${data.followers}</p>        
            <p><strong>Following:</strong> ${data.following}</p>        
            <p><strong>Number of public repos:</strong> ${data.public_repos}</p>        
            <p><strong>Created:</strong> ${data.created_at}</p>        
            <p><strong>Updated:</strong> ${data.updated_at}</p>        
            <p><strong>URL:</strong> <a href="${data.html_url}" target=_blank>${data.html_url}</a></p>        
        </div>
    </div>
    `;
}



function getOrgInfo() {
  const orgname = document.getElementById("org-input").value.trim();
  if (orgname === "") {
    alert("Please enter valid Github Organization name.");
    return;
  }

  fetch(`https://api.github.com/orgs/${orgname}`, {
  })
  .then(async response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayOrgInfo(data);
  })  
  .catch(error => {
    console.error('Error fetching organization information:', error);
    alert("Error fetching organization information. Please try again.");
  });
}

function displayOrgInfo(data) {
  const orgInfoDiv = document.getElementById("org-info");
  orgInfoDiv.innerHTML = `
  <h5 class="text-primary mb-4 mb-sm-5">Your requested organization information is provided below:</h5>
  <div class="row">
      <div class="col-sm-4">
          <img class="mb-4" src="${data.avatar_url}">
      </div>
      <div class="col-sm-8">
          <p><strong>Username:</strong> ${data.login}</p>        
          <p><strong>Bio:</strong> ${data.bio ? data.bio : '<em>Bio not available</em>'}</p>       
          <p><strong>Name:</strong> ${data.name ? data.name : '<em>Name not available</em>'}</p>        
          <p><strong>Company:</strong> ${data.company ? data.company : '<em>Company info not available</em>'}</p>        
          <p><strong>Location:</strong> ${data.location ? data.location : '<em>Location info not available</em>'}</p>         
          <p><strong>Followers:</strong> ${data.followers}</p>        
          <p><strong>Following:</strong> ${data.following}</p>        
          <p><strong>Number of public repos:</strong> ${data.public_repos}</p>        
          <p><strong>Created:</strong> ${data.created_at}</p>        
          <p><strong>Updated:</strong> ${data.updated_at}</p>        
          <p><strong>URL:</strong> <a href="${data.html_url}" target=_blank>${data.html_url}</a></p>        
      </div>
  </div>
    `;
}