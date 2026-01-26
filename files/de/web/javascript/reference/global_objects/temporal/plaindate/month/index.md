---
title: Temporal.PlainDate.prototype.month
short-title: month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/month
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`month`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist die {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. Es ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} in verschiedenen Jahren unterschiedliche `month`-Indizes haben.

> [!NOTE]
> Verwenden Sie diese Eigenschaft nicht, um den tatsächlichen Monat, einschließlich seines Namens, zu identifizieren. Verwenden Sie dafür {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}. Verwenden Sie `month` nur, um Monate im Kontext eines Jahres zu identifizieren oder deren Reihenfolge zu bestimmen.

Der set-Accessor von `month` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von month

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7

const date2 = Temporal.PlainDate.from("2021-05-01[u-ca=chinese]");
console.log(date2.monthCode); // "M03"
console.log(date2.month); // 3; it is March 20 in the Chinese calendar

const date3 = Temporal.PlainDate.from("2023-05-01[u-ca=chinese]");
console.log(date3.monthCode); // "M03"
console.log(date3.month); // 4, although it is also March (M03)!

const date4 = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(date4.monthCode); // "M02L"
console.log(date4.month); // 3, this month is a leap month, i.e. a duplicate February
```

### Durchlaufen aller Monate in einem Jahr

```js
const year = Temporal.PlainDate.from("2021-07-14"); // An arbitrary date in the year
for (
  let month = year.with({ month: 1 });
  month.year === year.year;
  month = month.add({ months: 1 })
) {
  console.log(month.month);
}
```

Alternativ ist dies auch eine sichere Möglichkeit (im Gegensatz zum [Tagesbeispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day#looping_through_all_days_in_a_month)):

```js
for (let month = 1; month <= year.monthsInYear; month++) {
  const monthDate = year.with({ month });
}
```

### Ändern des Monats

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ month: 2 });
console.log(newDate.toString()); // 2021-02-01
```

Sie können auch {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Monaten vom aktuellen Datum zu verschieben.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ months: 3 });
console.log(newDate.toString()); // 2021-10-01
```

Standardmäßig beschränkt `with()` den Tag auf den Bereich der gültigen Werte. Beide der folgenden Optionen setzen den Monat auf den letzten Monat des Jahres:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastMonth = date.with({ month: date.monthsInYear }); // 2021-12-01
const lastMonth2 = date.with({ month: Number.MAX_VALUE }); // 2021-12-01
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
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
