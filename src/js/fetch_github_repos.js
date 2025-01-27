const GITHUB_USERNAME = "saadpasta";

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

const build_project_els = (repo_list) => {
  const repo_cards_div = document.querySelector('.repo-cards-div-main');
  for (let i = 0; i < repo_list.length; i++) {
    const outer_div = document.createElement('div');
    repo_cards_div.appendChild(outer_div);

    const repo_card_div = document.createElement('div');
    repo_card_div.classList.add('repo-card-div')
    outer_div.appendChild(repo_card_div);

    const repo_name_div = document.createElement('div');
    repo_name_div.classList.add('repo-name-div');
    repo_card_div.appendChild(repo_name_div);

    const book_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    book_svg.setAttribute("aria-hidden", "true");
    book_svg.setAttribute("class", "octicon repo-svg");
    book_svg.setAttribute("height", "20");
    book_svg.setAttribute("role", "img");
    book_svg.setAttribute("viewBox", "0 0 12 16");
    book_svg.setAttribute("width", "14");
    repo_name_div.appendChild(book_svg);

    const book_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    book_path.setAttribute("fill-rule", "evenodd");
    book_path.setAttribute(
      "d",
      "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
    );
    book_svg.appendChild(book_path);

    const repo_name = document.createElement('div');
    repo_name.classList.add('repo-name');
    repo_name.textContent = repo_list[i].name;
    repo_name_div.appendChild(repo_name);

    const repo_description = document.createElement('p');
    repo_description.classList.add('repo-description');
    repo_description.textContent = repo_list[i].description;
    repo_card_div.appendChild(repo_description);

    const repo_stats_div = document.createElement('div');
    repo_stats_div.classList.add('repo-stats');
    repo_card_div.appendChild(repo_stats_div);

    const repo_stats_left = document.createElement('div');
    repo_stats_left.classList.add('repo-left-stat');
    repo_stats_div.appendChild(repo_stats_left);

    if (repo_list[i].language != null) {
      const language_span = document.createElement('span');
      repo_stats_left.appendChild(language_span);

      const language_color_div = document.createElement('div');
      language_color_div.classList.add('language-color');

      // Set language color
      switch (repo_list[i].language) {
        case 'Assembly':
          language_color_div.style.backgroundColor = '#6E4C13';
          break;
        case 'Astro':
          language_color_div.style.backgroundColor = '#ff5a03';
          break;
        case 'C':
          language_color_div.style.backgroundColor = '#555555';
          break;
        case 'C#':
          language_color_div.style.backgroundColor = '#178600';
          break;
        case 'C++':
          language_color_div.style.backgroundColor = '#f34b7d';
          break;
        case 'CSS':
          language_color_div.style.backgroundColor = '#663399';
          break;
        case 'Go':
          language_color_div.style.backgroundColor = '#00ADD8';
          break;
        case 'HTML':
          language_color_div.style.backgroundColor = '#e34c26';
          break;
        case 'Java':
          language_color_div.style.backgroundColor = '#b07219';
          break;
        case 'JavaScript':
          language_color_div.style.backgroundColor = '#f1e05a';
          break;
        case 'Lua':
          language_color_div.style.backgroundColor = '#000080';
          break;
        case 'Ruby':
          language_color_div.style.backgroundColor = '#701516';
          break;
        case 'Rust':
          language_color_div.style.backgroundColor = '#dea584';
          break;
        case 'SCSS':
          language_color_div.style.backgroundColor = '#c6538c';
          break;
        case 'Shell':
          language_color_div.style.backgroundColor = '#89e051';
          break;
        case 'VBA':
          language_color_div.style.backgroundColor = '#867db1';
          break;
      }

      language_span.appendChild(language_color_div);

      const language_p = document.createElement('p');
      language_p.textContent = repo_list[i].language;
      language_span.appendChild(language_p);
    }

    const forks_span = document.createElement('span');
    repo_stats_left.appendChild(forks_span);

    const forks_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    forks_svg.classList.add('octicon', 'repo-star-svg');
    forks_svg.setAttribute('aria-hidden', 'true');
    forks_svg.setAttribute('height', '20');
    forks_svg.setAttribute('role', 'img');
    forks_svg.setAttribute('viewBox', '0 0 10 16');
    forks_svg.setAttribute('width', '12');
    forks_svg.setAttribute('fill', 'rgb(106, 115, 125)');
    forks_span.appendChild(forks_svg);

    const forks_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    forks_path.setAttribute('fill-rule', 'evenodd');
    forks_path.setAttribute('d', 'M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z');
    forks_svg.appendChild(forks_path);

    const forks_count = document.createElement('p');
    forks_count.textContent = repo_list[i].forks_count;
    forks_span.appendChild(forks_count);

    const stars_span = document.createElement('span');
    repo_stats_left.appendChild(stars_span);

    const stars_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    stars_svg.classList.add('octicon', 'repo-star-svg');
    stars_svg.setAttribute('aria-hidden', 'true');
    stars_svg.setAttribute('height', '20');
    stars_svg.setAttribute('role', 'img');
    stars_svg.setAttribute('viewBox', '0 0 14 16');
    stars_svg.setAttribute('width', '14');
    stars_svg.setAttribute('fill', 'rgb(106, 115, 125)');
    stars_span.appendChild(stars_svg);

    const stars_path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    stars_path.setAttribute('fill-rule', 'evenodd');
    stars_path.setAttribute('d', 'M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z');
    stars_svg.appendChild(stars_path);

    const stars_count = document.createElement('p');
    stars_count.textContent = repo_list[i].stars_count;
    stars_span.appendChild(stars_count);

    const repo_right_stat = document.createElement('div');
    repo_right_stat.classList.add('repo-right-stat');
    repo_stats_div.appendChild(repo_right_stat);

    const repo_size = document.createElement('p');
    let file_size = repo_list[i].file_size / 1000;
    repo_size.textContent = file_size.toFixed(2) + ' MB';
    repo_right_stat.appendChild(repo_size);

    outer_div.addEventListener('click', () => {
      window.open(repo_list[i].url, '_blank').focus();
    })
  }
}

const get_github_repos = async () => {
  const repo_url = "https://api.github.com/users/" + GITHUB_USERNAME + "/repos?per_page=10&sort=updated";
  const response = await fetch(repo_url);
  const data = await response.json();
  const repo_list = [];
  for (let i = 0; i < data.length; i++) {
    let r = new Repo(data[i]);
    repo_list.push(r);
  }

  build_project_els(repo_list);
}

get_github_repos();