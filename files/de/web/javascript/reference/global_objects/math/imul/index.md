---
title: Math.imul()
short-title: imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

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

`Math.imul()` ermöglicht die Multiplikation von 32-Bit-Ganzzahlen mit C-ähnlicher Semantik. Diese Funktion ist für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten) nützlich.

Da `imul()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.imul()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Wenn Sie in `imul()` gewöhnliche JavaScript-Gleitkommazahlen verwenden, verschlechtert sich die Leistung. Der Grund dafür ist die aufwendige Umwandlung einer Gleitkommazahl in eine Ganzzahl vor der Multiplikation und die anschließende Rückumwandlung des Ergebnisses in eine Gleitkommazahl. Mit [asm.js](/de/docs/Games/Tools/asm.js), das es JIT-Optimierern ermöglicht, Ganzzahlen in JavaScript zuverlässiger zu verwenden, könnte die Multiplikation zweier intern als Ganzzahlen gespeicherter Zahlen mit `imul()` jedoch leistungsfähiger sein. Eine solche interne Speicherung ist nur mit asm.js möglich.

## Beispiele

### Math.imul() verwenden

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

- [Polyfill für `Math.imul` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.imul` von es-shims](https://www.npmjs.com/package/math.imul)
- [Emscripten](https://en.wikipedia.org/wiki/Emscripten) auf Wikipedia
