---
title: "`WebAssembly.Memory()` Konstruktor"
slug: WebAssembly/Reference/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Der **`WebAssembly.Memory()`** Konstruktor erstellt ein neues `Memory`-Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft ein anpassbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ist, der die rohen Bytes des Speichers enthält, die von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) abgerufen werden.

Ein durch JavaScript oder in WebAssembly-Code erstelltes Speicherobjekt wird von sowohl JavaScript als auch WebAssembly zugänglich und veränderbar sein, sofern der Code das Objekt erstellt hat oder ihm das Objekt übergeben wurde.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher von Wasm aus zugreifen oder umgekehrt, können Sie eine Referenz auf den Speicher von einer Seite zur anderen übergeben.

## Syntax

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### Parameter

- `memoryDescriptor`

  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:

    - `initial`
      - : Die anfängliche Größe des WebAssembly-Speichers, in Einheiten von WebAssembly-Seiten.
    - `maximum` {{optional_inline}}
      - : Die maximale Größe, auf die der WebAssembly-Speicher wachsen darf, in Einheiten von
        WebAssembly-Seiten. Ist dieser Parameter vorhanden, dient er als Hinweis
        an die Engine, Speicher im Voraus zu reservieren. Die Engine kann diese
        Anforderung jedoch ignorieren oder beschränken. Nicht geteilte WebAssembly-Speicher brauchen kein
        `maximum` zu setzen, geteilte Speicher schon.
    - `shared` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob es sich um einen geteilten Speicher handelt oder nicht. Wenn
        auf `true` gesetzt, ist es ein geteilter Speicher. Der Standardwert ist `false`.

> [!NOTE]
> Eine WebAssembly-Seite hat eine konstante Größe von 65.536 Bytes, d.h. 64KiB.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen erfüllt ist:
    - `memoryDescriptor` ist kein Objekt.
    - `initial` ist nicht angegeben.
    - `shared` ist vorhanden und `true`, aber `maximum` ist nicht angegeben.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn mindestens eine der folgenden Bedingungen erfüllt ist:
    - `maximum` ist angegeben und kleiner als `initial`.
    - `initial` übersteigt 65.536 (2^16). 2^16 Seiten sind 2^16 \* 64KiB = 4GiB Bytes, was der maximale Bereich ist, den ein Wasm-Modul adressieren kann, da Wasm derzeit nur 32-Bit-Adressierung erlaubt.
    - Die Zuweisung schlägt fehl. Dies kann auftreten, wenn zu viel auf einmal zugewiesen werden soll oder wenn der User Agent anderweitig keinen Speicher mehr zur Verfügung hat.

## Beispiele

### Erstellen einer neuen Speicherinstanz

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten: Es aus JavaScript zu konstruieren oder es von einem WebAssembly-Modul exportieren zu lassen.

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [sehen Sie es auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) erstellt eine neue WebAssembly-Speicherinstanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Das Beispiel lädt und instanziiert den geladenen memory.wasm-Bytecode mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Funktion, während es den Speicher importiert, der in der obigen Zeile erstellt wurde. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Die `Memory`-Eigenschaft [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) des Objekts gibt einen {{jsxref("ArrayBuffer")}} zurück.

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

Standardmäßig sind WebAssembly-Speicher nicht geteilt.
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

Das `shared`-Attribut ist nur im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#javascript-api-changes) dokumentiert und nicht Teil der offiziellen Spezifikationen.

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
