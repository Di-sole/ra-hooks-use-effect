import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';
import Details from './components/Details';

function App() {
	const [users, setUsers] = useState([]);
	const [selected, setSelected] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`${process.env.REACT_APP_DATA_URL}/users.json`)
			.then((resp) => resp.json())
			.then((data) => setUsers(data))
			.finally(() => setLoading(false))
	}, []);

	const handleClick = (id) => {
		const selectedUser = users.find(user => user.id === id);
		setSelected(selectedUser);
	}

  return (
    <div className="App">
			{loading ? <div>Загрузка...</div> : <List users={users} handleClick={handleClick} />}
			{selected ? <Details info={selected} /> : null}
    </div>
  );
}

export default App;
