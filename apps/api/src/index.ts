import { createServer } from './server';

const port = process.env.PORT ?? 3030;
const server = createServer();

server.listen(port, () => {
  console.log({
    level: 'info',
    message: `api running on ${port}`,
  });
});
