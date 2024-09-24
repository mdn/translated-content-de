---
title: WebAssembly.Memory
slug: WebAssembly/JavaScript_interface/Memory
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Memory`**-Objekt ist ein resizebares {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, das rohe Bytes von einem [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) speichert.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den Speicher zugreifen möchten, der in JS von WebAssembly erstellt wurde, oder umgekehrt, können Sie den Speicher aus dem Modul nach JavaScript exportieren oder Speicher von JavaScript zum Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnten Sie Speicheroperationen nur auf einem einzelnen Speicher im Wasm-Modul durchführen. Daher gab es keinen Grund, mehrere `Memory`-Objekte zu erstellen. Neuere Implementierungen erlauben, dass WebAssembly [Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) auf einem angegebenen Speicher operieren. Weitere Informationen finden Sie unter [Mehrere Speicher](/de/docs/WebAssembly/Understanding_the_text_format#multiple_memories) in _Verstehen des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der es ausgeführt wird. Daher sollten Sie zur Portabilität mehrbyteige Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory`-Objekt.

## Instanz-Eigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Puffer zurück.

## Instanz-Methoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer`.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten. Der erste Weg ist, es aus JavaScript zu konstruieren. Der folgende Ausschnitt erstellt eine neue WebAssembly-Speicherinstanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Die [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft gibt ein {{jsxref("ArrayBuffer")}} zurück.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub und [sehen Sie es auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) ruft den geladenen "memory.wasm"-Bytecode ab und instanziiert ihn mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), während der in der obigen Zeile erstellte Speicher importiert wird. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen, sodass wir immer das Little-Endian-Format verwenden.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory`-Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann innerhalb der `exports`-Eigenschaft der WebAssembly-Instanz zugegriffen werden (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde). Das folgende Beispiel importiert einen aus WebAssembly exportierten Speicher mit dem Namen `memory` und gibt dann das erste Element des Speichers aus, interpretiert als ein {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellen eines geteilten Speichers

Standardmäßig sind WebAssembly-Speicher ungeteilt. Sie können einen [geteilten Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft dieses Speichers gibt ein {{jsxref("SharedArrayBuffer")}} zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung des WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
