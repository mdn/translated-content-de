---
title: "RangeError: repeat count must be less than infinity"
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "repeat count must be less than infinity" tritt auf, wenn die Methode {{jsxref("String.prototype.repeat()")}} mit einem `count`-Argument verwendet wird, das unendlich ist.

## Meldung

```plain
RangeError: Invalid string length (V8-based)
RangeError: Invalid count value: Infinity (V8-based)
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)
RangeError: Out of memory (Safari)
RangeError: String.prototype.repeat argument must be greater than or equal to 0 and not be Infinity (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Die Methode {{jsxref("String.prototype.repeat()")}} wurde verwendet. Sie hat einen `count`-Parameter, der die Anzahl der Wiederholungen des Strings angibt. Dieser muss zwischen 0 und weniger als positiver {{jsxref("Infinity")}} liegen und darf keine negative Zahl sein. Der Bereich der zulässigen Werte kann so beschrieben werden: \[0, +∞).

Der resultierende String darf außerdem nicht größer als die maximale Stringgröße sein, die in JavaScript-Engines variieren kann. In Firefox (SpiderMonkey) beträgt die maximale Stringgröße 2<sup>30</sup> - 2 (\~2GiB).

## Beispiele

### Ungültige Fälle

```js example-bad
"abc".repeat(Infinity); // RangeError
"a".repeat(2 ** 30); // RangeError
```

### Gültige Fälle

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
```

## Siehe auch

- {{jsxref("String.prototype.repeat()")}}
