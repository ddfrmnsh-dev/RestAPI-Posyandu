import express, {Request, Response} from "express";
import createHttpError from "http-errors";
import MasterRoutes from "./src/routes/MasterRoutes";
import { PrismaClient } from "@prisma/client";
require('dotenv').config();

const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT
const prisma = new PrismaClient()
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

MasterRoutes(app)

app.use((req: Request, res: Response, next: Function)=>{
    next(createHttpError(404))
})


app.listen(port, ()=>(
    console.log(`
    🚀 Server ready at: http://localhost:${port}`)
))