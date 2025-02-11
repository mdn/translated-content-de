---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`String.fromCodePoint()`** statische Methode gibt einen String zurück, der aus der angegebenen Sequenz von Codepunkten erstellt wurde.

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
  - : Eine Ganzzahl zwischen `0` und `0x10FFFF` (einschließlich), die einen Unicode-Codepunkt repräsentiert.

### Rückgabewert

Ein String, der durch die angegebene Sequenz von Codepunkten erstellt wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `numN` keine Ganzzahl ist, kleiner als `0` ist oder größer als `0x10FFFF`, nachdem sie in eine Zahl umgewandelt wurde.

## Beschreibung

Da `fromCodePoint()` eine statische Methode von `String` ist, wird sie immer als `String.fromCodePoint()` verwendet, und nicht als Methode eines erzeugten `String`-Wertes.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Codeeinheit mit einem Wert zwischen `0` und `65535`. Höhere Codepunkte werden durch _ein Paar_ 16-Bit-Surrogat-Pseudoz'eichen dargestellt. Daher kann `fromCodePoint()` einen String zurückgeben, dessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) (in UTF-16-Codeeinheiten) größer ist als die Anzahl der übergebenen Argumente. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### Verwendung von fromCodePoint()

Gültige Eingaben:

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

Ungültige Eingaben:

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Vergleich zu fromCharCode()

{{jsxref("String.fromCharCode()")}}) kann keine ergänzenden Zeichen (d.h. Codepunkte `0x010000` – `0x10FFFF`) zurückgeben, indem deren Codepunkt angegeben wird. Stattdessen erfordert es das UTF-16-Surrogatpaar, um ein ergänzendes Zeichen zurückzugeben:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

`String.fromCodePoint()` hingegen kann 4-Byte zusätzliche Zeichen sowie häufigere 2-Byte-BMP-Zeichen zurückgeben, indem deren Codepunkt angegeben wird (dies entspricht der UTF-32-Codeeinheit):

```js
String.fromCodePoint(0x1f303); // or 127747 in decimal
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.fromCodePoint` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
