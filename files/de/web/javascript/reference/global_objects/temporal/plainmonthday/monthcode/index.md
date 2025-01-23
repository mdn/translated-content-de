---
title: Temporal.PlainMonthDay.prototype.monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/monthCode
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`monthCode`** Zugriffs Eigenschaft von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. Es hängt vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) ab.

In der Regel ist es `M` plus eine zweistellige Monatszahl. Bei Schaltmonaten ist es der Code des vorherigen Monats gefolgt von `L` (auch wenn es konzeptionell ein Derivat des folgenden Monats ist; zum Beispiel hat im hebräischen Kalender Adar I den Code `M05L`, aber Adar II hat den Code `M06`). Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.

Da {{jsxref("Temporal/PlainDate/month", "month")}} ein Index innerhalb eines Jahres ist, aber `PlainMonthDay` kein Jahr hat, gibt es keine `month` Eigenschaft für `PlainMonthDay`. Daher wird `monthCode` verwendet, um den Monat auf eine vom Jahr unabhängige Weise darzustellen.

Der Set-Accessor von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainMonthDay/with", "with()")}} Methode, um ein neues `Temporal.PlainMonthDay` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Beispiele

### Verwendung von monthCode

```js
const md = Temporal.PlainMonthDay.from("07-01"); // ISO 8601 calendar
console.log(md.monthCode); // "M07"

const md2 = Temporal.PlainMonthDay.from("2021-05-01[u-ca=chinese]");
console.log(md2.monthCode); // "M03"

const md3 = Temporal.PlainMonthDay.from("2023-04-01[u-ca=chinese]");
console.log(md3.monthCode); // "M02L"
```

### Ändern von monthCode

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md.with({ monthCode: "M03" });
console.log(newMD.toString()); // 03-01
```

Für andere Kalender, solange es ein Jahr gibt, in dem der Monats-Tag gültig ist, wird der Monats-Tag als gültig betrachtet und das zugrunde liegende Bezugsjahr kann sich daher ändern. Zum Beispiel:

```js
const md = Temporal.PlainMonthDay.from({
  monthCode: "M02",
  day: 30,
  calendar: "hebrew",
});
console.log(md.toString()); // 1971-11-18[u-ca=hebrew]
console.log(md.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Heshvan
// 30 Heshvan only exists in 1971, but this year is not a leap year
const newMD = md.with({ monthCode: "M05L" });
console.log(newMD.toString()); // 1970-03-08[u-ca=hebrew]
console.log(newMD.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Adar I
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
