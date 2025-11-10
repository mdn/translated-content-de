---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/Reference/JavaScript_interface/Memory/buffer
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die schreibgeschützte **`buffer`**-Prototyp-Eigenschaft des [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekts gibt den Puffer zurück, der im Speicher enthalten ist. Abhängig davon, ob der Speicher mit `shared: true` konstruiert wurde oder nicht, ist der Puffer entweder ein {{jsxref("ArrayBuffer")}} oder ein {{jsxref("SharedArrayBuffer")}}.

## Beispiele

### Verwendung von buffer

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen memory.wasm-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während es den in der obigen Zeile erstellten Speicher importiert. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren.

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
