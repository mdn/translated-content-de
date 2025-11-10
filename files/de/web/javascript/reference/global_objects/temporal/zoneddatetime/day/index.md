---
title: Temporal.ZonedDateTime.prototype.day
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/day
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`day`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Tag im Monat dieses Datums darstellt, was derselbe Tag ist, den Sie auf einem Kalender sehen würden. Sie ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Der Set-Zugriff von `day` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

Für `PlainDate` kann `day` nur dann nicht kontinuierlich sein, wenn der Kalender Tage überspringt. Für `ZonedDateTime` kann `day` auch dann nicht kontinuierlich sein, wenn die Zeitzone ihren Offset um 24 Stunden ändert; dies ist tatsächlich schon vorgekommen. Siehe das Beispiel unten.

## Beispiele

### Verwendung von day

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // ISO 8601 calendar
console.log(dt.day); // 1
```

### Nicht kontinuierlicher Tag

Um die Zeiten besser mit seinen Handelspartnern in Asien abzustimmen, hat das Land Samoa [seine Zeitzone geändert](https://en.wikipedia.org/wiki/Time_in_Samoa), um auf die andere Seite der Internationalen Datumsgrenze zu wechseln und seinen Offset von -10:00 auf +14:00 (Sommerzeit) zu verschieben. Dies führte zu einer abrupten 24-stündigen Änderung der lokalen Zeit, wodurch der Tag des 30. Dezember 2011 vollständig übersprungen wurde. Auf `2011-12-29T23:59:59-10:00[Pacific/Apia]` folgt unmittelbar `2011-12-31T00:00:00+14:00[Pacific/Apia]`.

```js
const dt = Temporal.ZonedDateTime.from(
  "2011-12-29T23:59:59-10:00[Pacific/Apia]",
);
console.log(dt.day); // 29
const nextDay = dt.add({ seconds: 1 });
console.log(nextDay.day); // 31
```

Aus diesem Grund sollten Sie immer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} und {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} bevorzugen, um Daten und Zeiten zu manipulieren, anstatt die `day`-Eigenschaft direkt zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
