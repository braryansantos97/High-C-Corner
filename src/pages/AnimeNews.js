import React, {useState, useEffect} from 'react'

export default function AnimeNews() {

    const [animeNews, setAnimeNews] = useState([]);


    useEffect(() => {
		(async () => {
			try {
				const getAnimeNews = await fetch(`https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=1`);
				const data = await getAnimeNews
				setAnimeNews(data);
                console.log(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
    
    return (
        <div>
            <h1>Anime News</h1>
        </div>
    )
}