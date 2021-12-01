function List({ users, handleClick }) {
	return (
		<ul className="user-list">
			{
				users.map(user => <li key={user.id} className="user-list-elem" onClick={() => handleClick(user.id)}>{user.name}</li>)
			}
		</ul>
	)
}

export default List;