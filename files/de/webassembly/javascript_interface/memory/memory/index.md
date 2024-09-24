---
title: WebAssembly.Memory()-Konstruktor
slug: WebAssembly/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Der **`WebAssembly.Memory()`**-Konstruktor erstellt ein neues `Memory`-Objekt, dessen [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft ein anpassbares {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ist, das die rohen Bytes des Speichers enthält, auf die von einer [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) zugegriffen wird.

Ein von JavaScript oder in WebAssembly-Code erstelltes Speicherobjekt wird sowohl von JavaScript als auch von WebAssembly zugänglich und veränderbar sein, vorausgesetzt, der Code hat das Objekt erstellt oder es wurde ihm übergeben.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher von Wasm oder umgekehrt zugreifen möchten, können Sie eine Referenz auf den Speicher von einer Seite zur anderen übergeben.

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
      - : Die maximale Größe, auf die der WebAssembly-Speicher anwachsen darf, in Einheiten von WebAssembly-Seiten. Wenn vorhanden, fungiert der `maximum`-Parameter als Hinweis für die Engine, im Voraus Speicher zu reservieren. Allerdings darf die Engine diese Reservierungsanfrage ignorieren oder einschränken. Nicht geteilte WebAssembly-Speicher müssen kein `maximum` setzen, aber geteilte Speicher tun es.
    - `shared` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Speicher ein geteilter Speicher ist oder nicht. Wenn auf `true` gesetzt, ist es ein geteilter Speicher. Der Standardwert ist `false`.

> [!NOTE]
> Eine WebAssembly-Seite hat eine konstante Größe von 65.536 Bytes, d. h. 64KiB.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wirft einen Fehler, wenn mindestens eine dieser Bedingungen erfüllt ist:
    - `memoryDescriptor` ist kein Objekt.
    - `initial` ist nicht angegeben.
    - `shared` ist vorhanden und `true`, aber `maximum` ist nicht angegeben.
- {{jsxref("RangeError")}}
  - : Wirft einen Fehler, wenn mindestens eine dieser Bedingungen erfüllt ist:
    - `maximum` ist angegeben und kleiner als `initial`.
    - `initial` überschreitet 65.536 (2^16). 2^16 Seiten betragen 2^16 \* 64KiB = 4GiB Bytes, was der maximale Bereich ist, den ein Wasm-Modul adressieren kann, da Wasm derzeit nur 32-Bit-Adressierung zulässt.
    - Die Zuweisung scheitert. Dies kann aufgrund des Versuchs, zu viel auf einmal zuzuweisen, oder wenn dem Benutzeragenten anderweitig der Speicher ausgeht, auftreten.

## Beispiele

### Erstellen einer neuen Memory-Instanz

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten: Es von JavaScript aus zu konstruieren oder es von einem WebAssembly-Modul exportieren zu lassen.

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub, und [sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) erstellt eine neue WebAssembly-Memory-Instanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6.4MiB). Das Beispiel lädt und instanziiert den geladenen memory.wasm-Bytecode mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)-Funktion, während es den zuvor erstellten Speicher importiert. Es speichert dann einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Die [`buffer`](/de/docs/WebAssembly/JavaScript_interface/Memory/buffer)-Eigenschaft des `Memory`-Objekts wird einen {{jsxref("ArrayBuffer")}} zurückgeben.

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
    summands.setUint32(i * 4, i, true); // WebAssembly ist klein-endian
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

### Erstellen eines geteilten Speichers

Standardmäßig sind WebAssembly-Speicher nicht geteilt.
Sie können einen [geteilten Speicher](/de/docs/WebAssembly/Understanding_the_text_format#shared_memories) von JavaScript aus erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Die `buffer`-Eigenschaft dieses Speichers wird einen {{jsxref("SharedArrayBuffer")}} zurückgeben.

## Spezifikationen

Das `shared`-Attribut ist nur in [dem Threading-Vorschlag für WebAssembly](https://github.com/WebAssembly/threads/blob/master/proposals/threads/Overview.md#javascript-api-changes) dokumentiert und nicht Teil der offiziellen Spezifikationen.

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
