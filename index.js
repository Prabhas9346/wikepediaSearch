let inputEl = document.getElementById('searchInput');
let container = document.getElementById('searchResults');
let spinner = document.getElementById('spinner');

function create(results) {
    let { title, link, description } = results;
    let containerResults = document.createElement('div');
    containerResults.classList.add('result-item');
    container.appendChild(containerResults);

    let header = document.createElement('a');
    header.textContent = title;
    header.href = link;
    header.target = '_blank';
    header.classList.add('result-title');
    containerResults.appendChild(header);

    let breakLine = document.createElement('br');
    containerResults.appendChild(breakLine);

    let linkurl = document.createElement('a');
    linkurl.classList.add('result-url');
    linkurl.textContent = link;
    linkurl.href = link;
    linkurl.target = '_blank';
    containerResults.appendChild(linkurl);

    let breakLine1 = document.createElement('br');
    containerResults.appendChild(breakLine1);

    let resultsDescrption = document.createElement('p');
    resultsDescrption.classList.add('link-description');
    resultsDescrption.textContent = description;
    containerResults.appendChild(resultsDescrption);
}

function getresponse(Event) {
    if (Event.key === 'Enter') {
        container.textContent = '';
        spinner.classList.toggle('d-none');
        let input = inputEl.value;
        let url = 'https://apis.ccbp.in/wiki-search?search=' + input;
        let options = {
            methood: 'GET',
        };
        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
                console.log(jsonData);
                let { search_results } = jsonData;
                console.log(search_results);
                spinner.classList.toggle('d-none');
                for (let results of search_results) {
                    create(results);
                }
            });
    }
}

inputEl.addEventListener('keydown', getresponse);
