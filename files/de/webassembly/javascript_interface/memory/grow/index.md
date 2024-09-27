---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/JavaScript_interface/Memory/grow
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Die **`grow()`**-Prototypmethode des [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekts erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten.

## Syntax

```js-nolint
grow(delta)
```

### Parameter

- `delta`
  - : Die Anzahl der WebAssembly-Seiten, um die Sie den Speicher vergrößern möchten (jede ist 64KiB groß).

### Rückgabewert

Die vorherige Größe des Speichers, in Einheiten von WebAssembly-Seiten.

### Ausnahmen

- {{jsxref("RangeError")}}: Wenn die aktuelle Größe, addiert mit `delta`, die maximale Kapazität der Speicherinstanz überschreitet.

## Beispiele

### Verwendung von grow

Das folgende Beispiel erstellt eine neue WebAssembly-Speicherinstanz mit einer anfänglichen Größe von 1 Seite (64KiB) und einer maximalen Größe von 10 Seiten (640KiB).

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
});
```

Wir können die Instanz dann um eine Seite wie folgt vergrößern:

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

Beachten Sie, dass der Rückgabewert von `grow()` hier die vorherige Anzahl von WebAssembly-Seiten ist.

### Abtrennung beim Wachsen

Jeder Aufruf von `grow` trennt alle Verweise auf den alten `buffer`, selbst bei `grow(0)`!
Abtrennung bedeutet, dass die `byteLength` des {{jsxref("ArrayBuffer")}} null wird und keine Bytes mehr für JavaScript zugänglich sind.
Der Zugriff auf die `buffer`-Eigenschaft nach dem Aufruf von `grow` liefert einen `ArrayBuffer` mit der korrekten Länge.

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

Bei einer geteilten `Memory`-Instanz wird der ursprüngliche `buffer` (der in einem solchen Fall ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) wäre) nicht abgetrennt, sondern seine Länge wird nicht aktualisiert. Der Zugriff auf die `buffer`-Eigenschaft nach dem Wachsen liefert einen größeren `SharedArrayBuffer`, der auf einen größeren Speicherbereich zugreifen kann als der Puffer vor dem Wachstum der `Memory`. Jeder `SharedArrayBuffer` von der `buffer`-Eigenschaft bezieht sich auf den Beginn desselben Speicheradressbereichs und manipuliert somit dieselben Daten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
