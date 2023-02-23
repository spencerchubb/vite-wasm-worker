This repository is a minimal "hello world" example of using Rust and WebAssembly in a Web Worker. It happens to use Vite as the bundler.

Compile rust to wasm
```
cd rs-example
cargo build
wasm-pack build --target web

# Move pkg so it can be used by vite
rm -rf ../pkg
cp -r ./pkg/ ../
```
