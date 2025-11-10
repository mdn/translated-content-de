---
title: Temporal.PlainDate.prototype.dayOfWeek
short-title: dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`dayOfWeek`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Die Tage in einer Woche werden von `1` bis {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}} durchnummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. Diese Eigenschaft ist kalenderabhängig ([calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)). In der Regel steht 1 für Montag im Kalender, auch wenn in einigen Regionen, die denselben Kalender verwenden, ein anderer Tag als erster Wochentag betrachtet wird (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).

Alle gängig unterstützten Kalender verwenden Wochen mit 7 Tagen, und Sie können im Allgemeinen erwarten, dass diese Eigenschaft für dasselbe Datum in verschiedenen Kalendern denselben Wert zurückgibt.

Der Set-Zugriffsoperator von `dayOfWeek` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen `dayOfWeek` Wert zu erstellen, verwenden Sie die Methode {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} mit der entsprechenden Anzahl von `days`.

## Beispiele

### Verwendung von dayOfWeek

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.dayOfWeek); // 4; Thursday

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.dayOfWeek); // 4
```

### Ändern von dayOfWeek

`PlainDate` unterstützt das direkte Ändern von `dayOfWeek` nicht. Um den Wochentag zu ändern, müssen Sie zuerst die Differenz in Tagen zu Ihrem gewünschten Wochentag ermitteln und dann `add` oder `subtract` verwenden, um das Datum entsprechend anzupassen. Zum Beispiel, um auf den Freitag dieser Woche (ob davor oder danach) zu wechseln:

```js
function getDayInSameWeek(date, destDayOfWeek) {
  return date.add({ days: destDayOfWeek - date.dayOfWeek });
}

console.log(
  getDayInSameWeek(Temporal.PlainDate.from("2021-07-01"), 5).toString(),
); // 2021-07-02
console.log(
  getDayInSameWeek(Temporal.PlainDate.from("2021-07-03"), 5).toString(),
); // 2021-07-02
```

Um zum nächsten Freitag zu wechseln:

```js
function getNextDayInWeek(date, destDayOfWeek) {
  const distance = destDayOfWeek - date.dayOfWeek;
  return date.add({
    days: distance < 0 ? date.daysInWeek + distance : distance,
  });
}

console.log(
  getNextDayInWeek(Temporal.PlainDate.from("2021-07-01"), 5).toString(),
); // 2021-07-02
console.log(
  getNextDayInWeek(Temporal.PlainDate.from("2021-07-03"), 5).toString(),
); // 2021-07-09
```

Um zum vorherigen Freitag zu wechseln:

```js
function getPreviousDayInWeek(date, destDayOfWeek) {
  const distance = date.dayOfWeek - destDayOfWeek;
  return date.subtract({
    days: distance < 0 ? date.daysInWeek + distance : distance,
  });
}

console.log(
  getPreviousDayInWeek(Temporal.PlainDate.from("2021-07-01"), 5).toString(),
); // 2021-06-25
console.log(
  getPreviousDayInWeek(Temporal.PlainDate.from("2021-07-03"), 5).toString(),
); // 2021-07-02
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
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
