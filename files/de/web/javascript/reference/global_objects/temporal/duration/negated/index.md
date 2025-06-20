---
title: Temporal.Duration.prototype.negated()
short-title: negated()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`negated()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt zurück, das den negierten Wert dieser Dauer enthält (alle Felder behalten den gleichen Betrag, aber das Vorzeichen wird umgekehrt).

## Syntax

```js-nolint
negated()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt, bei dem alle Felder den gleichen Betrag wie diese Dauer haben, jedoch das Vorzeichen umgekehrt ist (positive Felder werden negativ und umgekehrt).

## Beispiele

### Verwendung von negated()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.negated().toString()); // "-PT1H30M"
console.log(d2.negated().toString()); // "PT1H30M"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
