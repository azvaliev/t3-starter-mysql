import { useQuery } from '@tanstack/react-query';
import { User } from './[id]';

function Users() {
	/*
		{
			isLoading: boolean,
			error: {},
			data: [....],
			.....
		}
	*/
	const { isLoading, error, data } = useQuery(['allUsers'], () =>
		fetch('/api/users').then(res =>
			res.json()
		)
	)

	if (isLoading) {
		return (
			<h1>Loading....</h1>
		)
	}

	if (error) {
		return (
			<h1>{JSON.stringify(error, undefined, 2)}</h1>
		)
	}

	return (
		<div>
			<h1>All Users</h1>
			{JSON.stringify(data, undefined, 2)}
			{
				data.map((userData) => {
					const { name, email } = userData;
					return (
						<User
							name={userData.name}
							email={userData.email}
							key={userData.id}
						/>
					)
				})
			}
		</div>
	)
}
/**
 * <User name=... email=... /> 
 */

/*
// props
{
	name: '...',
	email: '...'
}

*/

export default Users;