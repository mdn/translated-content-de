---
title: "RangeError: argument ist kein gültiger Codepunkt"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Ungültiger Codepunkt" tritt auf, wenn {{jsxref("NaN")}}-Werte, negative Ganzzahlen (-1), Nicht-Ganzzahlen (5.4) oder Werte größer als 0x10FFFF (1114111) mit {{jsxref("String.fromCodePoint()")}} verwendet werden.

## Nachricht

```plain
RangeError: Invalid code point -1 (V8-based)
RangeError: -1 is not a valid code point (Firefox)
RangeError: Arguments contain a value that is out of range of code points (Safari)
```

## Fehlerart

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

{{jsxref("String.fromCodePoint()")}} wirft diesen Fehler, wenn {{jsxref("NaN")}}-Werte, negative Ganzzahlen (-1), Nicht-Ganzzahlen (5.4) oder Werte größer als 0x10FFFF (1114111) übergeben werden.

Ein [Codepunkt](https://de.wikipedia.org/wiki/Codepoint) ist ein Wert im Unicode-Codespace; das ist der Bereich der ganzen Zahlen von `0` bis `0x10FFFF`.

## Beispiele

### Ungültige Fälle

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Gültige Fälle

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // 'Є' (U+0404)
String.fromCodePoint(0x2f804); // '你' (U+2F804)
String.fromCodePoint(194564); // '你'
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // '𝌆a𝌇'
```

## Siehe auch

- {{jsxref("String.fromCodePoint()")}}
