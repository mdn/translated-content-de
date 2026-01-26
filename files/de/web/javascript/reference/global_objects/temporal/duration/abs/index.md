---
title: Temporal.Duration.prototype.abs()
short-title: abs()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/abs
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`abs()`** Methode von {{jsxref("Temporal.Duration")}} Instanzen gibt ein neues `Temporal.Duration` Objekt mit dem absoluten Wert dieser Dauer zurück (alle Felder haben die gleiche Größe, aber das Vorzeichen wird positiv).

## Syntax

```js-nolint
abs()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.Duration` Objekt mit dem absoluten Wert dieser Dauer, der entweder der gleiche wie diese Dauer ist, wenn sie bereits positiv ist, oder seine [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), wenn sie negativ ist.

## Beispiele

### Verwendung von abs()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.abs().toString()); // "PT1H30M"
console.log(d2.abs().toString()); // "PT1H30M"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
