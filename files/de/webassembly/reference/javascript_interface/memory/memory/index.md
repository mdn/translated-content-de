---
title: WebAssembly.Memory() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

Der **`WebAssembly.Memory()`** Konstruktor erstellt ein neues `Memory`-Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) Eigenschaft ein anpassbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ist, der die rohen Bytes des Speichers enthält, auf den von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugegriffen wird.

Ein von JavaScript oder im WebAssembly-Code erstelltes Speicherobjekt ist sowohl von JavaScript als auch von WebAssembly aus zugänglich und veränderbar, vorausgesetzt, der Code hat das Objekt erstellt oder ihm wurde das Objekt übergeben.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher von Wasm aus oder umgekehrt zugreifen möchten, können Sie eine Referenz auf den Speicher von einer Seite zur anderen übergeben.

## Syntax

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### Parameter

- `memoryDescriptor`

  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:

    - `initial`
      - : Die anfängliche Größe des WebAssembly-Speichers in Einheiten von WebAssembly-Seiten.
    - `maximum` {{optional_inline}}
      - : Die maximale Größe, auf die der WebAssembly-Speicher wachsen darf, in Einheiten von
        WebAssembly-Seiten. Wenn vorhanden, fungiert der Parameter `maximum` als Hinweis
        für die Engine, im Voraus Speicher zu reservieren. Die Engine kann jedoch diese Reservierungsanfrage ignorieren oder begrenzen. Ungeteilte WebAssembly-Speicher müssen kein
        `maximum` festlegen, aber geteilte Speicher schon.
    - `shared` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Speicher ein geteilter Speicher ist oder nicht. Wenn
        auf `true` gesetzt, ist es ein geteilter Speicher. Der Standardwert ist `false`.

> [!NOTE]
> Eine WebAssembly-Seite hat eine konstante Größe von 65.536 Bytes, also 64KiB.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn mindestens eine dieser Bedingungen erfüllt ist:
    - `memoryDescriptor` ist kein Objekt.
    - `initial` ist nicht angegeben.
    - `shared` ist vorhanden und `true`, aber `maximum` ist nicht angegeben.
- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn mindestens eine dieser Bedingungen erfüllt ist:
    - `maximum` ist angegeben und kleiner als `initial`.
    - `initial` überschreitet 65.536 (2^16). 2^16 Seiten sind 2^16 \* 64KiB = 4GiB Bytes, was der maximale Bereich ist, den ein Wasm-Modul adressieren kann, da Wasm derzeit nur 32-Bit-Adressierung zulässt.
    - Die Zuordnung schlägt fehl. Dies kann auftreten, wenn versucht wird, zu viel auf einmal zuzuweisen, oder wenn der Benutzeragent anderweitig keinen Speicher mehr hat.

## Beispiele

### Erstellen einer neuen Memory-Instanz

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten: Es aus JavaScript zu konstruieren oder von einem WebAssembly-Modul exportieren zu lassen.

Das folgende Beispiel (sehen Sie sich [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub an und [sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) erstellt eine neue WebAssembly Memory-Instanz mit einer Anfangsgröße von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Das Beispiel lädt und instanziiert den geladenen Speicher.wasm-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während der Speicher importiert wird, der in der obigen Zeile erstellt wurde. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Die `Memory`-Eigenschaft [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) gibt einen {{jsxref("ArrayBuffer")}} zurück.

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

Standardmäßig sind WebAssembly-Speicher ungeteilt.
Sie können einen [geteilten Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories)
aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft dieses Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

## Spezifikationen

Das `shared`-Attribut ist nur in [dem Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#javascript-api-changes) dokumentiert und nicht Teil der offiziellen Spezifikationen.

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
