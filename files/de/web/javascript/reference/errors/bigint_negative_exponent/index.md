---
title: "RangeError: BigInt negative exponent"
slug: Web/JavaScript/Reference/Errors/BigInt_negative_exponent
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Der JavaScript-Ausnahmefehler "BigInt negativer Exponent" tritt auf, wenn ein {{jsxref("BigInt")}} auf die Potenz eines negativen BigInt-Wertes erhöht wird.

## Nachricht

```plain
RangeError: Exponent must be positive (V8-based)
RangeError: BigInt negative exponent (Firefox)
RangeError: Negative exponent is not allowed (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Der Exponent einer [Potenzierung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) muss positiv sein. Da negative Exponenten den Kehrwert der Basis nehmen würden, liegt das Ergebnis in fast allen Fällen zwischen -1 und 1, was auf `0n` gerundet wird. Um Fehler zu vermeiden, sind negative Exponenten nicht erlaubt. Stellen Sie sicher, dass der Exponent vor der Potenzierung nicht negativ ist.

## Beispiele

### Verwendung eines negativen BigInt als Exponent

```js example-bad
const a = 1n;
const b = -1n;
const c = a ** b;
// RangeError: BigInt negative exponent
```

Stattdessen sollten Sie zunächst prüfen, ob der Exponent negativ ist, und entweder eine Fehlermeldung mit einer besseren Nachricht ausgeben oder auf einen anderen Wert zurückfallen, wie `0n` oder `undefined`.

```js example-good
const a = 1n;
const b = -1n;
const quotient = b >= 0n ? a ** b : 0n;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
