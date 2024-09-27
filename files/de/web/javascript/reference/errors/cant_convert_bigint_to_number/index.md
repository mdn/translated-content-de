---
title: "TypeError: kann BigInt nicht in number konvertieren"
slug: Web/JavaScript/Reference/Errors/Cant_convert_BigInt_to_number
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "can't convert BigInt to number" tritt auf, wenn eine arithmetische Operation eine Mischung aus {{jsxref("BigInt")}} und {{jsxref("Number")}} Werten umfasst.

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

## Fehlerart

{{jsxref("TypeError")}}.

## Was ging schief?

Die beiden Seiten eines arithmetischen Operators müssen entweder beide BigInts oder beide nicht sein. Wenn eine Operation eine Mischung aus BigInts und Zahlen umfasst, ist es nicht eindeutig, ob das Ergebnis ein BigInt oder eine Zahl sein sollte, da in beiden Fällen ein Präzisionsverlust auftreten kann.

Der Fehler tritt auch auf, wenn ein BigInt implizit über den [number coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) Prozess in eine Zahl umgewandelt wird. Dies kann zum Beispiel passieren, wenn ein BigInt an eine eingebaute Methode übergeben wird, die eine Zahl erwartet.

Der Fehler kann auch auftreten, wenn der [unsigned right shift operator (`>>>`)](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) zwischen zwei BigInts verwendet wird. In Firefox ist die Fehlermeldung dieselbe: "can't convert BigInt to number".

## Beispiele

### Mischen von Zahlen und BigInts in Operationen

```js example-bad
const sum = 1n + 1;
// TypeError: can't convert BigInt to number
```

Stattdessen sollte eine Seite explizit in einen BigInt oder eine Zahl umgewandelt werden.

```js example-good
const sum = 1n + BigInt(1);
const sum2 = Number(1n) + 1;
```

### Verwendung des unsigned right shift bei BigInts

```js example-bad
const a = 4n >>> 2n;
// TypeError: can't convert BigInt to number
```

Verwenden Sie stattdessen normalen Rechtsschieben.

```js example-good
const a = 4n >> 2n;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
