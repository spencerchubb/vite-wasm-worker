Compile rust to wasm
```
cd rs-example
cargo build
wasm-pack build --target web

# Move pkg so it can be used by vite
rm -rf ../pkg
cp -r ./pkg/ ../
```