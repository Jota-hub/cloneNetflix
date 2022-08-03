const API_KEY = "75ed89e946876d3987a0272beec0b01b";

const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,

    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,

    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,

    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=35&language=pt-BR`,

    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=1074&language=pt-BR`,

    },
    {
        name: "documentaries",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=99&language=pt-BR`,
    }
];

// Path é usado para fazer a variação de acordo com a categoria de filmes
export const getMovies = async (path) => {
    
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        // Espera a resposta da requisição externa
        const response = await fetch(url);
        //Retorna o Json que recebe como resposta
        return await response.json();
    
    } catch (error) {
        console.log("error getMovies", error);
    }
};

export default categories;