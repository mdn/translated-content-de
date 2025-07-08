---
title: "RangeError: x kann nicht in BigInt konvertiert werden, da es keine ganze Zahl ist"
slug: Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "x kann nicht in BigInt konvertiert werden, da es keine ganze Zahl ist" tritt auf, wenn die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion auf eine Zahl angewendet wird, die keine ganze Zahl ist.

## Meldung

```plain
RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer (V8-based & Firefox)
RangeError: Not an integer (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Bei der Verwendung der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion zur Umwandlung einer Zahl in einen BigInt muss die Zahl eine ganze Zahl sein (sodass [`Number.isInteger`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) true zurückgibt).

## Beispiele

### Ungültige Fälle

```js example-bad
const a = BigInt(1.5);
// RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer
const b = BigInt(NaN);
// RangeError: NaN cannot be converted to a BigInt because it is not an integer
```

### Gültige Fälle

```js example-good
const a = BigInt(1);
```

## Siehe auch

- [`BigInt()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
