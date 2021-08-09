import  express from 'express';
import  helmet from 'helmet';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { PORT, MONGODB_URI, logger } from './utils/index.js';
import MainRouter from './modules/route.js';
import bodyParser from 'body-parser';
/**
 * Server entry and handling the application handling !!!
 */
class App {
     constructor() {
         this.app = express();
         this.intializaDependency();
         this.connectDB();
         this.startServer();

     }

     async connectDB() {
            try {
                console.log('connection db', MONGODB_URI);
                await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, });
                console.log('Database is connected');
            } catch (error) {
                console.log('error in connecting db', error);
            }

     }

     intializaDependency() {
        this.app.use(logger);
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(cookieParser());
        this.app.use('/astrotak/api', MainRouter);
     }


     startServer() {
        this.app.listen(PORT, function() {
            console.log('server is connected', PORT);
        });
     }

}
// Start The App !!
new App();
