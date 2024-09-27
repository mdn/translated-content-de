---
title: "RangeError: BigInt division durch null"
slug: Web/JavaScript/Reference/Errors/BigInt_division_by_zero
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "BigInt division durch null" tritt auf, wenn ein {{jsxref("BigInt")}} durch `0n` geteilt wird.

## Meldung

```plain
RangeError: Division by zero (V8-based)
RangeError: BigInt division by zero (Firefox)
RangeError: 0 is an invalid divisor value. (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Der Divisor eines [Divisionsoperators](/de/docs/Web/JavaScript/Reference/Operators/Division) oder [Restoperators](/de/docs/Web/JavaScript/Reference/Operators/Remainder) ist `0n`. In der {{jsxref("Number")}}-Arithmetik führt dies zu [`Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity), aber es gibt keinen "Unendlichkeitswert" in BigInts, daher wird ein Fehler ausgegeben. Überprüfen Sie, ob der Divisor `0n` ist, bevor Sie die Division durchführen.

## Beispiele

### Division durch 0n

```js example-bad
const a = 1n;
const b = 0n;
const quotient = a / b;
// RangeError: BigInt division by zero
```

Stattdessen sollten Sie zunächst überprüfen, ob der Divisor `0n` ist, und entweder einen Fehler mit einer besseren Nachricht ausgeben oder auf einen anderen Wert zurückfallen, wie `Infinity` oder `undefined`.

```js example-good
const a = 1n;
const b = 0n;
const quotient = b === 0n ? undefined : a / b;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
