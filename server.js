// server.js
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import history from 'connect-history-api-fallback';
import serveStatic from 'serve-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Handle history mode routing in Vue.js
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});