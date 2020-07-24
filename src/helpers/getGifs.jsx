export const getGifs = async (category) => {
    let url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=g8tW7EKl2HnZcliRywQwcC1y3JcgV4If`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}