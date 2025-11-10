---
title: Temporal.PlainDateTime.prototype.weekOfYear
short-title: weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/weekOfYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`weekOfYear`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Dies hängt vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) ab.

Der Set-Zugriff für `weekOfYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen `weekOfYear` Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainDateTime/add", "add()")}}- oder {{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}-Methode mit der entsprechenden Anzahl an `weeks`.

Für allgemeine Informationen und weitere Beispiele, siehe {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}.

## Beispiele

### Verwendung von weekOfYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.weekOfYear); // 26
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
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
