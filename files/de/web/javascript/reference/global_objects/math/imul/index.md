---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Math.imul()`** gibt das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Parameter zurück.

{{InteractiveExample("JavaScript Demo: Math.imul()")}}

```js interactive-example
console.log(Math.imul(3, 4));
// Expected output: 12

console.log(Math.imul(-5, 12));
// Expected output: -60

console.log(Math.imul(0xffffffff, 5));
// Expected output: -5

console.log(Math.imul(0xfffffffe, 5));
// Expected output: -10
```

## Syntax

```js-nolint
Math.imul(a, b)
```

### Parameter

- `a`
  - : Erste Zahl.
- `b`
  - : Zweite Zahl.

### Rückgabewert

Das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der angegebenen Argumente.

## Beschreibung

`Math.imul()` ermöglicht eine 32-Bit-Ganzzahlmultiplikation mit C-ähnlicher Semantik. Dieses Feature ist nützlich für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Da `imul()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.imul()`, anstatt als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Wenn Sie normale JavaScript-Gleitkommazahlen in `imul()` verwenden, wird die Leistung abnehmen. Dies liegt an der aufwendigen Umwandlung von einem Gleitkomma zu einer Ganzzahl zur Multiplikation und dann der Umwandlung der multiplizierten Ganzzahl zurück in ein Gleitkomma. Allerdings könnte mit [asm.js](/de/docs/Games/Tools/asm.js), das es JIT-Optimierern ermöglicht, vertrauenswürdiger Ganzzahlen in JavaScript zu verwenden, das Multiplizieren von zwei Zahlen, die intern als Ganzzahlen gespeichert sind (was nur mit asm.js möglich ist), mit `imul()` potenziell leistungsfähiger sein.

## Beispiele

### Verwendung von Math.imul()

```js
Math.imul(2, 4); // 8
Math.imul(-1, 8); // -8
Math.imul(-2, -2); // 4
Math.imul(0xffffffff, 5); // -5
Math.imul(0xfffffffe, 5); // -10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.imul` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- [es-shims Polyfill von `Math.imul`](https://www.npmjs.com/package/math.imul)
- [Emscripten](https://en.wikipedia.org/wiki/Emscripten) auf Wikipedia
