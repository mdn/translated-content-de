---
title: Math.imul()
short-title: imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`Math.imul()`** statische Methode gibt das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Parameter zurück.

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

Das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der gegebenen Argumente.

## Beschreibung

`Math.imul()` ermöglicht 32-Bit-Ganzzahl-Multiplikation mit C-ähnlicher Semantik. Diese Funktion ist nützlich für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Da `imul()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.imul()` und nicht als Methode eines erstellten `Math`-Objektes (`Math` ist kein Konstruktor).

Wenn Sie normale JavaScript-Gleitkommazahlen in `imul()` verwenden, werden Sie eine Leistungseinbuße feststellen. Dies liegt an der aufwendigen Umwandlung von einer Gleitkommazahl in eine Ganzzahl zur Multiplikation und dem anschließenden Zurückwandeln der multiplizierten Ganzzahl in eine Gleitkommazahl. Mit [asm.js](/de/docs/Games/Tools/asm.js), das es JIT-Optimierern ermöglicht, sicherer Ganzzahlen in JavaScript zu verwenden, könnte das Multiplizieren von zwei intern als Ganzzahlen gespeicherten Zahlen (was nur mit asm.js möglich ist) mit `imul()` potenziell performanter sein.

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
