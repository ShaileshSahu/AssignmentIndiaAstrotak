import dotenv from 'dotenv';
import * as fs  from 'fs';
import * as path from 'path';
const ENVIRONMENT = process.env.NODE_ENV;
switch (ENVIRONMENT) {
    case "production": {
      if (fs.existsSync(path.join(path.resolve(), "/.env.production"))) {
        dotenv.config({ path: ".env.production" });
      } else {
        process.exit(1);
      }
      break;
    }
  
  
    default: {
        console.log(path.resolve());
        if (fs.existsSync(path.join(path.resolve(), "/.env"))) {
        dotenv.config({ path: ".env" });
      } else {
        process.exit(1);
      }
      break;
    }

  }

  export const PORT = process.env.PORT;
  export const MONGODB_URI  = process.env.MONGODB_URI;
  export const SANDBOX = process.env.SANDBOX;
  export const SALT = process.env.SALT;