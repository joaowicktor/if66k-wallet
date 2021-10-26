import { app } from './app';
import database from './database';

const PORT = process.env.PORT || 5000;

async function start() {
  await database.connect();
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
}

start();
