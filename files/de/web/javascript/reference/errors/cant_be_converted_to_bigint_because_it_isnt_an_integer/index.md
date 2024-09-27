---
title: "RangeError: x kann nicht zu BigInt konvertiert werden, da es keine ganze Zahl ist"
slug: Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "x kann nicht zu BigInt konvertiert werden, da es keine ganze Zahl ist" tritt auf, wenn die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion auf eine Zahl angewendet wird, die keine ganze Zahl ist.

## Meldung

```plain
RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer (V8-based & Firefox)
RangeError: Not an integer (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Beim Verwenden der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion zur Umwandlung einer Zahl in ein BigInt muss die Zahl eine ganze Zahl sein (sodass [`Number.isInteger`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) wahr zurückgibt).

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

- [`BigInt()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
