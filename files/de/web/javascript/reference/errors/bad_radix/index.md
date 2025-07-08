---
title: "RangeError: radix must be an integer"
slug: Web/JavaScript/Reference/Errors/Bad_radix
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "radix must be an integer at least 2 and no greater than 36"
tritt auf, wenn der optionale `radix`-Parameter der
{{jsxref("Number.prototype.toString()")}}- oder
der {{jsxref("BigInt.prototype.toString()")}}-Methode angegeben wurde und dieser nicht
zwischen 2 und 36 liegt.

## Meldung

```plain
RangeError: toString() radix argument must be between 2 and 36 (V8-based & Safari)
RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
```

## Fehlerart

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Der optionale `radix`-Parameter der
{{jsxref("Number.prototype.toString()")}}- oder der
{{jsxref("BigInt.prototype.toString()")}}-Methode wurde angegeben. Sein Wert muss eine
Ganzzahl (eine Zahl) zwischen 2 und 36 sein, die die Basis des Zahlensystems angibt,
das zur Darstellung numerischer Werte verwendet werden soll. Zum Beispiel wird die
dezimale (Basis 10) Zahl 169 im hexadezimalen (Basis 16) System als A9 dargestellt.

Warum ist der Wert dieses Parameters auf 36 begrenzt? Eine Basis, die größer als 10 ist,
verwendet alphabetische Zeichen als Ziffern; daher kann die Basis nicht größer als 36
sein, da das lateinische Alphabet (das im Englischen und vielen anderen Sprachen verwendet
wird) nur 26 Buchstaben enthält.

Die gebräuchlichsten Basen:

- 2 für [binäre Zahlen](https://en.wikipedia.org/wiki/Binary_number),
- 8 für [oktale Zahlen](https://en.wikipedia.org/wiki/Octal),
- 10 für [dezimale Zahlen](https://en.wikipedia.org/wiki/Decimal),
- 16 für [hexadezimale Zahlen](https://en.wikipedia.org/wiki/Hexadecimal).

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
