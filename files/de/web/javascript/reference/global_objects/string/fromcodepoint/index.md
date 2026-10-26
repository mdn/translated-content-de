---
title: String.fromCodePoint()
short-title: fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`String.fromCodePoint()`** gibt einen String zurück, der aus der angegebenen Folge von Codepunkten erstellt wird.

{{InteractiveExample("JavaScript Demo: String.fromCodePoint()", "shorter")}}

```js interactive-example
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"
```

## Syntax

```js-nolint
String.fromCodePoint()
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### Parameter

- `num1`, …, `numN`
  - : Eine Ganzzahl zwischen `0` und `0x10FFFF` (einschließlich), die einen Unicode-Codepunkt darstellt.

### Rückgabewert

Ein String, der aus der angegebenen Folge von Codepunkten erstellt wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `numN` nach der Umwandlung in eine Zahl keine Ganzzahl ist, kleiner als `0` oder größer als `0x10FFFF` ist.

## Beschreibung

Da `fromCodePoint()` eine statische Methode von `String` ist, verwenden Sie sie immer als `String.fromCodePoint()` und nicht als Methode eines von Ihnen erstellten `String`-Werts.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 entspricht jeder String-Index einer Codeeinheit mit einem Wert von `0` bis `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudozeichen dargestellt. Daher kann `fromCodePoint()` einen String zurückgeben, dessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) (in UTF-16-Codeeinheiten) größer ist als die Anzahl der übergebenen Argumente. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### Verwendung von fromCodePoint()

Gültige Eingabe:

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

Ungültige Eingabe:

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Vergleich mit fromCharCode()

{{jsxref("String.fromCharCode()")}} kann ergänzende Zeichen (d.h. Codepunkte von `0x010000` bis `0x10FFFF`) nicht zurückgeben, wenn ihr Codepunkt angegeben wird. Stattdessen muss das UTF-16-Surrogatpaar angegeben werden, um ein ergänzendes Zeichen zurückzugeben:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

`String.fromCodePoint()` hingegen kann sowohl ergänzende 4-Byte-Zeichen als auch die gebräuchlicheren 2-Byte-BMP-Zeichen zurückgeben, indem ihr Codepunkt angegeben wird (der der UTF-32-Codeeinheit entspricht):

```js
String.fromCodePoint(0x1f303); // or 127747 in decimal
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.fromCodePoint` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.fromCodePoint` von es-shims](https://www.npmjs.com/package/string.fromcodepoint)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
