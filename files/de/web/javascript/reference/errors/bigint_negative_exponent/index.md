---
title: "RangeError: BigInt negativer Exponent"
slug: Web/JavaScript/Reference/Errors/BigInt_negative_exponent
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "BigInt negativer Exponent" tritt auf, wenn ein {{jsxref("BigInt")}} auf die Potenz eines negativen BigInt-Wertes erhöht wird.

## Meldung

```plain
RangeError: Exponent must be positive (V8-based)
RangeError: BigInt negative exponent (Firefox)
RangeError: Negative exponent is not allowed (Safari)
```

## Fehlerart

{{jsxref("RangeError")}}.

## Was ist schiefgelaufen?

Der Exponent einer [Potenzierung](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) muss positiv sein. Da negative Exponenten den Kehrwert der Basis nehmen würden, liegt das Ergebnis in fast allen Fällen zwischen -1 und 1, was auf `0n` gerundet wird. Um Fehler zu vermeiden, sind negative Exponenten nicht erlaubt. Überprüfen Sie, ob der Exponent nicht negativ ist, bevor Sie die Potenzierung durchführen.

## Beispiele

### Verwenden eines negativen BigInt als Exponent

```js example-bad
const a = 1n;
const b = -1n;
const c = a ** b;
// RangeError: BigInt negative exponent
```

Stattdessen überprüfen Sie zuerst, ob der Exponent negativ ist, und geben entweder eine Fehlermeldung mit besserem Hinweis aus oder greifen auf einen anderen Wert wie `0n` oder `undefined` zurück.

```js example-good
const a = 1n;
const b = -1n;
const quotient = b >= 0n ? a ** b : 0n;
```

## Siehe auch

- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
