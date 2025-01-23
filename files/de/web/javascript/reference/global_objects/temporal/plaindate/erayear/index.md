---
title: Temporal.PlainDate.prototype.eraYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/eraYear
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`eraYear`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und die Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorian BCE). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf die gleiche Weise wie `year`. Es ist kalenderabhängig [calendar](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Im Gegensatz zu `year`, können `era` und `eraYear` in der Mitte eines Kalenderjahres wechseln. Zum Beispiel begann Japan die Reiwa-Ära am 1. Mai 2019, so dass Daten vom 01.01.2019 bis 30.04.2019 `{ era: "heisei", eraYear: 31 }` haben, und Daten vom 01.05.2019 an `{ era: "reiwa", eraYear: 1 }`, aber das `year` ist immer 2019 (weil der japanische Kalender das ISO 8601 Jahr als Standardjahr verwendet).

Der set-Accessor von `eraYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen.

## Beispiele

### Verwendung von eraYear

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.eraYear); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.eraYear); // 2021

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.eraYear); // 2022; 0000 is used for the year 1 BC

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.eraYear); // 3
```

### Ändern von eraYear

Sie können `eraYear` nur für Kalender festlegen, die sie unterstützen. Zum Beispiel hat der ISO 8601 Kalender keine Ären. Beachten Sie, dass Sie `era` und `eraYear` zusammen bereitstellen müssen.

```js
const date = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
const newDate = date.with({ era: "bc", eraYear: 100 });
console.log(newDate.toString()); // -000099-07-01[u-ca=gregory]

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
const newDate2 = date2.with({ era: "meiji", eraYear: 1 });
console.log(newDate2.toString()); // 1868-07-01[u-ca=japanese]
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
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
