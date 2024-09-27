---
title: Math.trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Math.trunc()`**-statische Methode gibt den ganzzahligen Teil einer Zahl zurück, indem alle Nachkommastellen entfernt werden.

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

Im Gegensatz zu den anderen drei `Math`-Methoden: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} und {{jsxref("Math.round()")}}, funktioniert `Math.trunc()` sehr einfach. Es _kürzt_ (schneidet ab) die Nachkommastellen und die Ziffern rechts davon, unabhängig davon, ob das Argument eine positive oder negative Zahl ist.

Da `trunc()` eine statische Methode von `Math` ist, wird sie immer als `Math.trunc()` verwendet und nicht als Methode eines erstellten `Math`-Objekts (da `Math` kein Konstruktor ist).

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

### Verwendung von bitweisen No-Ops zum Kürzen von Zahlen

> [!WARNING]
> Dies ist kein Polyfill für `Math.trunc()` aufgrund nicht unerheblicher Randfälle.

Bitweise Operationen konvertieren ihre Operanden in 32-Bit-Ganzzahlen, was historisch genutzt wurde, um Gleitkommazahlen zu kürzen. Zu den gängigen Techniken gehören:

```js
const original = 3.14;
const truncated1 = ~~original; // Double negation
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0
```

Beachten Sie, dass dies im Wesentlichen `toInt32` ist, was nicht dasselbe wie `Math.trunc` ist. Wenn der Wert nicht -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648) erfüllt, würde die Umwandlung überlaufen.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Verwenden Sie `~~` nur als Ersatz für `Math.trunc()`, wenn Sie sicher sind, dass der Eingabebereich innerhalb des Bereichs von 32-Bit-Ganzzahlen liegt.

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
