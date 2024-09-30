---
title: WebAssembly.Memory
slug: WebAssembly/JavaScript_interface/Memory
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Memory`** Objekt ist ein anpassbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, der rohe Bytes des Speichers enthält, auf die von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) zugegriffen wird.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den Speicher zugreifen möchten, der in JS von WebAssembly erstellt wurde oder umgekehrt, können Sie den Speicher aus dem Modul nach JavaScript exportieren oder Speicher aus JavaScript in das Modul importieren, wenn es [instanziiert](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) wird.

Ursprünglich konnten Sie Speicheroperationen nur auf einen einzelnen Speicher im Wasm-Modul ausführen. Obwohl mehrere `Memory`-Objekte erstellt werden konnten, machte es keinen Sinn, dies zu tun. Neuere Implementierungen ermöglichen es WebAssembly-[Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) auf einen bestimmten Speicher zuzugreifen. Weitere Informationen finden Sie unter [Mehrere Speicher](/de/docs/WebAssembly/Understanding_the_text_format#multiple_memories) im Abschnitt _Verstehen des WebAssembly-Textformats_.

> [!NOTE]
> WebAssembly-Speicher ist immer im Little-Endian-Format, unabhängig von der Plattform, auf der es läuft. Daher sollten Sie Mehrbyte-Werte in JavaScript mit {{jsxref("DataView")}} lesen und schreiben, um die Portabilität zu gewährleisten.

## Konstruktor

- [`WebAssembly.Memory()`](/de/docs/WebAssembly/JavaScript_interface/Memory/Memory)
  - : Erzeugt ein neues `Memory`-Objekt.

## Instanzeigenschaften

- [`Memory.prototype.buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) {{ReadOnlyInline}}
  - : Gibt den im Speicher enthaltenen Puffer zurück.

## Instanzmethoden

- [`Memory.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Memory/grow)
  - : Erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten (jede ist 64KiB groß). Trennt den vorherigen `buffer`.

## Beispiele

### Erstellen eines neuen Memory-Objekts

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten. Die erste Möglichkeit besteht darin, es aus JavaScript zu konstruieren. Das folgende Beispiel erzeugt eine neue WebAssembly Memory-Instanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Die [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer) Eigenschaft gibt einen {{jsxref("ArrayBuffer")}} zurück.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});
```

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) lädt und instanziiert den geladenen "memory.wasm"-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), während der im obigen Schritt erstellte Speicher importiert wird. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Beachten Sie die Verwendung von {{jsxref("DataView")}}, um auf den Speicher zuzugreifen, sodass stets das Little-Endian-Format verwendet wird.

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

Eine andere Möglichkeit, ein `WebAssembly.Memory`-Objekt zu erhalten, besteht darin, es von einem WebAssembly-Modul exportieren zu lassen. Dieser Speicher kann in der Eigenschaft `exports` der WebAssembly-Instanz zugegriffen werden (nachdem der Speicher im WebAssembly-Modul exportiert wurde). Das folgende Beispiel importiert einen Speicher, der aus WebAssembly mit dem Namen `memory` exportiert wurde, und gibt dann das erste Element des Speichers als {{jsxref("Uint32Array")}} interpretiert aus.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm")).then((obj) => {
  const values = new DataView(obj.instance.exports.memory.buffer);
  console.log(values.getUint32(0, true));
});
```

### Erstellen eines gemeinsamen Speichers

Standardmäßig sind WebAssembly-Speicher nicht gemeinsam genutzt. Sie können einen [gemeinsamen Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

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

- [WebAssembly](/de/docs/WebAssembly) Überblicksseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
