---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die statische Methode **`Math.trunc()`** gibt den ganzzahligen Teil einer Zahl zurück, indem alle Nachkommastellen entfernt werden.

{{EmbedInteractiveExample("pages/js/math-trunc.html")}}

## Syntax

```js-nolint
Math.trunc(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der ganzzahlige Teil von `x`.

## Beschreibung

Die Funktionsweise von `Math.trunc()` ist einfacher als die der anderen drei `Math`-Methoden: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} und {{jsxref("Math.round()")}}; sie _schneidet_ den Punkt und die Ziffern rechts davon ab, unabhängig davon, ob das Argument eine positive oder negative Zahl ist.

Da `trunc()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.trunc()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.trunc()

```js
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

### Verwendung von bitweisen No-ops, um Zahlen zu kürzen

> [!WARNING]
> Dies ist kein Polyfill für `Math.trunc()` aufgrund nicht vernachlässigbarer Randfälle.

Bitweise Operationen konvertieren ihre Operanden in 32-Bit-Ganzzahlen, was historisch genutzt wurde, um Gleitkommazahlen zu kürzen. Häufige Techniken umfassen:

```js
const original = 3.14;
const truncated1 = ~~original; // Double negation
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0
```

Beachten Sie, dass dies im Wesentlichen `toInt32` ist, was nicht dasselbe wie `Math.trunc` ist. Wenn der Wert nicht -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648) erfüllt, würde die Konvertierung überlaufen.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Verwenden Sie `~~` nur als Ersatz für `Math.trunc()`, wenn Sie sicher sind, dass der Wertebereich innerhalb des Bereichs von 32-Bit-Ganzzahlen liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.trunc` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
