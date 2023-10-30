"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Configure environment variables
// This must be done at the highest level(scope) of the application
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
console.log(process.env.PORT);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3005;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// If in production, use the built REACT bundle for better performance
// If not in production, REACT will run its own server and proxy requests (set in package.json)
if (process.env.PRODUCTION) {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
}
// Set the root path for the file system
// Must use '*' symbol to be used with REACT routing
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
// Want to see if react can build with typescript
// Want to compile server and client with typescript 
// readme on how to set up typescript with node
// readme on how to build in development and production with react and ts
//# sourceMappingURL=index.js.map