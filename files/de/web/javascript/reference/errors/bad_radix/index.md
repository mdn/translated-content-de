---
title: "RangeError: Radix muss eine ganze Zahl sein"
slug: Web/JavaScript/Reference/Errors/Bad_radix
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "radix muss eine ganze Zahl zwischen 2 und 36 sein"
tritt auf, wenn der optionale `radix`-Parameter der
{{jsxref("Number.prototype.toString()")}}- oder
der {{jsxref("BigInt.prototype.toString()")}}-Methode angegeben wird und nicht zwischen 2
und 36 liegt.

## Nachricht

```plain
RangeError: toString() radix argument must be between 2 and 36 (V8-based & Safari)
RangeError: radix must be an integer at least 2 and no greater than 36 (Firefox)
```

## Fehlerart

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Der optionale `radix`-Parameter der
{{jsxref("Number.prototype.toString()")}}- oder
der {{jsxref("BigInt.prototype.toString()")}}-Methode wurde angegeben. Sein Wert muss
eine ganze Zahl (eine Nummer) zwischen 2 und 36 sein, die die Basis des Zahlensystems
angibt, das zur Darstellung numerischer Werte verwendet werden soll. Zum Beispiel wird
die Dezimalzahl (Basis 10) 169 im Hexadezimalsystem (Basis 16) als A9 dargestellt.

Warum ist der Wert dieses Parameters auf 36 begrenzt? Eine Radix, die größer als 10 ist,
verwendet alphabetische Zeichen als Ziffern; daher kann die Radix nicht größer als 36
sein, da das lateinische Alphabet (verwendet von Englisch und vielen anderen
Sprachen) nur 26 Zeichen hat.

Die häufigsten Radices:

- 2 für [binäre Zahlen](https://en.wikipedia.org/wiki/Binary_number),
- 8 für [oktonale Zahlen](https://en.wikipedia.org/wiki/Octal),
- 10 für [dezimalen Zahlen](https://en.wikipedia.org/wiki/Decimal),
- 16 für [hexadezimale Zahlen](https://en.wikipedia.org/wiki/Hexadecimal).

## Beispiele

### Ungültige Fälle

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// Sie können keinen String wie diesen zur Formatierung verwenden:
(12071989).toString("MM-dd-yyyy");
```

### Gültige Fälle

```js example-good
(42).toString(2); // "101010" (binär)
(13).toString(8); // "15" (oktonal)
(0x42).toString(10); // "66" (dezimal)
(100000).toString(16); // "186a0" (hexadezimal)
```

## Siehe auch

- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("BigInt.prototype.toString()")}}
