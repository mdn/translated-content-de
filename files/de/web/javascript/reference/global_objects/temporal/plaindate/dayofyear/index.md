---
title: Temporal.PlainDate.prototype.dayOfYear
short-title: dayOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`dayOfYear`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. Sie ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Set-Accessor von `dayOfYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDate`-Objekt mit dem gewünschten neuen Wert von `dayOfYear` zu erstellen, verwenden Sie die Methode {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} mit der entsprechenden Anzahl von `days`.

## Beispiele

### Verwendung von dayOfYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.dayOfYear); // 182

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.dayOfYear); // 140

const date3 = Temporal.PlainDate.from("2020-07-01");
console.log(date3.dayOfYear); // 183; 2020 is a leap year
```

### Ändern von dayOfYear

`PlainDate` unterstützt das direkte Ändern von `dayOfYear` nicht. Um den Tag des Jahres zu ändern, müssen Sie zuerst die Differenz in Tagen zu Ihrem gewünschten Tag des Jahres ermitteln und dann `add` oder `subtract` verwenden, um das Datum entsprechend anzupassen. Um beispielsweise auf den 100. Tag dieses Jahres zu ändern (ob davor oder danach):

```js
function getDayInSameYear(date, destDayOfYear) {
  return date.add({ days: destDayOfYear - date.dayOfYear });
}

console.log(
  getDayInSameYear(Temporal.PlainDate.from("2021-07-01"), 100).toString(),
); // 2021-04-10
console.log(
  getDayInSameYear(Temporal.PlainDate.from("2021-01-01"), 100).toString(),
); // 2021-04-10
console.log(
  getDayInSameYear(Temporal.PlainDate.from("2020-01-01"), 100).toString(),
); // 2020-04-09
```

Standardmäßig beschränkt `with()` den Tag auf den Bereich der gültigen Werte. Sie können also immer `{ month: 1, day: 1 }` verwenden, um den Tag auf den ersten Tag des Jahres zu setzen, auch wenn der erste Tag nicht die Nummer `1` hat. Ähnlich wird Folgendes den Tag auf den letzten Tag des Jahres setzen, unabhängig davon, wie viele Tage im letzten Monat oder Jahr sind:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ month: Number.MAX_VALUE, day: Number.MAX_VALUE }); // 2021-12-31
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
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
