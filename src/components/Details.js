import { useEffect, useState } from "react";

function Details({ info }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		try {
			fetch(`${process.env.REACT_APP_DATA_URL}/${info.id}.json`)
				.then((resp) => resp.json())
				.then((data) => setUser(data))
		} catch (e) {
			console.log(e)
		} finally {
			setLoading(false)
		}
	}, [info.id]);

	return (
		<>
			{loading && <div>Loading...</div>}
			{user && 
				<div className="user-details">
					<img src={user.avatar} alt={user.name}/>
					<p className="user-info user-name">{user.name}</p>
					<p className="user-info">City: {user.details.city}</p>
					<p className="user-info">Company: {user.details.company}</p>
					<p className="user-info">Position: {user.details.position}</p>
				</div>
			}
		</>
	)
}

export default Details;