---
title: "TypeError: kann BigInt nicht in number umwandeln"
slug: Web/JavaScript/Reference/Errors/Cant_convert_BigInt_to_number
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "kann BigInt nicht in number umwandeln" tritt auf, wenn eine arithmetische Operation eine Mischung aus {{jsxref("BigInt")}} und {{jsxref("Number")}} Werten enthält.

## Nachricht

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

Die beiden Operanden eines arithmetischen Operators müssen entweder beide BigInts oder beide keine BigInts sein. Wenn eine Operation eine Mischung aus BigInts und Zahlen beinhaltet, ist es unklar, ob das Ergebnis ein BigInt oder eine Zahl sein soll, da in beiden Fällen Präzisionsverluste auftreten können.

Der Fehler tritt auch auf, wenn ein BigInt implizit durch den [number coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)-Prozess in eine Zahl umgewandelt wird. Beispielsweise, wenn ein BigInt in eine eingebaute Methode übergeben wird, die eine Zahl erwartet.

Der Fehler kann auch auftreten, wenn der [Unsigned Right Shift-Operator (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) zwischen zwei BigInts verwendet wird. In Firefox ist die Nachricht dieselbe: "kann BigInt nicht in number umwandeln".

## Beispiele

### Mischung von Zahlen und BigInts in Operationen

```js example-bad
const sum = 1n + 1;
// TypeError: can't convert BigInt to number
```

Stattdessen explizit eine Seite zu einem BigInt oder einer Zahl umwandeln.

```js example-good
const sum = 1n + BigInt(1);
const sum2 = Number(1n) + 1;
```

### Verwendung des Unsigned Right Shifts bei BigInts

```js example-bad
const a = 4n >>> 2n;
// TypeError: can't convert BigInt to number
```

Verwenden Sie stattdessen den normalen Right Shift.

```js example-good
const a = 4n >> 2n;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
