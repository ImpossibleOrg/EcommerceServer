export const enum HTTP_STATUSE_CODES {
	OK_200 = 200,
	CREATED_201 = 201,
	NO_CONTENT_204 = 204,
	BAD_REQUEST_400 = 400,
	UNAUTHORIZED_401 = 401,
	FORBIDDEN_403 = 403,
	NOT_FOUND_404 = 404,
	ITERNAL_ERROR_500 = 500,
}

export const JWT_REFRESH_SECRET_KEY: string =
	process.env.JWT_REFRESH_SECRET_KEY ?? '';
export const JWT_ACCESS_SECRET_KEY: string =
	process.env.JWT_ACCESS_SECRET_KEY ?? '';
export const JWT_ACCESS_TOKEN_LIFETIME: string =
	process.env.JWT_ACCESS_TOKEN_LIFETIME ?? '';
export const JWT_REFRESH_TOKEN_LIFETIME: string =
	process.env.JWT_REFRESH_TOKEN_LIFETIME ?? '';

export const CLIENT_URL =
	process.env.NODE_ENV === 'production'
		? process.env.PROD_URL
		: process.env.DEV_URL;
