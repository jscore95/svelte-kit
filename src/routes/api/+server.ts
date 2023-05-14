import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, locals }) => {
    const resp = `{'hey':'hey2'}`;

	return new Response(resp, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

function getErrorMessage(err: unknown): string {
	const errorMessage = `Function not implemented. Error message: ` + JSON.stringify(err, null, 2);
	return errorMessage;
}