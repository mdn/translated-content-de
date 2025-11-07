---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

Das **`WebAssembly.Memory`** Objekt ist ein skalierbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der rohe Bytespeicher enthält, auf den von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugegriffen wird.

Sowohl WebAssembly als auch JavaScript können `Memory` Objekte erstellen.
Wenn Sie auf den im JS erstellten Speicher aus WebAssembly zugreifen möchten oder umgekehrt, können Sie den Speicher aus dem Modul nach JavaScript exportieren oder Speicher von JavaScript in das Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnten Sie Speicheroperationen nur auf einem einzelnen Speicher im Wasm-Modul ausführen, daher gab es zwar die Möglichkeit, mehrere `Memory` Objekte zu erstellen, aber es ergab keinen Sinn, dies zu tun.
Neuere Implementierungen erlauben es, dass WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) auf einen bestimmten Speicher ausgeführt werden.
Für weitere Informationen siehe [Mehrere Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) im Abschnitt _Verständnis des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der es läuft. Daher sollten Sie für die Portabilität Multi-Byte-Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory` Objekt.

## Instanzeigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Puffer zurück.

## Instanzmethoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer`.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory` Objekt zu erhalten. Der erste Weg ist, es aus JavaScript zu konstruieren. Das folgende Snippet erstellt eine neue WebAssembly Memory-Instanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6.4MiB). Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft gibt einen {{jsxref("ArrayBuffer")}} zurück.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen "memory.wasm" Bytecode mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Funktion unter der Einbeziehung des oben erstellten Speichers. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen, sodass immer das Little-Endian-Format verwendet wird.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory` Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann in der `exports` Eigenschaft der WebAssembly-Instanz zugegriffen werden (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde). Das folgende Beispiel importiert einen aus WebAssembly exportierten Speicher mit dem Namen `memory` und druckt dann das erste Element des Speichers aus, interpretiert als ein {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellen eines geteilten Speichers

Standardmäßig sind WebAssembly-Speicher nicht geteilt. Sie können einen [geteilten Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer` Eigenschaft dieses Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
