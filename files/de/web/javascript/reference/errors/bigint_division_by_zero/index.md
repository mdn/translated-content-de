---
title: "RangeError: BigInt division by zero"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "BigInt division by zero" tritt auf, wenn ein {{jsxref("BigInt")}} durch `0n` geteilt wird.

## Nachricht

```plain
RangeError: Division by zero (V8-based)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value. (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was schiefgelaufen ist

Der Divisor eines [Divisions-](/de/docs/Web/JavaScript/Reference/Operators/Division) oder [Rest-Operators](/de/docs/Web/JavaScript/Reference/Operators/Remainder) ist `0n`. In der {{jsxref("Number")}}-Arithmetik ergibt dies [`Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity), aber es gibt keinen "Unendlichkeitswert" in BigInts. Daher wird ein Fehler ausgegeben. Überprüfen Sie, ob der Divisor `0n` ist, bevor Sie die Division durchführen.

## Beispiele

### Division durch 0n

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

Überprüfen Sie stattdessen zuerst, ob der Divisor `0n` ist, und geben Sie entweder einen Fehler mit einer besseren Nachricht aus oder greifen Sie auf einen anderen Wert zurück, wie `Infinity` oder `undefined`.

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
