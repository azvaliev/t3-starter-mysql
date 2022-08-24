import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';

function UserById() {
	const router = useRouter();

	/**
	 * {
	 * 	foo: 'bar',
	 *  : '420'
	 * }
	 */
	const { id } = router.query;
	/**
	 * {
	 *   userById69: {....}
	 *   userById420: {...}
	 *   userById0: {...}
	 * }
	 */
	// 1st time: React Query doesn't have a userById query cached
	// 2nd time: React Query does have userById query cached
	const { isLoading, error, data } = useQuery(['userById', id], () =>
		fetch(`/api/users/${id}`).then(res =>
			res.json()
		)
	)	

	if (isLoading) {
		return (
			<h1>Loading...</h1>
		)
	}

	if (error) {
		return;
	}

	return (
		<pre>
			<button className="bg-blue-500 m-4" onClick={() => router.push(router.asPath)} >soft refresh</button>
			{JSON.stringify(data, undefined, 2)}
		</pre>
	)
}

export function User({ name, email }) {
	return (
		<section className="flex flex-col bg-blue-500 my-2 text-white">
			<h2>{name}</h2>
			<h3>{email}</h3>
		</section>
	)	
}

export default UserById;