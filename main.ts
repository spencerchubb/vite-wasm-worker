export { };

const worker = new Worker(new URL("./worker.js", import.meta.url));

worker.onmessage = (event) => {
    console.log(event);
}
worker.onerror = (event) => {
    console.error(event);
}

worker.postMessage("");
