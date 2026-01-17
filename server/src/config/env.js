import dotenv from "dotenv";

dotenv.config();

const env = {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI
};

export default env;
