---
title: WebAssembly.Memory() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Der **`WebAssembly.Memory()`** Konstruktor erstellt ein neues `Memory` Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft ein veränderbares {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ist, das die rohen Bytes des Speichers hält, auf den von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugegriffen wird.

Ein von JavaScript oder im WebAssembly-Code erstelltes Speicherobjekt wird sowohl von JavaScript als auch von WebAssembly zugänglich und veränderbar sein, vorausgesetzt, dass der Code das Objekt erstellt hat oder es ihm übergeben wurde.

Sowohl WebAssembly als auch JavaScript können `Memory` Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher von Wasm aus oder umgekehrt zugreifen möchten, können Sie eine Referenz auf den Speicher von einer Seite zur anderen übergeben.

## Syntax

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### Parameter

- `memoryDescriptor`
  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:
    - `initial`
      - : Die anfängliche Größe des WebAssembly-Speichers, gemessen in Einheiten von WebAssembly-Seiten.
    - `maximum` {{optional_inline}}
      - : Die maximale Größe, auf die der WebAssembly-Speicher wachsen darf, gemessen in Einheiten von WebAssembly-Seiten. Wenn vorhanden, wirkt der `maximum` Parameter als Hinweis an die Engine, im Voraus Speicher zu reservieren. Die Engine kann jedoch diese Reservierungsfrage ignorieren oder beschränken. Nicht-geteilte WebAssembly-Speicher müssen keine `maximum`-Größe festlegen, aber geteilte Speicher schon.
    - `shared` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Speicher ein geteilter Speicher ist oder nicht. Wenn auf `true` gesetzt, ist es ein geteilter Speicher. Die Standardeinstellung ist `false`.

> [!NOTE]
> Eine WebAssembly-Seite hat eine konstante Größe von 65.536 Bytes, also 64KiB.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen erfüllt ist:
    - `memoryDescriptor` ist kein Objekt.
    - `initial` ist nicht angegeben.
    - `shared` ist vorhanden und `true`, aber `maximum` ist nicht angegeben.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen erfüllt ist:
    - `maximum` ist angegeben und kleiner als `initial`.
    - `initial` überschreitet 65.536 (2^16). 2^16 Seiten entsprechen 2^16 \* 64KiB = 4GiB Bytes, was der maximale Bereich ist, den ein Wasm-Modul adressieren kann, da Wasm derzeit nur 32-Bit-Adressierung zulässt.
    - Zuweisung schlägt fehl. Dies kann auftreten, wenn versucht wird, zu viel auf einmal zuzuweisen, oder wenn der User-Agent anderweitig keinen Speicher mehr hat.

## Beispiele

### Erstellen einer neuen Memory Instanz

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory` Objekt zu erhalten: Es aus JavaScript zu konstruieren oder es von einem WebAssembly-Modul exportieren zu lassen.

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub und [sehen Sie es sich live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) erstellt eine neue WebAssembly Memory Instanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Das Beispiel lädt und instanziiert das geladene memory.wasm-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während es den im obigen Zeilen erstellten Speicher importiert. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft des `Memory` Objekts gibt einen {{jsxref("ArrayBuffer")}} zurück.

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

### Erstellen eines geteilten Speichers

Standardmäßig sind WebAssembly-Speicher nicht geteilt. Sie können ein [geteilter Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer` Eigenschaft dieses Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

## Spezifikationen

Das `shared` Attribut ist nur in [dem Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#javascript-api-changes) dokumentiert und nicht Teil der offiziellen Spezifikationen.

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
