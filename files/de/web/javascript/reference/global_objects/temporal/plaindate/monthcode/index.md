---
title: Temporal.PlainDate.prototype.monthCode
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthCode`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}}-Instanzen gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums darstellt. Es ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

In der Regel ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des vorherigen Monats, gefolgt von `L` (auch wenn es konzeptionell ein Derivat des folgenden Monats ist; zum Beispiel im Hebräischen Kalender hat Adar I den Code `M05L`, aber Adar II hat den Code `M06`). Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.

> [!NOTE]
> Gehen Sie nicht davon aus, dass `monthCode` ein benutzerfreundlicher String ist; verwenden Sie `toLocaleString()`, um Ihr Datum zu formatieren. Allgemein sollten Sie die Namen der Monate nicht in einem Array oder Objekt zwischenspeichern. Auch wenn `monthCode` meist mit dem Namen des Monats innerhalb eines Kalenders übereinstimmt, empfehlen wir, den Monatsnamen immer mithilfe von Methoden wie `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })` zu berechnen.

Der Set-Accessor von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}}-Methode, um ein neues `Temporal.PlainDate`-Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von monthCode

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

### Ändern von monthCode

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ month: 2 });
console.log(newDate.toString()); // 2021-02-01
```

Sie können auch {{jsxref("Temporal/PlainDate/add", "add()")}} oder {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} verwenden, um eine bestimmte Anzahl von Monaten vom aktuellen Datum aus zu verschieben.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ months: 3 });
console.log(newDate.toString()); // 2021-10-01
```

Standardmäßig beschränkt `with()` den Tag auf den Bereich gültiger Werte. Beide folgenden Beispiele setzen den Monat auf den letzten Monat des Jahres:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastMonth = date.with({ month: date.monthsInYear }); // 2021-12-01
const lastMonth2 = date.with({ month: Number.MAX_VALUE }); // 2021-12-01
```

### Formatieren von Monatsnamen

Tun Sie dies nicht:

<!-- prettier-ignore -->
```js example-bad
const names = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const date = Temporal.PlainDate.from("2021-07-01");
console.log(names[date.month - 1]); // July
```

Tun Sie auch dies nicht:

<!-- prettier-ignore -->
```js example-bad
const names = {
  "M01": "January", "M02": "February", "M03": "March", "M04": "April",
  "M05": "May", "M06": "June", "M07": "July", "M08": "August",
  "M09": "September", "M10": "October", "M11": "November", "M12": "December"
};

const date = Temporal.PlainDate.from("2021-07-01");
console.log(names[date.monthCode]); // July
```

Tun Sie stattdessen immer Folgendes, da es benutzerfreundlicher und weniger fehleranfällig ist und sich leicht auf andere Kalender verallgemeinern lässt:

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(
  date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" }),
); // July
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
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
