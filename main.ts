export { };

const worker = new Worker(new URL("./worker.js", import.meta.url));

worker.onmessage = (event) => {
    console.log(event);
    const data = event.data;
    document.body.appendChild(document.createTextNode(data));
}
worker.onerror = (event) => {
    console.error(event);
    document.body.appendChild(document.createTextNode(event.message));
}

worker.postMessage("");
