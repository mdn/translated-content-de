---
title: Temporal.PlainDateTime.prototype.hour
short-title: hour
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/hour
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`hour`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.

Der Set-Zugriff der `hour` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDateTime/with", "with()")}} Methode, um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}.

## Beispiele

### Verwendung von hour

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.hour); // 12
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
