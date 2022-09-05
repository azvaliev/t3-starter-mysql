const handler = async (req,res) => {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`)
    const movieData = await movieResponse.json()
    res.status(200).json(movieData)
     
      
  }
  
  export default handler;