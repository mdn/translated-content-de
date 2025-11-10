---
title: Temporal.PlainDateTime.prototype.year
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/year
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`year`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. Es ist [kalender-](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Der setzbare Accessor von `year` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDateTime/with", "with()")}} Methode, um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Beispiele

### Verwendung von year

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.year); // 2021
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
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
