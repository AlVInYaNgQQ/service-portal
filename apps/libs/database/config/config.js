const dialect = 'postgres';
const baseConfig = {
  "username": "postgres",
  "password": "postgres",
  "host": "127.0.0.1",
  "port": "5432",
  "dialect": dialect,
};

const config = {
  "abc": {
    ...baseConfig,
    "database": "abc",
  },
  "development": {
    ...baseConfig,
    "database": "postgres",
  },
  "test": {
    ...baseConfig,
    "database": "postgres",
  },
  "production": {
    ...baseConfig,
    "database": "postgres",
  }
}


module.exports = config;