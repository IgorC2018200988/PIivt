import IConfig from "./common/IConfig.interface";
import CategoryRouter from "./components/category/CategoryRouter.router";
import UserRouter from "./components/user/UserRouter.router";
import fileUpload = require("express-fileupload");
import { MailConfigurationparameters } from "./config.mail";

const DevConfig: IConfig = {
    server: {
        port: 10000,
        static: {
            index: false,
            dotfiles: "deny",
            cacheControl: true,
            etag: true,
            maxAge: 1000 * 60 * 60 * 24,
            path: "./static",
            route: "/assets"
        }
    },
    logging: {
        path: "./logs",
        filename: "access.log",
        foramt: ":date[iso]\t:remote-addr\t:method\t:url\t:status\t:res[content-lenght] bytes\t:response-time ms",
    },
    database: {
        host: "localhost",
        port: 3306,
        user: "aplikacija",
        password: "aplikacija",
        database: "piivt_app",
        charset: "utf8",
        timezone: "+01:00",
        //supportBigNumbers: true,
    },
    routers: [
        new CategoryRouter(),
        new UserRouter(),
    ],

    mail: {
        host: "smtp.office365.com",
        port: 587,
        email: "",
        password: "",
        debug: true,
    },
    fileUploads: {
        maxFiles: 10,
        maxFileSize: 5 * 1024 * 1024,
        tempFileDirectory: "../temp/",
        destinationDirectoryRoot: "uploads/",
        photos: {
            allowedTypes: ["png","jpg"],
            allowedExtensions: [".png",".jpg"],
            width: {
                min:320,
                max:1920,
            },
            height: {
                min:240,
                max:1080,
            }
        },
    },
};

DevConfig.mail = MailConfigurationparameters;

export  {DevConfig};
