---
title: Temporal.PlainDate.prototype.year
short-title: year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/year
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`year`** Zugriffseigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres darstellt. Sie ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Diese Eigenschaft hat die gleiche Funktion wie das Paar {{jsxref("Temporal/PlainDate/era", "era")}}/{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} als eindeutiger Bezeichner eines Jahres in einem Kalender. Üblicherweise ist das Jahr 1 entweder das erste Jahr der jüngsten Ära oder das ISO 8601 Jahr `0001`. Da `year` relativ zum Beginn des Epochenjahres und nicht zum Epochendatum ist, hat dieses Jahr den gleichen Wert vor und nach dem Startdatum der Ära, falls die Epoche mitten im Jahr liegt.

Der set-Accessor von `year` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen.

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
