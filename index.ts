import express from "express";
import routes from './src/routes/Rovarspraket_route'

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)


app.listen(PORT, () => {
    console.log(`server listening at http://localhost:${PORT}`)
})

export default app