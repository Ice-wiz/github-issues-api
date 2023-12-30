// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// Listen for submissions on GitHub repo name input form
gitHubForm.addEventListener('submit', (e) => {

  // Prevent default form submission action
  e.preventDefault();

  // Get the GitHub username input field on the DOM
  let reponameInput = document.getElementById('reponameInput');

  // Get the value of the GitHub username input field
  let gitHubRepoName = reponameInput.value;

  // Run GitHub API function, passing in the GitHub username
  requestReposIssues(gitHubRepoName);

});

const token = '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';

const requestReposIssues = (name) => {
  fetch(`https://api.github.com/repos/${name}/issues`,
    {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      formatResults(data);
    })
    .catch(error => console.error(error))
}

const formatResults = (data) => {
  // Loop over each object in data array
  for (let i in data) {

    // Get the ul with id of of issuesRepo
    let ul = document.getElementById('issuesRepo');

    // Create variable that will create li's to be added to ul
    let li = document.createElement('li');

    // Add Bootstrap list item class to each li
    li.classList.add('list-group-item')

    // Create the html markup for each li
    li.innerHTML = (`
            <p><strong>Title:</strong> ${data[i].title}</p>
            <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
        `);

    // Append each li to the ul
    ul.appendChild(li);
    console.log("hello")
    console.log(data[i]);


  }
}