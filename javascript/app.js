//variables
let inputSearch = $('#inputSearch');
let apiUrl = 'https://api.themoviedb.org/3/';
let apiKey = 'dc6fb4466e2bfe9d02c6c3154fa4f8d6';

//service worker functions
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js', { scope: '/what-watch/' }).then(function(reg) {
        // registration worked
        console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
        // registration failed
        console.log('Registration failed with ' + error);
    });
};

// functions
$('#btnSearch').on('click', function () {
    let div = document.getElementById('movieList');

    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    let searchValue = inputSearch.val();

    console.log("url : " + apiUrl + "search/movie?api_key=" + apiKey + "&query=" + searchValue);
    $.ajax({
        url: apiUrl + "search/movie?api_key=" + apiKey + "&query=" + searchValue,
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {

            $.each(data.results, function (key, value) {
                let movieDiv = document.createElement('div');
                movieDiv.setAttribute('class', 'col-10 h-50 d-flex flex-row justify-content-around align-content-center mt-5 text-white bg-transparent');

                let movieImageDiv = document.createElement('div');
                movieImageDiv.setAttribute('class', 'card col-2 h-50 text-white bg-transparent');

                let image = document.createElement('img');
                image.setAttribute('src', 'https://image.tmdb.org/t/p/w1280' + value.poster_path);
                image.setAttribute('class', 'col-12')

                let movieInfoDiv = document.createElement('div');
                movieInfoDiv.setAttribute('class', 'card col-8 h-50 rounded-0 text-white bg-transparent');

                let title = document.createElement('h2');
                title.setAttribute('class', 'mt-2');
                title.textContent = "Titre : " + value.title;
                movieInfoDiv.appendChild(title);

                let rating = document.createElement('p');
                rating.setAttribute('class', 'mt-2');
                rating.textContent = "Note : " + value.vote_average;
                movieInfoDiv.appendChild(rating);

                let description = document.createElement('p');
                description.setAttribute('class', 'mt-2');
                description.textContent = "Note : " + value.overview;
                movieInfoDiv.appendChild(description);

                movieImageDiv.appendChild(image);

                movieDiv.appendChild(movieImageDiv);
                movieDiv.appendChild(movieInfoDiv);

                let movieList = document.getElementById('movieList');
                movieList.appendChild(movieDiv);

            })
        }
    });
})

$('#inputSearch').on('focus', function (){
    $(this).val("");
})

$(window).on('load', function () {
    console.log("ready!");
});