---
title: "RangeError: x kann nicht in BigInt umgewandelt werden, da es keine ganze Zahl ist"
slug: Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "x kann nicht in BigInt umgewandelt werden, da es keine ganze Zahl ist" tritt auf, wenn die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion auf eine Zahl angewendet wird, die keine ganze Zahl ist.

## Meldung

```plain
RangeError: Die Zahl 1.5 kann nicht in ein BigInt umgewandelt werden, da sie keine ganze Zahl ist (V8-basiert & Firefox)
RangeError: Keine ganze Zahl (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Wenn die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion verwendet wird, um eine Zahl in ein BigInt umzuwandeln, muss die Zahl eine ganze Zahl sein (d. h. [`Number.isInteger`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) gibt true zurück).

## Beispiele

### Ungültige Fälle

```js example-bad
const a = BigInt(1.5);
// RangeError: Die Zahl 1.5 kann nicht in ein BigInt umgewandelt werden, da sie keine ganze Zahl ist
const b = BigInt(NaN);
// RangeError: NaN kann nicht in ein BigInt umgewandelt werden, da es keine ganze Zahl ist
```

### Gültige Fälle

```js example-good
const a = BigInt(1);
```

## Siehe auch

- [`BigInt()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
