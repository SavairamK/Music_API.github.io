const form = document.querySelector('#myForm')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const singer = document.querySelector('#artist').value;

    const url = `https://spotify23.p.rapidapi.com/search/?q=${singer}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fc39503ae4mshc1f25afa1e1aa61p14d363jsn061253707efc',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const songs = (result.albums.totalCount);
        document.querySelector('#music').innerHTML = `Total songs are : ${songs}`;
    } catch (error) {
        console.error(error);
    }
})