import init, { hello } from "./pkg/rs_example";

onmessage = function (e) {
    init(new URL("./pkg/rs_example_bg.wasm", import.meta.url)).then(() => {
        const result = hello();
        postMessage(result);
    });
}
