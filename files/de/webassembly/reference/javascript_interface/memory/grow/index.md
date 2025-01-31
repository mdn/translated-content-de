---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Memory/grow
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`grow()`** Prototyp-Methode des [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekts erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten.

## Syntax

```js-nolint
grow(delta)
```

### Parameter

- `delta`
  - : Die Anzahl der WebAssembly-Seiten, um die Sie den Speicher vergrößern möchten (jede ist 64KiB groß).

### Rückgabewert

Die vorherige Größe des Speichers in Einheiten von WebAssembly-Seiten.

### Ausnahmen

- {{jsxref("RangeError")}}: Wenn die aktuelle Größe plus `delta` die maximale Größenkapazität der Speicherinstanz überschreitet.

## Beispiele

### Verwendung von grow

Das folgende Beispiel erstellt eine neue WebAssembly-Speicherinstanz mit einer Anfangsgröße von 1 Seite (64KiB) und einer maximalen Größe von 10 Seiten (640KiB).

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
});
```

Wir können dann die Instanz um eine Seite wie folgt vergrößern:

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

Beachten Sie, dass der Rückgabewert von `grow()` hier die vorherige Anzahl der WebAssembly-Seiten ist.

### Abtrennung beim Vergrößern

Jeder Aufruf von `grow` wird alle Verweise auf den alten `buffer` abtrennen, selbst bei `grow(0)`! Abtrennung bedeutet, dass das `byteLength` des {{jsxref("ArrayBuffer")}} zu null wird und keine Bytes mehr für JavaScript zugänglich sind. Das Zugreifen auf die `buffer`-Eigenschaft nach dem Aufruf von `grow` ergibt einen `ArrayBuffer` mit der korrekten Länge.

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

Für eine geteilte `Memory`-Instanz wird der anfängliche `buffer` (der in einem solchen Fall ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) wäre) nicht abgetrennt, sondern seine Länge wird nicht aktualisiert. Zugriffe auf die `buffer`-Eigenschaft nach dem Vergrößern ergeben einen größeren `SharedArrayBuffer`, der möglicherweise einen größeren Speicherbereich als der Puffer vor dem Vergrößern des `Memory` zugänglich macht. Jeder `SharedArrayBuffer` aus der `buffer`-Eigenschaft wird alle auf den Beginn des gleichen Speicheradressbereichs verweisen und somit dieselben Daten manipulieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
