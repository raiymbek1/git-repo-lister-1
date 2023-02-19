import axios from 'axios';

export const getRepos = async ({
    prompt,
    setIsLoading = () => { }
} = {}) => {
    try {
        console.log('network call initiated')
        const repos = await axios.request({ method: 'GET', url: `http://localhost:8080/post/query/${prompt}` });
        setIsLoading(false)
        console.log(repos.status + "asdads");
        return repos.data

            .map((repo) => {
                return {
                    ID: repo.ID,
                    CreatedAt: repo.CreatedAt,
                    Title: repo.Title,
                    Body: repo.Body
                }
            })

            .filter(repo => repo.Title)
    }
    catch (error) {

        console.log(error)

        return error
    }
}