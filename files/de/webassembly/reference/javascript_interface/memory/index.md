---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Das **`WebAssembly.Memory`** Objekt ist ein veränderbares {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, das rohe Bytes von Speicher hält, auf den von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugegriffen wird.

Sowohl WebAssembly als auch JavaScript können `Memory` Objekte erstellen.
Wenn Sie auf den in JavaScript erstellten Speicher von WebAssembly aus zugreifen möchten oder umgekehrt, können Sie den Speicher aus dem Modul nach JavaScript exportieren oder Speicher von JavaScript in das Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnten Sie Speicheroperationen nur auf einem einzigen Speicher im Wasm-Modul ausführen, sodass es keinen wirklichen Sinn hatte, mehrere `Memory` Objekte zu erstellen, auch wenn dies möglich war.
Neuere Implementierungen erlauben es jedoch, dass WebAssembly [Speicherbefehle](/de/docs/WebAssembly/Reference/Memory) auf einem spezifizierten Speicher arbeiten.
Für weitere Informationen siehe [Mehrere Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) im Leitfaden _Verstehen des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der es ausgeführt wird. Daher sollten Sie zur Portabilität Multi-Byte-Werte in JavaScript mithilfe von {{jsxref("DataView")}} lesen und schreiben.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory` Objekt.

## Instanzeigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den Puffer zurück, der im Speicher enthalten ist.

## Instanzmethoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer`.

## Beispiele

### Ein neues Memory-Objekt erstellen

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory` Objekt zu erhalten. Der erste Weg ist, es aus JavaScript zu konstruieren. Das folgende Snippet erstellt eine neue WebAssembly-Speicherinstanz mit einer Anfangsgröße von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Ihre [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft wird ein {{jsxref("ArrayBuffer")}} zurückgeben.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) ruft die geladene "memory.wasm"-Bytecode-Datei ab und instanziiert sie mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während es den oben erstellten Speicher importiert. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen, sodass wir immer das Little-Endian-Format verwenden.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory` Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann in der `exports` Eigenschaft der WebAssembly-Instanz (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde) zugegriffen werden. Das folgende Beispiel importiert einen Speicher, der aus WebAssembly mit dem Namen `memory` exportiert wurde, und gibt dann das erste Element des Speichers aus, interpretiert als {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Einen Shared Memory erstellen

Standardmäßig sind WebAssembly-Speicher nicht gemeinsam genutzt. Sie können einen [gemeinsamen Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie im Initialisierungsobjekt des Konstruktors `shared: true` übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer` Eigenschaft dieses Speichers wird einen {{jsxref("SharedArrayBuffer")}} zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly Übersicht](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
