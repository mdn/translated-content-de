---
title: Math.trunc()
short-title: trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.trunc()`** gibt den ganzzahligen Teil einer Zahl zurück, indem sie alle Nachkommastellen entfernt.

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

Der ganzzahlige Teil von `x`.

## Beschreibung

Die Funktionsweise von `Math.trunc()` ist einfacher als die der anderen drei `Math`-Methoden {{jsxref("Math.floor()")}}, {{jsxref("Math.ceil()")}} und {{jsxref("Math.round()")}}: Die Methode _schneidet_ den Dezimalpunkt und die rechts davon stehenden Ziffern ab, unabhängig davon, ob das Argument eine positive oder negative Zahl ist.

Da `trunc()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.trunc()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.trunc() verwenden

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

### Zahlen mit bitweisen No-Op-Operationen abschneiden

> [!WARNING]
> Dies ist kein Polyfill für `Math.trunc()`, da es relevante Grenzfälle gibt.

Bitweise Operationen wandeln ihre Operanden in 32-Bit-Ganzzahlen um. Dies wurde in der Vergangenheit genutzt, um Gleitkommazahlen abzuschneiden. Häufig verwendete Techniken sind:

```js
const original = 3.14;
const truncated1 = ~~original; // Double negation
const truncated2 = original & -1; // Bitwise AND with -1
const truncated3 = original | 0; // Bitwise OR with 0
const truncated4 = original ^ 0; // Bitwise XOR with 0
const truncated5 = original >> 0; // Bitwise shifting by 0
```

Beachten Sie, dass dies im Wesentlichen `toInt32` entspricht und nicht mit `Math.trunc` identisch ist. Wenn der Wert nicht die Bedingung -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648) erfüllt, führt die Umwandlung zu einem Überlauf.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Verwenden Sie `~~` nur dann als Ersatz für `Math.trunc()`, wenn Sie sicher sind, dass die Eingabewerte im Bereich der 32-Bit-Ganzzahlen liegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.trunc` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
