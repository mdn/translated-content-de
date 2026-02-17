---
title: Temporal.PlainDate.prototype.eraYear
short-title: eraYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/eraYear
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Die **`eraYear`** Zugriffseigenschaft der {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine nicht-negative Ganzzahl zurück, die das Jahr innerhalb der Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahresindex beginnt in der Regel bei 1 (häufiger) oder 0, und Jahre in einer Epoche können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year` dies tut. Es ist kalenderabhängig.

Im Gegensatz zu `year` können sich `era` und `eraYear` mitten in einem Kalenderjahr ändern. Zum Beispiel begann Japan die Reiwa-Epoche am 1. Mai 2019, so dass Daten von 2019-01-01 bis 2019-04-30 `{ era: "heisei", eraYear: 31 }` haben und Daten ab 2019-05-01 `{ era: "reiwa", eraYear: 1 }` haben, aber das `year` ist immer 2019 (da der japanische Kalender das Jahr nach ISO 8601 als arithmetisches Jahr verwendet).

Für weitere Informationen über die Werte von `era` und `eraYear` für verschiedene Kalender siehe die {{jsxref("Temporal/PlainDate/era", "era")}} Eigenschaft.

Der Set-Zugriff von `eraYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainDate/with", "with()")}} Methode, um ein neues `Temporal.PlainDate` Objekt mit dem gewünschten neuen Wert zu erstellen.

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

### Änderung von eraYear

Sie können `eraYear` nur für Kalender festlegen, die diese unterstützen. Zum Beispiel hat der ISO 8601-Kalender keine Epochen. Beachten Sie, dass Sie `era` und `eraYear` zusammen angeben müssen.

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
