const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const port = 4000

// var options = {
//     explorer: true,
//     swaggerOptions: {
//       urls: [
//         {
//           url: 'https://petstore3.swagger.io/api/v3/openapi.json',
//           name: 'Spec1'
//         },
//         {
//           url: 'https://petstore3.swagger.io/api/v3/openapi.json',
//           name: 'Spec2'
//         }
//       ]
//     }
//   }
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
