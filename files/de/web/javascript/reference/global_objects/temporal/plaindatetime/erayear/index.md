---
title: Temporal.PlainDateTime.prototype.eraYear
short-title: eraYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/eraYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`eraYear`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, genauso wie `year` es tut. Es ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Set-Accessor von `eraYear` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainDateTime/with", "with()")}}, um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}.

## Beispiele

### Verwendung von eraYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.eraYear); // undefined

const dt2 = Temporal.PlainDateTime.from("2021-07-01[u-ca=gregory]");
console.log(dt2.eraYear); // 2021

const dt3 = Temporal.PlainDateTime.from("-002021-07-01[u-ca=gregory]");
console.log(dt3.eraYear); // 2022; 0000 is used for the year 1 BC

const dt4 = Temporal.PlainDateTime.from("2021-07-01[u-ca=japanese]");
console.log(dt4.eraYear); // 3
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
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
