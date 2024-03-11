async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);


const itemTextElements = document.getElementsByClassName('item_text');
    
for  (let i=0; i<json.programming_languages_popular.length; i++)
    { 
        itemTextElements[i].textContent = json.programming_languages_popular[i];

        

        {
        const termineRicerca = json.programming_languages_popular[i].toLowerCase();
        const urlWikipedia = 'https://it.wikipedia.org/wiki/' + termineRicerca;

        itemTextElements[i].innerHTML = `<a href="${urlWikipedia}" target="_blank">${json.programming_languages_popular[i]}</a>`;
    }
    }




console.log(itemTextElements);

}

let img = document.getElementsByClassName("eltdf-normal-logo")[0];

img.src = "https://global.discourse-cdn.com/sitepoint/original/3X/4/3/436c792eb6b4ca3f1557265b5042c1ed5f1e4b45.png";

exampleFetch() 