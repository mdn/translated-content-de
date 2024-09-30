---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/JavaScript_interface/Memory/grow
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Die **`grow()`** Prototyp-Methode des [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory) Objekts erhöht die Größe der Speicherinstanz um eine angegebene Anzahl von WebAssembly-Seiten.

## Syntax

```js-nolint
grow(delta)
```

### Parameter

- `delta`
  - : Die Anzahl von WebAssembly-Seiten, um die Sie den Speicher vergrößern möchten (jede Seite ist 64KiB groß).

### Rückgabewert

Die vorherige Größe des Speichers in Einheiten von WebAssembly-Seiten.

### Ausnahmen

- {{jsxref("RangeError")}}: Wenn die aktuelle Größe zusammen mit `delta` die maximale Kapazität der Memory-Instanz überschreitet.

## Beispiele

### Nutzung von grow

Im folgenden Beispiel wird eine neue WebAssembly-Speicherinstanz mit einer Anfangsgröße von 1 Seite (64KiB) und einer maximalen Größe von 10 Seiten (640KiB) erstellt.

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

Beachten Sie, dass der Rückgabewert von `grow()` hier die vorherige Anzahl von WebAssembly-Seiten ist.

### Ablösung beim Vergrößern

Jeder Aufruf von `grow` löst alle Referenzen zum alten `buffer`, selbst bei `grow(0)`. Ablösung bedeutet, dass die `byteLength` des {{jsxref("ArrayBuffer")}} null wird und er keine Bytes mehr hat, auf die JavaScript zugreifen kann. Der Zugriff auf die `buffer` Eigenschaft nach dem Aufruf von `grow` liefert einen `ArrayBuffer` mit der richtigen Länge.

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

Bei einer freigegebenen `Memory`-Instanz wird der initiale `buffer` (in diesem Fall ein [`SharedArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)) nicht abgelöst, sondern seine Länge wird nicht aktualisiert. Zugriffe auf die `buffer` Eigenschaft nach dem Wachsen geben einen größeren `SharedArrayBuffer` zurück, der möglicherweise auf einen größeren Speicherbereich zugreifen kann als der Buffer vor dem Wachsen der `Memory`. Jeder `SharedArrayBuffer` aus der `buffer` Eigenschaft bezieht sich auf den Anfang desselben Speicheradressbereichs und manipuliert somit dieselben Daten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
