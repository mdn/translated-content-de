---
title: Temporal.PlainDate.prototype.year
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/year
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`year`**-Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. Sie ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Diese Eigenschaft hat die gleiche Funktion wie das {{jsxref("Temporal/PlainDate/era", "era")}}/{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} Paar als eindeutiger Bezeichner eines Jahres in einem Kalender. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Epoche oder das ISO 8601 Jahr `0001`. Da `year` relativ zum Beginn des Epoche-Jahres ist, nicht zum Epoche-Datum, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Epoche, wenn die Epoche mitten im Jahr beginnt.

Der Set-Accessor von `year` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von year

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.year); // 2021

const date2 = Temporal.PlainDate.from("-002021-07-01");
console.log(date2.year); // -2021

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date3.year); // 2021; although the Japanese calendar uses eras,
// there's no obvious "default era", so the year is the same as the ISO year

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=hebrew]");
console.log(date4.year); // 5781; the Hebrew calendar uses the Anno Mundi epoch, which starts in 3761 BC
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
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
