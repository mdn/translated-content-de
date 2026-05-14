---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: bdab3a1efc984f4915590ba0a3099442e5e6f675
---

Das **`WebAssembly.Memory`**-Objekt ist ein skalierbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der rohe Bytes von Speicher enthält, auf die ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugreift.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen.
Wenn Sie auf den in JS erstellten Speicher von WebAssembly zugreifen möchten, oder umgekehrt, können Sie den Speicher aus dem Modul nach JavaScript exportieren oder Speicher aus JavaScript importieren, wenn das Modul [instanziiert](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnte man Speicheroperationen nur auf einem einzigen Speicher im Wasm-Modul ausführen, sodass es zwar möglich war, mehrere `Memory`-Objekte zu erstellen, dies aber keinen Sinn machte.
Neuere Implementierungen ermöglichen es WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) auf einen bestimmten Speicher zuzugreifen.
Für weitere Informationen siehe [Mehrere Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) im _Verständnis des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der es ausgeführt wird. Aus Portabilitätsgründen sollten Sie daher mehrbyteige Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory`-Objekt.

## Instanz-Eigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Puffer zurück.

## Instanz-Methoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer` ab.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten. Die erste Möglichkeit besteht darin, es über JavaScript zu konstruieren. Das folgende Snippet erstellt eine neue WebAssembly-Speicherinstanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6.4MiB). Ihre [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft gibt einen {{jsxref("ArrayBuffer")}} zurück.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen "memory.wasm"-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während der oben erstellte Speicher importiert wird. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen, sodass immer das Little-Endian-Format verwendet wird.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory`-Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann über die `exports`-Eigenschaft der WebAssembly-Instanz zugänglich gemacht werden (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde). Das folgende Beispiel importiert einen Speicher, der aus WebAssembly mit dem Namen `memory` exportiert wurde, und gibt dann das erste Element des Speichers aus, interpretiert als ein {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellen eines geteilten Speichers

Standardmäßig sind WebAssembly-Speicher nicht geteilt. Sie können einen [geteilten Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) von JavaScript erstellen, indem Sie `shared: true` in das Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft dieses Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

### Verwendung einer 64-Bit-Adresse

Das folgende Snippet erstellt eine neue WebAssembly-Speicherinstanz mit einem 64-Bit-Adressentyp.
Die `initial`- und `maximum`-Werte müssen {{jsxref("BigInt")}}-Werte sein:

```js
const memory = new WebAssembly.Memory({
  address: "i64",
  initial: 1n,
  maximum: 10n,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Übersicht zu [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
