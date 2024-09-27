---
title: WebAssembly.Memory
slug: WebAssembly/JavaScript_interface/Memory
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Memory`**-Objekt ist ein skalierbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der rohe Bytes von Speicher hält, auf die von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) zugegriffen wird.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen.
Wenn Sie auf den Speicher zugreifen möchten, der in JS von WebAssembly erstellt wurde, oder umgekehrt, können Sie den Speicher vom Modul nach JavaScript exportieren oder Speicher von JavaScript zum Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnte man Speicheroperationen nur auf einem einzelnen Speicher im Wasm-Modul ausführen, sodass es keinen Sinn machte, mehrere `Memory`-Objekte zu erstellen.
Neuere Implementierungen erlauben es WebAssembly, [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) auf einen bestimmten Speicher anzuwenden.
Weitere Informationen finden Sie unter [Mehrere Speicher](/de/docs/WebAssembly/Understanding_the_text_format#multiple_memories) im Abschnitt _Understanding WebAssembly text format_.

> [!NOTE]
> WebAssembly-Speicher hat immer das Little-Endian-Format, unabhängig von der Plattform, auf der es ausgeführt wird. Daher sollten Sie für Portabilität mehrbyteige Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory)
  - : Erstellt ein neues `Memory`-Objekt.

## Instanz-Eigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Puffer zurück.

## Instanz-Methoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicher-Instanz um eine angegebene Anzahl von WebAssembly-Seiten (jede hat eine Größe von 64KiB). Trennt den vorherigen `buffer`.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten. Die erste Möglichkeit ist, es aus JavaScript zu konstruieren. Das folgende Beispiel erstellt eine neue WebAssembly-Memory-Instanz mit einer Anfangsgröße von 10 Seiten (640KiB) und einer Maximalgröße von 100 Seiten (6,4MiB). Seine [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft wird einen {{jsxref("ArrayBuffer")}} zurückgeben.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen "memory.wasm"-Bytecode mithilfe der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), während der in der obigen Zeile erstellte Speicher importiert wird. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}} zum Zugriff auf den Speicher, sodass wir immer das Little-Endian-Format verwenden.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory`-Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann in der `exports`-Eigenschaft der WebAssembly-Instanz (nachdem der Speicher innerhalb des WebAssembly-Moduls exportiert wurde) zugegriffen werden. Das folgende Beispiel importiert einen aus WebAssembly exportierten Speicher mit dem Namen `memory` und gibt dann das erste Element des Speichers aus, interpretiert als {{jsxref("Uint32Array")}}.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellen eines geteilten Speichers

Standardmäßig sind WebAssembly-Speicher ungeteilt. Sie können einen [gemeinsamen Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
