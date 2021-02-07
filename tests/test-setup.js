const dotenv = require("dotenv");

dotenv.config({ path: "./.env.test" });

//new process is started each time tests are run so config variables need to be reloaded each time. 