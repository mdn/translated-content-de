---
title: WebAssembly.Memory()-Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Memory/Memory
l10n:
  sourceCommit: bdab3a1efc984f4915590ba0a3099442e5e6f675
---

Der **`WebAssembly.Memory()`**-Konstruktor erstellt ein neues `Memory`-Objekt, dessen [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft ein größenveränderbares {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ist, das die Rohbytes des Speichers enthält, auf die eine [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) zugreift.

Ein Speicherobjekt, das von JavaScript oder in WebAssembly-Code erstellt wurde, wird sowohl von JavaScript als auch von WebAssembly zugänglich und veränderlich sein, sofern der Code das Objekt erstellt hat oder das Objekt erhalten hat.

Sowohl WebAssembly als auch JavaScript können `Memory`-Objekte erstellen. Wenn Sie auf den in JS erstellten Speicher von Wasm oder umgekehrt zugreifen möchten, können Sie eine Referenz auf den Speicher von einer Seite an die andere übergeben.

## Syntax

```js-nolint
new WebAssembly.Memory(memoryDescriptor)
```

### Parameter

- `memoryDescriptor`
  - : Ein Objekt, das die folgenden Mitglieder enthalten kann:
    - `address` {{optional_inline}}
      - : Ein Zeichenfolgewert, der den Adresstyp des Speichers angibt. Dies kann entweder
        `"i32"` oder `"i64"` sein. Der Standardwert ist `"i32"`.
        Wenn `address` auf `"i64"` gesetzt ist, müssen `initial` und `maximum`, falls vorhanden, {{jsxref("BigInt")}}-Werte sein.
    - `initial`
      - : Die anfängliche Größe des WebAssembly-Speichers, in Einheiten von WebAssembly-Seiten.
    - `maximum` {{optional_inline}}
      - : Die maximale Größe, auf die der WebAssembly-Speicher wachsen darf, in Einheiten von
        WebAssembly-Seiten. Wenn vorhanden, fungiert der `maximum`-Parameter als Hinweis
        für die Engine, Speicher im Voraus zu reservieren. Die Engine kann diese Reservierungsanfrage jedoch ignorieren oder drosseln. Nicht gemeinsam genutzte WebAssembly-Speicher müssen kein `maximum` setzen, aber gemeinsam genutzte Speicher müssen es.
    - `shared` {{optional_inline}}
      - : Ein boolescher Wert, der definiert, ob der Speicher ein gemeinsam genutzter Speicher ist oder nicht. Wenn
        auf `true` gesetzt, handelt es sich um einen gemeinsam genutzten Speicher. Der Standardwert ist `false`.

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
    - `address` ist auf `"i32"` gesetzt oder weggelassen, und `initial` überschreitet `65.536` (2^16). 2^16 Seiten entsprechen 4GiB (2^16 \* 64KiB), was der maximale Bereich ist, den ein Wasm-Modul mit 32-Bit-Adressierung adressieren kann.
    - Die Zuordnung schlägt fehl. Dies kann auftreten, wenn versucht wird, zu viel auf einmal zuzuordnen, oder wenn der User Agent anderweitig keinen Speicher mehr hat.

## Beispiele

### Erstellen einer neuen Memory-Instanz

Es gibt zwei Möglichkeiten, ein `WebAssembly.Memory`-Objekt zu erhalten: Es aus JavaScript zu konstruieren oder es von einem WebAssembly-Modul exportieren zu lassen.

Das folgende Beispiel (siehe [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) auf GitHub und [sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) erstellt eine neue WebAssembly-Memory-Instanz mit einer anfänglichen Größe von 10 Seiten (640KiB) und einer maximalen Größe von 100 Seiten (6,4MiB). Das Beispiel lädt und instanziiert den geladenen Memory.wasm-Bytecode mithilfe der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), während es den oben erstellten Speicher importiert. Anschließend speichert es einige Werte in diesem Speicher, exportiert eine Funktion und verwendet die exportierte Funktion, um diese Werte zu summieren. Die [`buffer`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)-Eigenschaft des `Memory`-Objekts wird einen {{jsxref("ArrayBuffer")}} zurückgeben.

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

### Erstellen eines gemeinsam genutzten Speichers

Standardmäßig sind WebAssembly-Speicher nicht gemeinsam genutzt.
Sie können einen [gemeinsam genutzten Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#shared_memories)
von JavaScript aus erstellen, indem Sie `shared: true` im Initialisierungsobjekt des Konstruktors übergeben:

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true,
});
```

Diese `buffer`-Eigenschaft des Speichers gibt einen {{jsxref("SharedArrayBuffer")}} zurück.

### Verwenden einer 64-Bit-Adresse

Um einen Speicher mit einem 64-Bit-Adresstyp zu erstellen, übergeben Sie `address: "i64"`.
Die Werte für `initial` und `maximum` müssen {{jsxref("BigInt")}}-Werte sein:

```js
const memory = new WebAssembly.Memory({
  address: "i64",
  initial: 1n,
  maximum: 10n,
});
```

## Spezifikationen

Das `shared`-Attribut ist nur im [Threading Proposal für WebAssembly](https://github.com/WebAssembly/threads/blob/main/proposals/threads/Overview.md#javascript-api-changes) dokumentiert und nicht Teil der offiziellen Spezifikationen.

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
