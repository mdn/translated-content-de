---
title: Temporal.PlainDate.prototype.daysInMonth
short-title: daysInMonth
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInMonth
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`daysInMonth`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. Sie hängt vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) ab.

Beachten Sie, dass die Anzahl der Tage in einem Monat nicht immer gleich dem {{jsxref("Temporal/PlainDate/day", "Tag")}} des letzten Tages des Monats ist, in dem seltenen Fall, dass in einem Monat ein paar Tage übersprungen werden.

Der Set-Accessor von `daysInMonth` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von daysInMonth

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInMonth); // 31

const date2 = Temporal.PlainDate.from("2021-02-01");
console.log(date2.daysInMonth); // 28; 2021 is not a leap year

const date3 = Temporal.PlainDate.from("2020-02-01");
console.log(date3.daysInMonth); // 29; 2020 is a leap year

const date4 = Temporal.PlainDate.from("2021-04-01[u-ca=chinese]");
console.log(date4.month); // 2
console.log(date4.daysInMonth); // 30; the Chinese 2nd month has 30 days
```

### Wechsel zum vorletzten Tag des Monats

Sie können `daysInMonth` verwenden, um zum vorletzten Tag des Monats zu wechseln:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const secondLastDay = date.with({ day: date.daysInMonth - 1 });
console.log(secondLastDay.toString()); // 2021-07-30
```

Dies ist jedoch nicht völlig sicher, da `daysInMonth` keine garantierte Verbindung zum Tagesindex hat. Hier ist eine sicherere Methode, um den vorletzten Tag zu erhalten:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const secondLastDay = date
  .with({ day: Number.MAX_SAFE_INTEGER })
  .subtract({ days: 1 });
console.log(secondLastDay.toString()); // 2021-07-30
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
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
