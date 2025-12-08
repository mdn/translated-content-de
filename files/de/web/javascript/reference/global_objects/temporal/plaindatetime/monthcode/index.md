---
title: Temporal.PlainDateTime.prototype.monthCode
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/monthCode
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`monthCode`**-Zugriffseigenschaft von {{jsxref("Temporal.PlainDateTime")}}-Instanzen gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. Sie ist kalenderabhängig (siehe [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)).

Normalerweise ist es `M` plus eine zweistellige Monatsnummer. Bei Schaltmonaten ist es der Code des vorherigen Monats gefolgt von `L` (auch wenn er konzeptionell eine Ableitung des folgenden Monats ist; zum Beispiel hat im Hebräischen Kalender Adar I den Code `M05L`, aber Adar II hat den Code `M06`). Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.

Der Set-Accessor von `monthCode` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDateTime/with", "with()")}}-Methode, um ein neues `Temporal.PlainDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele, siehe {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Beispiele

### Verwendung von monthCode

```js
const date = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
