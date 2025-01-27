const GITHUB_USERNAME = "santi224m";
const repo_list = [];

class Repo {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.url = data.html_url;
    this.language = data.language;
    this.forks_count = data.forks_count;
    this.stars_count = data.stargazers_count;
    this.file_size = data.size;
  }
}

const get_github_repos = async () => {
  const repo_url = "https://api.github.com/users/" + GITHUB_USERNAME + "/repos?per_page=8";
  const response = await fetch(repo_url);
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    let r = new Repo(data[i]);
    repo_list.push(r);
  }
}

get_github_repos();
