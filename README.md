This repository is a minimal "hello world" example of using Vite to bundle Rust and WebAssembly in a Web Worker.

```
# Compile rust to wasm
cd rs-example
cargo build
wasm-pack build --target web

# Move pkg so it can be used by vite
rm -rf ../pkg
cp -r ./pkg/ ../

npm run preview
npm run build:watch
```
