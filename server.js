const app = require("./src");

const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
