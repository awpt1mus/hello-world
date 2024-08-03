import express,{ErrorRequestHandler, RequestHandler} from "express";
import { join } from "path";

const app = express();

const errorHandler: ErrorRequestHandler = (err, req, res, next)=> {
    return res.sendFile(join(process.cwd(),"other","error.html"));
}

const notFoundHandler: RequestHandler = (req, res, next)=> {
    return res.sendFile(join(process.cwd(),"other","404.html"));
}

app.use(express.static(join(process.cwd(),"public")));

app.all("*",notFoundHandler);
app.use(errorHandler);

const port = 5000;

app.listen(port,()=> {
    console.log(`hello world listning on port ${port}`);
});