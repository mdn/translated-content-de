---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/JavaScript_interface/Memory/buffer
l10n:
  sourceCommit: 58d3a9aeebde3228e3af60f5b356ae3c0e7f4222
---

{{WebAssemblySidebar}}

Die schreibgeschützte **`buffer`** Prototypeigenschaft des [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekts gibt den im Speicher enthaltenen Puffer zurück. Abhängig davon, ob der Speicher mit `shared: true` erstellt wurde oder nicht, ist der Puffer entweder ein {{jsxref("ArrayBuffer")}} oder ein {{jsxref("SharedArrayBuffer")}}.

## Beispiele

### Verwendung von buffer

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen memory.wasm-Bytecode mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) Funktion, während der Speicher importiert wird, der in der vorherigen Zeile erstellt wurde. Anschließend werden einige Werte in diesem Speicher gespeichert, eine Funktion exportiert und die exportierte Funktion verwendet, um diese Werte zu summieren.

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
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
