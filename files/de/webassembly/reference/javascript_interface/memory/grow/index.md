---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Memory/grow
l10n:
  sourceCommit: bdab3a1efc984f4915590ba0a3099442e5e6f675
---

Die **`grow()`** Prototyp-Methode des [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekts erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten.

## Syntax

```js-nolint
grow(delta)
```

### Parameter

- `delta`
  - : Die Anzahl der WebAssembly-Seiten, um die Sie den Speicher erweitern möchten (jede hat eine Größe von 64KiB).
    Für Speicher mit einem Adresstyp von `"i64"` muss dies ein {{jsxref("BigInt")}}-Wert sein.

### Rückgabewert

Die vorherige Größe des Speichers, in Einheiten von WebAssembly-Seiten.
Für Speicher mit einem Adresstyp von `"i64"` ist dies ein {{jsxref("BigInt")}}-Wert.

### Ausnahmen

- {{jsxref("RangeError")}}: Wenn die aktuelle Größe zuzüglich `delta` die maximale Kapazität der Speicherinstanz überschreitet.

## Beispiele

### Verwendung von grow

Das folgende Beispiel erstellt eine neue WebAssembly-Speicherinstanz mit einer anfänglichen Größe von 1 Seite (64KiB) und einer maximalen Größe von 10 Seiten (640KiB).

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
});
```

Wir können die Instanz dann um eine Seite wie folgt erweitern:

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

Beachten Sie, dass der Rückgabewert von `grow()` hier die vorherige Anzahl der WebAssembly-Seiten ist.

### Erweitern eines 64-Bit-Speichers

Für Speicher mit einem Adresstyp von `"i64"` verwenden Sie einen {{jsxref("BigInt")}}-Wert für `grow()`:

```js
const memory = new WebAssembly.Memory({
  address: "i64",
  initial: 1n,
  maximum: 10n,
});

console.log(memory.grow(1n)); // 1n
```

### Abtrennen beim Erweitern

Jeder Aufruf von `grow` trennt alle Verweise auf den alten `buffer` ab, selbst bei `grow(0)`!
Das Abtrennen bedeutet, dass die `byteLength` des {{jsxref("ArrayBuffer")}} zu null wird und keine Bytes mehr für JavaScript zugänglich sind.
Der Zugriff auf die `buffer`-Eigenschaft nach dem Aufruf von `grow` ergibt einen `ArrayBuffer` mit der korrekten Länge.

```js example-bad
const memory = new WebAssembly.Memory({
  initial: 1,
});
const oldMemoryView = new Uint8Array(memory.buffer);
memory.grow(1);
// the array is empty!
console.log(oldMemoryView); // Uint8Array []
```

```js example-good
const memory = new WebAssembly.Memory({
  initial: 1,
});
memory.grow(1);
const currentMemoryView = new Uint8Array(memory.buffer);
// the array is full of zeros
console.log(currentMemoryView); // Uint8Array(131072) [ 0, 0, 0, ... ]
// 131072 = 64KiB * 2
```

Bei einer geteilten `Memory`-Instanz wird der ursprüngliche `buffer` (in einem solchen Fall ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)) nicht abgetrennt, sondern seine Länge wird nicht aktualisiert. Der Zugriff auf die `buffer`-Eigenschaft nach dem Erweitern ergibt einen größeren `SharedArrayBuffer`, der möglicherweise einen größeren Speicherbereich als der Puffer vor dem Erweitern des `Memory` zugänglich macht. Jeder `SharedArrayBuffer` von der `buffer`-Eigenschaft wird auf denselben Speicheradressbereich verweisen und somit dieselben Daten manipulieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
