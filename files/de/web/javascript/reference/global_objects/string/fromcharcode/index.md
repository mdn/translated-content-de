---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

Die statische Methode **`String.fromCharCode()`** gibt einen String zurück, der aus der angegebenen Sequenz von UTF-16-Code-Einheiten erstellt wurde.

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html", "shorter")}}

## Syntax

```js-nolint
String.fromCharCode()
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, /* …, */ numN)
```

### Parameter

- `num1`, …, `numN`
  - : Eine Zahl zwischen `0` und `65535` (`0xFFFF`), die eine UTF-16-Code-Einheit darstellt. Zahlen größer als `0xFFFF` werden auf die letzten 16 Bits gekürzt. Es werden keine Gültigkeitsprüfungen durchgeführt.

### Rückgabewert

Ein String der Länge `N`, bestehend aus den `N` angegebenen UTF-16-Code-Einheiten.

## Beschreibung

Da `fromCharCode()` eine statische Methode von `String` ist, verwenden Sie sie immer als `String.fromCharCode()`, anstatt als Methode eines von Ihnen erstellten `String`-Werts.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). `charCodeAt()` gibt immer einen Wert zurück, der kleiner als `65536` ist, da die höheren Codepunkte durch _ein Paar_ aus 16-Bit-Surrogat-Pseudo-Zeichen dargestellt werden. Daher ist es notwendig, zwei Code-Einheiten anzugeben (als ob man einen String mit zwei Zeichen manipuliert), um ein vollständiges Zeichen mit einem Wert größer als `65535` zu erzeugen. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

Da `fromCharCode()` nur mit 16-Bit-Werten (wie die `\u` Escape-Sequenz) arbeitet, ist ein Surrogatpaar erforderlich, um ein zusätzliches Zeichen zurückzugeben. Zum Beispiel geben sowohl `String.fromCharCode(0xd83c, 0xdf03)` als auch `"\ud83c\udf03"` den Codepunkt `U+1F303` "Night with Stars" zurück. Während es eine mathematische Beziehung zwischen dem zusätzlichen Codepunktwert (z.B. `0x1f303`) und beiden Surrogatwerten gibt, die ihn darstellen (z.B. `0xd83c` und `0xdf03`), erfordert es dennoch einen zusätzlichen Schritt, um jedes Mal die Surrogatpaarwerte entweder zu berechnen oder nachzuschlagen, wenn ein zusätzlicher Codepunkt verwendet werden soll. Aus diesem Grund ist es bequemer, {{jsxref("String.fromCodePoint()")}} zu verwenden, die es erlaubt, zusätzliche Zeichen basierend auf ihrem tatsächlichen Codepunktwert zurückzugeben. Zum Beispiel gibt `String.fromCodePoint(0x1f303)` den Codepunkt `U+1F303` "Night with Stars" zurück.

## Beispiele

### Verwendung von fromCharCode()

BMP-Zeichen, in UTF-16, verwenden eine einzelne Code-Einheit:

```js
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014
```

Zusätzliche Zeichen, in UTF-16, erfordern zwei Code-Einheiten (d.h. ein Surrogatpaar):

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" === "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
