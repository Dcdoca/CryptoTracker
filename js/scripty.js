const API_KEY = "ceee8c1c-8236-47a3-9699-4fea10ac403c";

const button = document.getElementById("button");
const query = document.getElementById("input");

button.addEventListener("click", (event) => {
    event.preventDefault();

    axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
            'X-CMC_PRO_API_KEY': API_KEY,
        },
    }).then((response) => {
        const cryptocurrencies = response.data;
        console.log(cryptocurrencies);
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });
});