import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import "reflect-metadata";
import { corsOptions } from "./config/config";
import { PORT } from "./constants/constants";
import routes from "./routes";
import { checkJwt } from "./middlewares/checkJwt";
import * as dotenv from 'dotenv';


const app = express();

// Call midlewares
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
app.use(checkJwt);

//Set all routes from routes folder
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

