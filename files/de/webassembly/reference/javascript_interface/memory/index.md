---
title: WebAssembly.Memory
slug: WebAssembly/Reference/JavaScript_interface/Memory
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Das **`WebAssembly.Memory`** Objekt ist ein erweiterbares {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, das rohe Bytes von Speicher enthält, auf die von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugegriffen wird.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher von WebAssembly aus zugreifen möchten oder umgekehrt, können Sie den Speicher aus dem Modul nach JavaScript exportieren oder Speicher von JavaScript in das Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnte man Speicheroperationen nur auf einem einzelnen Speicher im Wasm-Modul durchführen. Obwohl mehrere `Memory`-Objekte erstellt werden konnten, gab es keinen Grund dafür. Neuere Implementierungen erlauben, dass WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) auf einen bestimmten Speicher angewendet werden. Weitere Informationen finden Sie unter [Mehrere Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#multiple_memories) im Abschnitt _Verständnis des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der er läuft. Daher sollten Sie mehrbyteige Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben, um die Portabilität sicherzustellen.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory`-Objekt.

## Instanzeigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Puffer zurück.

## Instanzmethoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer`.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Wege, ein `WebAssembly.Memory`-Objekt zu erhalten. Der erste Weg ist, es aus JavaScript zu konstruieren. Der folgende Codeausschnitt erstellt eine neue WebAssembly-Speicherinstanz mit einer Anfangsgröße von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft gibt einen {{jsxref("ArrayBuffer")}} zurück.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub und [sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den "memory.wasm" Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während der oben erstellte Speicher importiert wird. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen und immer das Little-Endian-Format zu verwenden.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory`-Objekt zu erhalten, ist, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann in der `exports`-Eigenschaft der WebAssembly-Instanz (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde) aufgerufen werden. Das folgende Beispiel importiert einen aus WebAssembly exportierten Speicher mit dem Namen `memory` und druckt dann das erste Element des Speichers aus, interpretiert als {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellen eines gemeinsamen Speichers

Standardmäßig sind WebAssembly-Speicher nicht gemeinsam genutzt. Sie können einen [gemeinsamen Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) mit JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

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
- [Verwenden der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
