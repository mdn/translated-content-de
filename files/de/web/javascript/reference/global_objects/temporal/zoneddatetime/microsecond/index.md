---
title: Temporal.ZonedDateTime.prototype.microsecond
short-title: microsecond
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/microsecond
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`microsecond`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.

Der set-Zugriff von `microsecond` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}.

## Beispiele

### Verwendung von microsecond

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.microsecond); // 456
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
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
