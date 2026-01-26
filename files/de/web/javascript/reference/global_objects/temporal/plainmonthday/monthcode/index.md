---
title: Temporal.PlainMonthDay.prototype.monthCode
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthCode`** Zugriffseigenschaft von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. Er ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Normalerweise ist es `M` plus einer zweistelligen Monatszahl. Bei Schaltmonaten ist es der Code des vorherigen Monats gefolgt von `L` (auch wenn es konzeptionell ein Derivat des folgenden Monats ist; zum Beispiel hat im hebräischen Kalender Adar I den Code `M05L`, aber Adar II den Code `M06`). Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.

Da {{jsxref("Temporal/PlainDate/month", "month")}} ein Index innerhalb eines Jahres ist, `PlainMonthDay` jedoch kein Jahr hat, gibt es keine `month`-Eigenschaft für `PlainMonthDay`. Daher wird `monthCode` verwendet, um den Monat auf eine Weise darzustellen, die unabhängig vom Jahr ist.

Der Set-Zugriff von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainMonthDay/with", "with()")}}-Methode, um ein neues `Temporal.PlainMonthDay`-Objekt mit dem gewünschten neuen Wert zu erstellen.

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

### Änderung von monthCode

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md.with({ monthCode: "M03" });
console.log(newMD.toString()); // 03-01
```

Für andere Kalender gilt: Solange es ein Jahr gibt, in dem der Monat-Tag gültig ist, wird der Monat-Tag als gültig betrachtet, und das zugrunde liegende Bezugsjahr kann sich daher ändern. Zum Beispiel:

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
