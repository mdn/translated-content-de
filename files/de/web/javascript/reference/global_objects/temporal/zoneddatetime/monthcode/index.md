---
title: Temporal.ZonedDateTime.prototype.monthCode
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthCode`**-Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums repräsentiert. Sie ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

In der Regel ist es `M` plus einer zweistelligen Monatsnummer. Bei Schaltmonaten ist es der Code des vorherigen Monats, gefolgt von `L` (auch wenn es konzeptionell ein Derivat des folgenden Monats ist; zum Beispiel hat im hebräischen Kalender Adar I den Code `M05L`, aber Adar II hat den Code `M06`). Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.

Der Set-Zugriff von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Beispiele

### Verwendung von monthCode

```js
const date = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
