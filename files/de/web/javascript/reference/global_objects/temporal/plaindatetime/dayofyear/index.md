---
title: Temporal.PlainDateTime.prototype.dayOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/dayOfYear
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`dayOfYear`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist die {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. Es ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Set-Accessor von `dayOfYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDateTime`-Objekt mit dem gewünschten neuen `dayOfYear`-Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainDateTime/add", "add()")}} oder {{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}} Methode mit der entsprechenden Anzahl von `days`.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}.

## Beispiele

### Verwendung von dayOfYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.dayOfYear); // 182
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
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
