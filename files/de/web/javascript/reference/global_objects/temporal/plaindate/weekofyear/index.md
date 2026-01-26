---
title: Temporal.PlainDate.prototype.weekOfYear
short-title: weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/weekOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`weekOfYear`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Sie ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet werden können. Das heißt, wenn eine Woche zwei Jahre überschreitet, gehört sie zu dem Jahr, das die Mehrheit ihrer Tage hat. Um das Jahr zu erhalten, zu dem die `weekOfYear` gehört, verwenden Sie die {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} Eigenschaft, nicht die {{jsxref("Temporal/PlainDate/year", "year")}} Eigenschaft.

Der Set-Zugriff von `weekOfYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen `weekOfYear` Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} Methode mit der entsprechenden Anzahl von `weeks`.

## Beispiele

### Verwendung von weekOfYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.weekOfYear); // 26

// If 01-01 is a Friday/Saturday/Sunday, it belongs to the last week of the previous year
const date2 = Temporal.PlainDate.from("2021-01-01");
console.log(date2.dayOfWeek); // 5
console.log(date2.weekOfYear); // 53; 2020 has 53 weeks
console.log(date2.yearOfWeek); // 2020

// Otherwise, it belongs to the first week of the year
const date3 = Temporal.PlainDate.from("2020-01-01");
console.log(date3.dayOfWeek); // 3
console.log(date3.weekOfYear); // 1
console.log(date3.yearOfWeek); // 2020

// Similarly, if 12-31 is a Monday/Tuesday/Wednesday, it belongs to the first week of the next year
const date4 = Temporal.PlainDate.from("2019-12-31");
console.log(date4.dayOfWeek); // 2
console.log(date4.weekOfYear); // 1
console.log(date4.yearOfWeek); // 2020
```

### Ändern von weekOfYear

`PlainDate` unterstützt das direkte Ändern von `weekOfYear` nicht. Um die Woche zu ändern, müssen Sie zuerst den Unterschied in Wochen zu Ihrer gewünschten Woche ermitteln und dann `add` oder `subtract` verwenden, um das Datum entsprechend anzupassen. Zum Beispiel, um zur vorherigen Woche zu wechseln:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const previousWeek = date.subtract({ weeks: 1 });
console.log(previousWeek.toString()); // 2021-06-24
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
