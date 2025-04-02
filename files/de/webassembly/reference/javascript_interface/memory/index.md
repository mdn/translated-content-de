---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: 5d93ed6aeae01238cb44b1a9b5f092d8c8194530
---

Das **`WebAssembly.Memory`**-Objekt ist ein skalierbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der rohe Bytes des Speichers enthält, auf den ein [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugreift.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen.
Wenn Sie auf den in JS erstellten Speicher aus WebAssembly zugreifen möchten oder umgekehrt, können Sie den Speicher aus dem Modul in JavaScript exportieren oder Speicher von JavaScript in das Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnten Speicheroperationen nur auf einem einzelnen Speicher im Wasm-Modul durchgeführt werden, sodass mehrere `Memory`-Objekte zwar erstellt werden konnten, dies aber keinen Sinn ergab.
Neuere Implementierungen ermöglichen es, dass WebAssembly-[Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) auf einen bestimmten Speicher angewendet werden können.
Weitere Informationen finden Sie unter [Mehrere Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) in _Verständnis des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der er ausgeführt wird. Daher sollten Sie Mehrbyte-Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben, um Portabilität zu gewährleisten.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory`-Objekt.

## Instanzeigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Buffer zurück.

## Instanzmethoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer`.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten. Der erste Weg ist die Konstruktion aus JavaScript. Der folgende Codeausschnitt erstellt eine neue WebAssembly Memory-Instanz mit einer Anfangsgröße von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6.4MiB). Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft wird einen {{jsxref("ArrayBuffer")}} zurückgeben.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [betrachten Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) ruft den geladenen "memory.wasm"-Bytecode mittels der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Funktion ab und instanziiert ihn, während der Speicher aus der obigen Zeile importiert wird. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen, sodass immer das Little-Endian-Format verwendet wird.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory`-Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Auf diesen Speicher kann über die `exports`-Eigenschaft der WebAssembly-Instanz zugegriffen werden (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde). Das folgende Beispiel importiert einen aus WebAssembly exportierten Speicher mit dem Namen `memory` und druckt dann das erste Element des Speichers aus, interpretiert als ein {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellung eines gemeinsamen Speichers

Standardmäßig sind WebAssembly-Speicher nicht gemeinsam genutzt. Sie können einen [gemeinsamen Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft dieses Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
