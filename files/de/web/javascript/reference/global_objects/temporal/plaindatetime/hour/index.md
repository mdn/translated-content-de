---
title: Temporal.PlainDateTime.prototype.hour
short-title: hour
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/hour
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`hour`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit repräsentiert.

Der Set-Accessor von `hour` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDateTime/with", "with()")}}-Methode, um ein neues `Temporal.PlainDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

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
