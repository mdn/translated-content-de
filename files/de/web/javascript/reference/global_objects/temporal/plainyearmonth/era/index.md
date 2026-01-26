---
title: Temporal.PlainYearMonth.prototype.era
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/era
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`era`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainYearMonth")}} Instanzen gibt einen kalenderabhängigen Kleinbuchstaben-Zeichenkette zurück, die die Ära dieses Jahr-Monats darstellt, oder `undefined`, wenn der Kalender keine Äras verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year`. Es ist vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) abhängig.

Der Set-Accessor von `era` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainYearMonth/with", "with()")}} Methode, um ein neues `Temporal.PlainYearMonth` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}.

## Beispiele

### Verwendung von era

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.era); // undefined

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=gregory]");
console.log(ym2.era); // gregory
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
