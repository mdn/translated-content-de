---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Math.imul()`** gibt das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der zwei Parameter zurück.

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

Das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der angegebenen Argumente.

## Beschreibung

`Math.imul()` ermöglicht 32-Bit-Integer-Multiplikation mit C-ähnlicher Semantik. Diese Funktion ist nützlich für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Da `imul()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.imul()` anstelle als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Wenn Sie normale JavaScript-Gleitkommazahlen in `imul()` verwenden, wird die Leistung beeinträchtigt. Dies liegt an der teuren Umwandlung von einer Gleitkommazahl in einen Integer zur Multiplikation und dann zurück von einem multiplizierten Integer in eine Gleitkommazahl. Mit [asm.js](/de/docs/Games/Tools/asm.js), das es JIT-Optimierern ermöglicht, Integer in JavaScript zuverlässiger zu nutzen, könnte das Multiplizieren von zwei Zahlen, die intern als Integer gespeichert sind (was nur mit asm.js möglich ist), mit `imul()` potenziell leistungsfähiger sein.

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
