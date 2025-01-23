---
title: Temporal.PlainDate.prototype.weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/weekOfYear
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`weekOfYear`** Zugriffs-Eigenschaft der {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Dies ist kalenderabhängig.

Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet sein können. Wenn eine Woche also zwei Jahre überschreitet, gehört sie zu dem Jahr, das die Mehrheit seiner Tage hat. Um das Jahr zu erhalten, zu dem die `weekOfYear` gehört, verwenden Sie die {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} Eigenschaft, nicht die {{jsxref("Temporal/PlainDate/year", "year")}} Eigenschaft.

Der Set-Accessor von `weekOfYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen `weekOfYear` Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} Methode mit der entsprechenden Anzahl von `weeks`.

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

`PlainDate` unterstützt das direkte Ändern von `weekOfYear` nicht. Um die Woche zu ändern, müssen Sie zuerst den Unterschied in Wochen zu Ihrer gewünschten Woche herausfinden und dann `add` oder `subtract` verwenden, um das Datum entsprechend anzupassen. Zum Beispiel, um zur vorherigen Woche zu wechseln:

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
