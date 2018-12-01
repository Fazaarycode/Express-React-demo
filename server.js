const express= require('express');

const app = express();



app.get('/api/customers', (req,res) => {

const customers = [
	{id:1, firstName:'Mohamed', lastName:'Fazaary'},
	{id:2, firstName:'John', lastName:'Doe'},
	{id:3, firstName:'Dorothy', lastName:'Foster'}
];

res.json(customers);
});
const port = 5000;
app.listen(port, () => console.log(`Server Started on ${port}`));