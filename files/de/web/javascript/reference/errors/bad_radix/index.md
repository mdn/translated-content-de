---
title: "RangeError: radix muss eine Ganzzahl sein"
slug: Web/JavaScript/Reference/Errors/Bad_radix
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „radix muss eine Ganzzahl zwischen 2 und 36 sein“ tritt auf, wenn der optionale `radix`-Parameter der Methode {{jsxref("Number.prototype.toString()")}} oder {{jsxref("BigInt.prototype.toString()")}} angegeben ist und nicht zwischen 2 und 36 liegt.

## Meldung

```plain
RangeError: toString() radix argument must be between 2 and 36 (V8-based & Safari)
RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Der optionale `radix`-Parameter der Methode {{jsxref("Number.prototype.toString()")}} oder {{jsxref("BigInt.prototype.toString()")}} wurde angegeben. Sein Wert muss eine Ganzzahl (eine Zahl) zwischen 2 und 36 sein, die die Basis des Zahlensystems angibt, das zur Darstellung numerischer Werte verwendet wird. Zum Beispiel wird die dezimale (Basis 10) Zahl 169 im Hexadezimalsystem (Basis 16) als A9 dargestellt.

Warum ist der Wert dieses Parameters auf 36 begrenzt? Eine Basis größer als 10 verwendet Buchstaben als Ziffern; daher kann die Basis nicht größer als 36 sein, da das lateinische Alphabet (das in Englisch und vielen anderen Sprachen verwendet wird) nur 26 Zeichen hat.

Die häufigsten Basen:

- 2 für [Binärzahlen](https://de.wikipedia.org/wiki/Bin%C3%A4rzahl),
- 8 für [Oktalzahlen](https://de.wikipedia.org/wiki/Oktalsystem),
- 10 für [Dezimalzahlen](https://de.wikipedia.org/wiki/Dezimalsystem),
- 16 für [Hexadezimalzahlen](https://de.wikipedia.org/wiki/Hexadezimalsystem).

## Beispiele

### Ungültige Fälle

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// You cannot use a string like this for formatting:
(12071989).toString("MM-dd-yyyy");
```

### Gültige Fälle

```js example-good
(42).toString(2); // "101010" (binary)
(13).toString(8); // "15" (octal)
(0x42).toString(10); // "66" (decimal)
(100000).toString(16); // "186a0" (hexadecimal)
```

## Siehe auch

- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("BigInt.prototype.toString()")}}
