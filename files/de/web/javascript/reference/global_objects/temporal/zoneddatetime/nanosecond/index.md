---
title: Temporal.ZonedDateTime.prototype.nanosecond
short-title: nanosecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/nanosecond
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`nanosecond`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.

Der Setter der Eigenschaft `nanosecond` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/with", "with()")}}, um ein neues `Temporal.ZonedDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}.

## Beispiele

### Verwendung von nanosecond

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.nanosecond); // 789
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
