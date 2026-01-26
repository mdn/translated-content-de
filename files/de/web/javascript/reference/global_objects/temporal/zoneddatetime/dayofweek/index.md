---
title: Temporal.ZonedDateTime.prototype.dayOfWeek
short-title: dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfWeek
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`dayOfWeek`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. Es ist kalenderabhängig (siehe [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Set-Zugriff von `dayOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen `dayOfWeek`-Wert zu erstellen, verwenden Sie die Methode {{jsxref("Temporal/ZonedDateTime/add", "add()")}} oder {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} mit der entsprechenden Anzahl von `Tagen`.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}.

## Beispiele

### Verwendung von dayOfWeek

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfWeek); // 4; Thursday
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
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
