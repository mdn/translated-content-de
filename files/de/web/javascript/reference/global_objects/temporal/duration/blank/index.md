---
title: Temporal.Duration.prototype.blank
short-title: blank
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/blank
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`blank`** Zugriffsproperty von {{jsxref("Temporal.Duration")}} Instanzen gibt einen booleschen Wert zurück, der `true` ist, wenn die Dauer eine Null-Dauer darstellt, und `false` sonst. Sie ist äquivalent zu `duration.sign === 0`.

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
