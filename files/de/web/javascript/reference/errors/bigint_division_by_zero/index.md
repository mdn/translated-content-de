---
title: "RangeError: BigInt division by zero"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Die JavaScript-Ausnahme "BigInt division by zero" tritt auf, wenn ein {{jsxref("BigInt")}} durch `0n` geteilt wird.

## Meldung

```plain
RangeError: Division by zero (V8-based)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value. (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Der Divisor eines [Division](/de/docs/Web/JavaScript/Reference/Operators/Division)- oder [Remainder](/de/docs/Web/JavaScript/Reference/Operators/Remainder)-Operators ist `0n`. In der {{jsxref("Number")}}-Arithmetik ergibt dies [`Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity), aber es gibt keinen "Unendlichkeitswert" in BigInts, daher wird ein Fehler ausgegeben. Prüfen Sie, ob der Divisor `0n` ist, bevor Sie die Division vornehmen.

## Beispiele

### Division durch 0n

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

Prüfen Sie stattdessen zuerst, ob der Divisor `0n` ist, und geben Sie entweder eine Fehlermeldung mit einer besseren Nachricht aus, oder greifen Sie auf einen anderen Wert wie `Infinity` oder `undefined` zurück.

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Remainder (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
