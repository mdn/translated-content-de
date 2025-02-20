---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
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

`Math.imul()` ermöglicht die 32-Bit-Ganzzahlenmultiplikation mit C-ähnlicher Semantik. Diese Funktionalität ist nützlich für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Da `imul()` eine statische Methode von `Math` ist, wird sie immer als `Math.imul()` verwendet und nicht als Methode eines von Ihnen erstellten `Math`-Objektes (`Math` ist kein Konstruktor).

Wenn Sie normale JavaScript-Gleitkommazahlen in `imul()` verwenden, wird die Performance beeinträchtigt. Dies liegt an der aufwändigen Umwandlung von einer Gleitkommazahl in eine Ganzzahl für die Multiplikation und der anschließenden Umwandlung der multiplizierten Ganzzahl zurück in eine Gleitkommazahl. Mit [asm.js](/de/docs/Games/Tools/asm.js), das JIT-Optimierer dazu befähigt, sicherer Ganzzahlen in JavaScript zu verwenden, könnte das Multiplizieren von zwei intern als Ganzzahlen gespeicherten Zahlen (was nur mit asm.js möglich ist) mit `imul()` potenziell leistungsfähiger sein.

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
- [Emscripten](https://en.wikipedia.org/wiki/Emscripten) auf Wikipedia
