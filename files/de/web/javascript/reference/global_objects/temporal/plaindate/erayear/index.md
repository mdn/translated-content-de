---
title: Temporal.PlainDate.prototype.eraYear
short-title: eraYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/eraYear
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die Zugriffs-Eigenschaft **`eraYear`** von {{jsxref("Temporal.PlainDate")}} Instanzen gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre innerhalb einer Ära können im Laufe der Zeit abnehmen (z. B. Gregorianisches v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, genauso wie `year`. Dies ist [kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.

Im Gegensatz zu `year` können sich `era` und `eraYear` mitten in einem Kalenderjahr ändern. Zum Beispiel begann Japan die Reiwa-Ära am 1. Mai 2019, sodass Daten vom 01.01.2019 bis 30.04.2019 `{ era: "heisei", eraYear: 31 }` haben, und Daten ab dem 01.05.2019 `{ era: "reiwa", eraYear: 1 }`, aber das `year` ist immer 2019 (da der japanische Kalender das ISO 8601 Jahr als Standardjahr verwendet).

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

Sie können `eraYear` nur für Kalender festlegen, die diese unterstützen. Zum Beispiel hat der ISO 8601 Kalender keine Ären. Beachten Sie, dass Sie `era` und `eraYear` zusammen bereitstellen müssen.

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
