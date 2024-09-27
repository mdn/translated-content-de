---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/JavaScript_interface/Memory/buffer
l10n:
  sourceCommit: 58d3a9aeebde3228e3af60f5b356ae3c0e7f4222
---

{{WebAssemblySidebar}}

Die schreibgeschützte **`buffer`** Prototyp-Eigenschaft des [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekts gibt den im Speicher enthaltenen Puffer zurück. Abhängig davon, ob der Speicher mit `shared: true` erstellt wurde oder nicht, ist der Puffer entweder ein {{jsxref("ArrayBuffer")}} oder ein {{jsxref("SharedArrayBuffer")}}.

## Beispiele

### Verwendung von buffer

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen memory.wasm-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), während der Speicher, der in der Zeile darüber erstellt wurde, importiert wird. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren.

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
