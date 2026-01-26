---
title: Temporal.ZonedDateTime.prototype.month
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/month
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`month`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. Es ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Der Set-Accessor von `month` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode, um ein neues `Temporal.ZonedDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}.

## Beispiele

### Verwendung von month

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // ISO 8601 calendar
console.log(dt.monthCode); // "M07"
console.log(dt.month); // 7
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
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
