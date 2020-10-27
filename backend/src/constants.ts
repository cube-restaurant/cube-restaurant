export const __PORT__ = process.env.PORT ? Number(process.env.PORT) : 5000;

// environment variables
export const __IS_PROD__ = process.env.NODE_ENV?.toString() === 'production';
export const __IS_DEV__ = process.env.NODE_ENV?.toString() === 'development';
export const __IS_TEST__ = process.env.NODE_ENV?.toString() === 'test';

// db variables
export const __PROD_DB_NAME__ = process.env.PROD_DB_NAME?.toString();
export const __PROD_DB_USERNAME__ = process.env.PROD_DB_USERNAME?.toString();
export const __PROD_DB_PASSWORD__ = process.env.PROD_DB_PASSWORD?.toString();
export const __PROD_DB_HOST__ = process.env.PROD_DB_HOST?.toString();

export const __DEV_DB_NAME__ = process.env.DEV_DB_NAME?.toString();
export const __DEV_DB_USERNAME__ = process.env.DEV_DB_USERNAME?.toString();
export const __DEV_DB_PASSWORD__ = process.env.DEV_DB_PASSWORD?.toString();
export const __DEV_DB_HOST__ = process.env.DEV_DB_HOST?.toString();

export const __TEST_DB_NAME__ = process.env.TEST_DB_NAME?.toString();
export const __TEST_DB_USERNAME__ = process.env.TEST_DB_USERNAME?.toString();
export const __TEST_DB_PASSWORD__ = process.env.TEST_DB_PASSWORD?.toString();
export const __TEST_DB_HOST__ = process.env.TEST_DB_HOST?.toString();
