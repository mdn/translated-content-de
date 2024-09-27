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
  - : Eine ganze Zahl zwischen `0` und `0x10FFFF` (einschließlich), die einen Unicode-Codepunkt darstellt.

### Rückgabewert

Ein String, der mit der angegebenen Sequenz von Codepunkten erstellt wurde.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `numN` keine ganze Zahl ist, kleiner als `0` ist oder größer als `0x10FFFF`, nachdem sie in eine Zahl umgewandelt wurde.

## Beschreibung

Da `fromCodePoint()` eine statische Methode von `String` ist, verwenden Sie sie immer als `String.fromCodePoint()` und nicht als Methode eines `String`-Wertes, den Sie erstellt haben.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jedes String-Index ein Code-Einheit mit dem Wert `0` – `65535`. Höhere Code-Punkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt. Daher kann `fromCodePoint()` einen String zurückgeben, dessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) (in UTF-16 Code-Einheiten) größer ist als die Anzahl der übergebenen Argumente. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

{{jsxref("String.fromCharCode()")}} kann keine zusätzlichen Zeichen (d.h. Code-Punkte `0x010000` – `0x10FFFF`) zurückgeben, indem deren Codepunkt angegeben wird. Stattdessen erfordert es das UTF-16-Surrogatpaar, um ein zusätzliches Zeichen zurückzugeben:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"
```

`String.fromCodePoint()` hingegen kann 4-Byte-Zusatzzeichen sowie die gebräuchlicheren 2-Byte-BMP-Zeichen zurückgeben, indem deren Codepunkt angegeben wird (was der UTF-32-Codeeinheit entspricht):

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
