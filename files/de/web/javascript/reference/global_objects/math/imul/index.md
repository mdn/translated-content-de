---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Math.imul()`** gibt das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Parameter zurück.

{{EmbedInteractiveExample("pages/js/math-imul.html")}}

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

`Math.imul()` ermöglicht die 32-Bit-Ganzzahlmultiplikation mit C-ähnlicher Semantik. Dieses Feature ist nützlich für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Da `imul()` eine statische Methode von `Math` ist, wird sie immer als `Math.imul()` verwendet und nicht als Methode eines selbst erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Wenn Sie normale JavaScript-Floating-Point-Zahlen in `imul()` verwenden, kommt es zu einer Leistungsverschlechterung. Dies liegt an der aufwendigen Konvertierung von einer Gleitkommazahl zu einer Ganzzahl für die Multiplikation und dann der Rückkonvertierung der multiplizierten Ganzzahl in eine Gleitkommazahl. Allerdings kann mit [asm.js](/de/docs/Games/Tools/asm.js), das es JIT-Optimierern ermöglicht, Ganzzahlen in JavaScript sicherer zu verwenden, das Multiplizieren von zwei intern als Ganzzahlen gespeicherten Zahlen (was nur mit asm.js möglich ist) mit `imul()` potenziell leistungsfähiger sein.

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
