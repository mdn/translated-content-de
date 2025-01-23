---
title: Temporal.Duration.prototype.sign
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`sign`** Accessor-Eigenschaft von {{jsxref("Temporal.Duration")}}-Instanzen gibt `1` zurück, wenn diese Dauer positiv ist, `-1` wenn negativ, und `0` wenn null. Da [eine Dauer nie gemischte Vorzeichen hat](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_sign), wird das Vorzeichen einer Dauer durch das Vorzeichen eines ihrer nicht-null Felder bestimmt.

## Beispiele

### Verwendung von sign

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.sign); // 1
console.log(d2.sign); // -1
console.log(d3.sign); // 0

console.log(d1.abs().sign); // 1
console.log(d2.abs().sign); // 1
console.log(d3.abs().sign); // 0

console.log(d1.negated().sign); // -1
console.log(d2.negated().sign); // 1
console.log(d3.negated().sign); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
