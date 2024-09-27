---
title: "RangeError: BigInt negative exponent"
slug: Web/JavaScript/Reference/Errors/BigInt_negative_exponent
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "BigInt negative exponent" tritt auf, wenn ein {{jsxref("BigInt")}} mit einem negativen BigInt-Wert potenziert wird.

## Meldung

```plain
RangeError: Exponent must be positive (V8-based)
RangeError: BigInt negative exponent (Firefox)
RangeError: Negative exponent is not allowed (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Der Exponent einer [Potenzierungsoperation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) muss positiv sein. Da negative Exponenten den Kehrwert der Basis nehmen würden, liegt das Ergebnis in fast allen Fällen zwischen -1 und 1, was auf `0n` gerundet wird. Um Fehler zu vermeiden, sind negative Exponenten nicht erlaubt. Überprüfen Sie, ob der Exponent nicht negativ ist, bevor Sie die Potenzierung durchführen.

## Beispiele

### Verwendung eines negativen BigInt als Exponent

```js example-bad
const a = 1n;
const b = -1n;
const c = a ** b;
// RangeError: BigInt negative exponent
```

Stattdessen sollten Sie zuerst prüfen, ob der Exponent negativ ist und entweder einen Fehler mit einer besseren Nachricht ausgeben oder auf einen anderen Wert, wie `0n` oder `undefined`, zurückgreifen.

```js example-good
const a = 1n;
const b = -1n;
const quotient = b >= 0n ? a ** b : 0n;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
