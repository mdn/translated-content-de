---
title: "TypeError: BigInt kann nicht in eine number konvertiert werden"
slug: Web/JavaScript/Reference/Errors/Cant_convert_BigInt_to_number
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „BigInt kann nicht in eine number konvertiert werden“ tritt auf, wenn eine arithmetische Operation eine Mischung aus {{jsxref("BigInt")}} und {{jsxref("Number")}} Werten beinhaltet.

## Meldung

```plain
TypeError: Cannot convert a BigInt value to a number (V8-based)
TypeError: Cannot mix BigInt and other types, use explicit conversions (V8-based)
TypeError: BigInts have no unsigned right shift, use >> instead (V8-based)
TypeError: can't convert BigInt to number (Firefox)
TypeError: Conversion from 'BigInt' to 'number' is not allowed. (Safari)
TypeError: Invalid mix of BigInt and other type in addition/multiplication/…. (Safari)
TypeError: BigInt does not support >>> operator (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist schiefgelaufen?

Die beiden Seiten eines arithmetischen Operators müssen entweder beide BigInts oder beide nicht-BigInts sein. Wenn eine Operation eine Mischung aus BigInts und numbers beinhaltet, ist es unklar, ob das Ergebnis ein BigInt oder eine number sein sollte, da in beiden Fällen Präzisionsverlust auftreten kann.

Der Fehler tritt auch auf, wenn ein BigInt implizit durch den [number-Zwangsprozess](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) in eine number konvertiert wird. Zum Beispiel, wenn ein BigInt an eine eingebaute Methode übergeben wird, die eine number erwartet.

Der Fehler kann auch auftreten, wenn der [unsigned right shift Operator (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) zwischen zwei BigInts verwendet wird. In Firefox bleibt die Meldung dieselbe: „BigInt kann nicht in eine number konvertiert werden“.

## Beispiele

### Mischen von numbers und BigInts in Operationen

```js example-bad
const sum = 1n + 1;
// TypeError: can't convert BigInt to number
```

Stattdessen explizit eine Seite zu einem BigInt oder einer number umwandeln.

```js example-good
const sum = 1n + BigInt(1);
const sum2 = Number(1n) + 1;
```

### Verwendung des unsigned right shift bei BigInts

```js example-bad
const a = 4n >>> 2n;
// TypeError: can't convert BigInt to number
```

Stattdessen den normalen Rechts-Shift verwenden.

```js example-good
const a = 4n >> 2n;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
