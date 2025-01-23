---
title: Temporal.Duration.prototype.abs()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/abs
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`abs()`**-Methode der {{jsxref("Temporal.Duration")}}-Instanzen gibt ein neues `Temporal.Duration`-Objekt mit dem absoluten Wert dieser Dauer zurück (alle Felder haben die gleiche Größe, aber das Vorzeichen wird positiv).

## Syntax

```js-nolint
abs()
```

### Parameter

Keine.

### Rückgabewert

Ein neues `Temporal.Duration`-Objekt mit dem absoluten Wert dieser Dauer, das entweder mit dieser Dauer identisch ist, wenn sie bereits positiv ist, oder ihre [Negation](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated), wenn sie negativ ist.

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
