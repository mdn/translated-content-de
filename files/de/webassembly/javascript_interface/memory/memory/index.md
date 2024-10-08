---
title: WebAssembly.Memory() Konstruktor
slug: WebAssembly/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Memory()`** Konstruktor erstellt ein neues `Memory`-Objekt, dessen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft ein anpassbarer {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ist, der die Rohbytes des Speichers enthält, auf den von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) zugegriffen wird.

Ein von JavaScript oder im WebAssembly-Code erstelltes Speicherobjekt ist sowohl von JavaScript als auch von WebAssembly zugänglich und veränderbar, sofern der Code das Objekt erstellt hat oder das Objekt zur Verfügung gestellt wurde.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher aus Wasm zugreifen möchten oder umgekehrt, können Sie eine Referenz auf den Speicher von einer Seite zur anderen übergeben.

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
      - : Die maximale Größe, auf die der WebAssembly-Speicher wachsen darf, in Einheiten von WebAssembly-Seiten. Wenn vorhanden, dient der `maximum`-Parameter als Hinweis an die Engine, Speicher im Voraus zu reservieren. Die Engine kann diese Reservierungsanfrage jedoch ignorieren oder einschränken. Nicht geteilte WebAssembly-Speicher müssen kein `maximum` festlegen, aber geteilte Speicher schon.
    - `shared` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Speicher ein geteiltes Speicher ist oder nicht. Wenn auf `true` gesetzt, ist es ein geteiltes Speicher. Der Standardwert ist `false`.

> [!NOTE]
> Eine WebAssembly-Seite hat eine konstante Größe von 65.536 Bytes, also 64KiB.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn mindestens eine dieser Bedingungen zutrifft:
    - `memoryDescriptor` ist kein Objekt.
    - `initial` ist nicht angegeben.
    - `shared` ist vorhanden und `true`, jedoch ist `maximum` nicht angegeben.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn mindestens eine dieser Bedingungen zutrifft:
    - `maximum` ist angegeben und kleiner als `initial`.
    - `initial` übersteigt 65.536 (2^16). 2^16 Seiten sind 2^16 \* 64KiB = 4GiB Bytes, was der maximale Bereich ist, den ein Wasm-Modul adressieren kann, da Wasm derzeit nur 32-Bit-Adressierung zulässt.
    - Die Zuweisung schlägt fehl. Dies kann aufgrund des Versuchs auftreten, zu viel auf einmal zuzuweisen, oder wenn der User-Agent anderweitig keinen Speicher mehr hat.

## Beispiele

### Erstellen einer neuen Memory-Instanz

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten: Es aus JavaScript zu konstruieren oder aus einem WebAssembly-Modul exportieren zu lassen.

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [auch live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) erstellt eine neue WebAssembly Memory-Instanz mit einer Anfangsgröße von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Das Beispiel ruft und instanziiert den geladenen memory.wasm-Bytecode mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), während es den zuvor erstellten Speicher importiert. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Die [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft des `Memory`-Objekts gibt einen {{jsxref("ArrayBuffer")}} zurück.

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
Sie können einen [geteilten Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) aus JavaScript erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Diese Eigenschaft `buffer` des Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

## Spezifikationen

Das `shared`-Attribut wird nur im [Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) dokumentiert und ist nicht Teil der offiziellen Spezifikationen.

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
