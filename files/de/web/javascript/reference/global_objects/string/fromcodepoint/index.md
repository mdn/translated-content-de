---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die statische Methode **`String.fromCodePoint()`** gibt einen String zurück, der aus der angegebenen Sequenz von Codepunkten erstellt wurde.

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html", "shorter")}}

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

Ein String, der mit der angegebenen Sequenz von Codepunkten erstellt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `numN` keine Ganzzahl ist, kleiner als `0` ist oder größer als `0x10FFFF`, nachdem es in eine Zahl konvertiert wurde.

## Beschreibung

Da `fromCodePoint()` eine statische Methode von `String` ist, verwenden Sie sie immer als `String.fromCodePoint()` und nicht als Methode eines von Ihnen erstellten `String`-Wertes.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Code-Einheit mit dem Wert `0` – `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudozahlenzeichen dargestellt. Daher kann `fromCodePoint()` einen String zurückgeben, dessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) (in UTF-16-Codeeinheiten) größer ist als die Anzahl der übergebenen Argumente. Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

### Im Vergleich zu fromCharCode()

{{jsxref("String.fromCharCode()")}} kann keine Supplementärzeichen (d.h. Codepunkte `0x010000` – `0x10FFFF`) durch Angabe ihres Codepunktes zurückgeben. Stattdessen erfordert es das UTF-16-Surrogatpaar, um ein Supplementärzeichen zurückzugeben:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

`String.fromCodePoint()` hingegen kann 4-Byte-Supplementärzeichen sowie die gebräuchlicheren 2-Byte-BMP-Zeichen durch Angabe ihres Codepunktes zurückgeben (was einer UTF-32-Codeeinheit entspricht):

```js
String.fromCodePoint(0x1f303); // oder 127747 in Dezimal
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
