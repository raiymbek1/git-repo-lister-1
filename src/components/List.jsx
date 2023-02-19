export const List = (props) => {
    const { repos, isLoading } = props;
    if (!repos) return null;
    if (!repos.length && !isLoading) return <p>Sorry, no items found</p>
    return (
        <ul >
            {repos.map(repo => <li key={repo.ID}><b>{repo.Title}</b> <br />(⭐: {repo.Body})<br /><i>{repo.CreatedAt}</i><br /><br /></li>)}
        </ul>
    )
}