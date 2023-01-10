export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ztsaVLjDhzys4fMZEINijbC92aofkniJ&q=${category}&limit=10`
    const resp = await fetch (url)
    const {data} = await resp.json();

    const gif = data.map( img=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    }) 

    return gif;
}