import Express from 'express'
import bodyParser from 'body-parser'
import route from './route/index';
const PORT = 4000

const app = Express();

app.get('/',(req,res) => res.status(404).json({
  messsag:'app home page'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(route)

app.route('/*').all((req, res) => res.status(404).json({
  status: 404,
  error: '404 Route not found'
}));

app.listen(PORT, () =>{
  console.log(`Server running on port ${PORT}`)
})


export default app;