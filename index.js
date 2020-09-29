const app = require('./src/app');


const server = async (PORT) => {
    app.listen(PORT, () => {
        console.info(`Server on PORT: ${[PORT]}`);
    });
}

server(5000);