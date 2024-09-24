---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`Math.imul()`** statische Methode gibt das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der beiden Parameter zurück.

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

Das Ergebnis der C-ähnlichen 32-Bit-Multiplikation der übergebenen Argumente.

## Beschreibung

`Math.imul()` ermöglicht die 32-Bit-Ganzzahlmultiplikation mit C-ähnlichen Semantiken. Diese Funktion ist nützlich für Projekte wie [Emscripten](https://en.wikipedia.org/wiki/Emscripten).

Da `imul()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.imul()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

Wenn Sie normale JavaScript-Float-Zahlen in `imul()` verwenden, werden Sie eine Verschlechterung der Leistung erfahren. Dies liegt an der aufwendigen Umwandlung von einer Gleitkommazahl zu einer Ganzzahl für die Multiplikation und dann an der Rückumwandlung der multiplizierten Ganzzahl in eine Gleitkommazahl. Jedoch könnte mit [asm.js](/de/docs/Games/Tools/asm.js), welches JIT-Optimierern erlaubt, effizienter Ganzzahlen in JavaScript zu verwenden, das Multiplizieren zweier intern gespeicherter Ganzzahlen (was nur mit asm.js möglich ist) mit `imul()` potenziell leistungsfähiger sein.

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
