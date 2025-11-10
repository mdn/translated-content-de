---
title: Math.trunc()
short-title: trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Math.trunc()`** gibt den Ganzzahlanteil einer Zahl zurück, indem alle Nachkommastellen entfernt werden.

{{InteractiveExample("JavaScript Demo: Math.trunc()")}}

```js interactive-example
console.log(Math.trunc(13.37));
// Expected output: 13

console.log(Math.trunc(42.84));
// Expected output: 42

console.log(Math.trunc(0.123));
// Expected output: 0

console.log(Math.trunc(-0.123));
// Expected output: -0
```

## Syntax

```js-nolint
Math.trunc(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der Ganzzahlanteil von `x`.

## Beschreibung

Die Funktionsweise von `Math.trunc()` ist einfacher als die der anderen drei `Math`-Methoden: {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} und {{jsxref("Math.round()")}}; sie _kürzt ab_ (schneidet den Punkt und die Ziffern rechts davon ab), unabhängig davon, ob das Argument eine positive oder negative Zahl ist.

Da `trunc()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.trunc()`, anstatt als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

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

### Verwendung von bitweise No-Ops zum Kürzen von Zahlen

> [!WARNING]
> Dies ist aufgrund nicht vernachlässigbarer Randfälle kein Polyfill für `Math.trunc()`.

Bitweise Operationen konvertieren ihre Operanden in 32-Bit-Ganzzahlen, was historisch genutzt wurde, um Gleitkommazahlen zu kürzen. Zu den gängigen Techniken gehören:

```js
const original = 3.14;
const truncated1 = ~~original; // Double negation
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0
```

Seien Sie sich bewusst, dass dies im Wesentlichen `toInt32` ist, was nicht dasselbe wie `Math.trunc` ist. Wenn der Wert die Bedingung -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648) nicht erfüllt, würde die Umwandlung überlaufen.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Verwenden Sie `~~` nur als Ersatz für `Math.trunc()`, wenn Sie sicher sind, dass der Eingabebereich innerhalb des Bereichs der 32-Bit-Ganzzahlen liegt.

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
