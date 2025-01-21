---
title: Temporal.PlainDate.prototype.day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`day`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, was derselbe Tag ist, den Sie in einem Kalender sehen würden. Sie ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Sie beginnt normalerweise bei 1 und ist kontinuierlich, aber nicht immer. Wenn Sie durch alle Tage eines Monats iterieren möchten, verwenden Sie zuerst {{jsxref("Temporal/PlainDate/with", "with()")}} mit `{ day: 1 }` (was auf den Beginn des Monats setzt, selbst wenn die tatsächliche Zahl nicht `1` ist), und verwenden Sie dann wiederholt {{jsxref("Temporal/PlainDate/add", "add()")}} mit `{ days: 1 }`, bis sich der Monat ändert.

> [!NOTE]
> Normalerweise ändert sich der Tag-Index nur beim Übergang von einem Kalendersystem in ein anderes, wie [vom julianischen zum gregorianischen Kalender](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar). In der Praxis sind alle derzeit eingebauten Kalender [proleptisch](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar), das bedeutet, das Kalendersystem wird unbegrenzt in die Vergangenheit und Zukunft erweitert. Die Annahme, dass `day` nicht kontinuierlich ist, schützt vor zukünftigen Einführungen von nicht proleptischen Kalendern.

Der Set-Zugriff von `day` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}}-Methode, um ein neues `Temporal.PlainDate`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von day

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.day); // 1

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.day); // 22; it is May 22 in the Chinese calendar
```

### Durch alle Tage eines Monats iterieren

```js
const month = Temporal.PlainDate.from("2021-07-14"); // An arbitrary date in the month
for (
  let day = month.with({ day: 1 });
  day.month === month.month;
  day = day.add({ days: 1 })
) {
  console.log(day.day);
}
```

### Ändern von day

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ day: 15 });
console.log(newDate.toString()); // 2021-07-15
```

Sie können auch {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Tagen vom aktuellen Datum zu verschieben.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ days: 14 });
console.log(newDate.toString()); // 2021-07-15
```

Standardmäßig beschränkt `with()` den Tag auf den Bereich gültiger Werte. So können Sie `{ day: 1 }` verwenden, um den Tag auf den ersten Tag des Monats zu setzen, selbst wenn der erste Tag nicht die Zahl `1` hat. Ebenso wird das Folgende den Tag auf den letzten Tag des Monats setzen:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ day: Number.MAX_VALUE }); // 2021-07-31
```

> [!NOTE]
> Vermeiden Sie es, {{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}} zu verwenden, um den Tag auf den letzten Tag des Monats zu setzen. Der letzte Tag des Monats ist nicht immer derselbe wie die Anzahl der Tage im Monat, im seltenen Fall, dass ein Monat ein paar Tage ausgelassen haben könnte.

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
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
