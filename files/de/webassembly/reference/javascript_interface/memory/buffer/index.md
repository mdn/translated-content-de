---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/Reference/JavaScript_interface/Memory/buffer
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die schreibgeschützte **`buffer`** Prototyp-Eigenschaft des [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekts gibt den im Speicher enthaltenen Puffer zurück. Abhängig davon, ob der Speicher mit `shared: true` konstruiert wurde oder nicht, ist der Puffer entweder ein {{jsxref("ArrayBuffer")}} oder ein {{jsxref("SharedArrayBuffer")}}.

## Beispiele

### Verwendung von buffer

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [sehen Sie es sich hier live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) ruft den geladenen memory.wasm Bytecode mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Funktion ab und instanziiert ihn, während der in der Zeile darüber erstellte Speicher importiert wird. Anschließend werden einige Werte in diesem Speicher gespeichert, eine Funktion exportiert und die exportierte Funktion verwendet, um diese Werte zu summieren.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new DataView(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands.setUint32(i * 4, i, true); // WebAssembly is little endian
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
