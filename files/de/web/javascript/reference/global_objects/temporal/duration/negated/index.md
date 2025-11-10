---
title: Temporal.Duration.prototype.negated()
short-title: negated()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`negated()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration`-Objekt mit dem negierten Wert dieser Dauer zurück (alle Felder behalten die gleiche Größe, aber das Vorzeichen wird umgekehrt).

## Syntax

```js-nolint
negated()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt, bei dem alle Felder die gleiche Größe wie diese Dauer haben, aber das Vorzeichen umgekehrt ist (positive Felder werden negativ und umgekehrt).

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
