---
title: "RangeError: Wiederholungsanzahl muss kleiner als unendlich sein"
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Wiederholungsanzahl muss kleiner als unendlich sein" tritt auf, wenn die
{{jsxref("String.prototype.repeat()")}}-Methode mit einem `count`-Argument verwendet wird, das unendlich ist.

## Nachricht

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

Die {{jsxref("String.prototype.repeat()")}}-Methode wurde verwendet. Sie verfügt über einen
`count`-Parameter, der die Anzahl der Wiederholungen des Strings angibt. Dieser muss zwischen 0 und kleiner als positive {{jsxref("Infinity")}} sein und darf keine negative Zahl sein. Der zulässige Wertebereich kann wie folgt beschrieben werden: \[0, +∞).

Der resultierende String darf auch nicht größer als die maximale Stringgröße sein, die in JavaScript-Engines variieren kann. In Firefox (SpiderMonkey) beträgt die maximale Stringgröße 2<sup>30</sup> - 2 (\~2GiB).

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
"abc".repeat(3.5); // 'abcabcabc' (count wird in eine Ganzzahl umgewandelt)
```

## Siehe auch

- {{jsxref("String.prototype.repeat()")}}
