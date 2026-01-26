---
title: Temporal.Duration.prototype.blank
short-title: blank
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/blank
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`blank`** Accessor-Eigenschaft von {{jsxref("Temporal.Duration")}} Instanzen gibt einen booleschen Wert zurück, der `true` ist, wenn diese Dauer eine Null-Dauer darstellt, und `false` andernfalls. Es ist äquivalent zu `duration.sign === 0`.

## Beispiele

### Verwendung von blank

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.blank); // false
console.log(d2.blank); // false
console.log(d3.blank); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
