import { getRepos } from './utilities/getRepos'
import './App.css';
import { List } from './components/List';
import { useState, useEffect } from 'react';
import { Loader } from './components/Loader';


function App() {

  const [repos, setRepos] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRepos({ prompt: prompt, setIsLoading }).then(data => setRepos(data));
  }, [prompt.toLowerCase])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(repos)
    if (prompt) {
      setPrompt(prompt);
      setIsLoading(true);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Введите ключевое слово" onChange={e => setPrompt(e.target.value)} />
        &nbsp;
        <button type="submit" className='btn btn-primary' disabled={!prompt}>Искать</button>
      </form>
      <Loader isLoading={isLoading}>
        <List repos={repos} isLoading={isLoading} />
      </Loader>
    </div>
  );
}

export default App;
