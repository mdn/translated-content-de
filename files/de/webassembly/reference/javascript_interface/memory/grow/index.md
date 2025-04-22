---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Memory/grow
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die **`grow()`** Prototyp-Methode des [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory) Objekts erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten.

## Syntax

```js-nolint
grow(delta)
```

### Parameter

- `delta`
  - : Die Anzahl an WebAssembly-Seiten, um die Sie den Speicher erweitern möchten (jede einzelne ist 64KiB groß).

### Rückgabewert

Die vorherige Größe des Speichers, angegeben in Einheiten von WebAssembly-Seiten.

### Ausnahmen

- {{jsxref("RangeError")}}: Wenn die aktuelle Größe, addiert mit `delta`, die maximale Größenkapazität der Speicherinstanz überschreitet.

## Beispiele

### Verwendung von grow

Das folgende Beispiel erstellt eine neue WebAssembly Speicherinstanz mit einer Anfangsgröße von 1 Seite (64KiB) und einer maximalen Größe von 10 Seiten (640KiB).

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

Beachten Sie, dass der Rückgabewert von `grow()` hier die vorherige Anzahl an WebAssembly-Seiten ist.

### Loslösung beim Wachsen

Jeder Aufruf von `grow` trennt alle Referenzen zum alten `buffer`, sogar bei `grow(0)`!
Eine Trennung bedeutet, dass die `byteLength` des {{jsxref("ArrayBuffer")}} null wird und es keine Bytes mehr gibt, die in JavaScript zugänglich sind.
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

Für eine geteilte `Memory`-Instanz wird der ursprüngliche `buffer` (welcher in einem solchen Fall ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) wäre) nicht getrennt, sondern seine Länge wird nicht aktualisiert. Der Zugriff auf die `buffer`-Eigenschaft nach der Vergrößerung liefert einen größeren `SharedArrayBuffer`, der auf einen größeren Speicherbereich zugreifen kann als der `buffer` von vor der Vergrößerung der `Memory`. Jeder `SharedArrayBuffer` der `buffer`-Eigenschaft wird sich alle auf den Anfang desselben Speicheradressbereichs beziehen und somit dieselben Daten manipulieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
