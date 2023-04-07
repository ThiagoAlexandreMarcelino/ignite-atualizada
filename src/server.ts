import fastify from 'fastify';
import { knex } from './database';

const app = fastify();

app.get('/', async () => {
  const tables = await knex('slite_schema').select('*');

  return tables;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Server Running');
  });
