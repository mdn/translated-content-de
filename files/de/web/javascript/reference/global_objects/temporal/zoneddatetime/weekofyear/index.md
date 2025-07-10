---
title: Temporal.ZonedDateTime.prototype.weekOfYear
short-title: weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/weekOfYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`weekOfYear`** Zugriffs-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen liefert eine positive Ganzzahl, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums repräsentiert, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Es ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Set-Zugriff von `weekOfYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime` Objekt mit dem gewünschten neuen `weekOfYear`-Wert zu erstellen, verwenden Sie die {{jsxref("Temporal.ZonedDateTime/add", "add()")}} oder {{jsxref("Temporal.ZonedDateTime/subtract", "subtract()")}} Methode mit der entsprechenden Anzahl von `weeks`.

Für allgemeine Informationen und mehr Beispiele siehe {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}.

## Beispiele

### Verwendung von weekOfYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.weekOfYear); // 26
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
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
