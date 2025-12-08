---
title: Temporal.PlainDateTime.prototype.era
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/era
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`era`** Accessor-Eigenschaft von {{jsxref("Temporal.PlainDateTime")}} Instanzen gibt einen kalender-spezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, so wie es `year` tut. Es ist kalender\-abhängig.

Der Set-Accessor von `era` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainDateTime/with", "with()")}}, um ein neues `Temporal.PlainDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}.

## Beispiele

### Verwendung von era

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.era); // undefined

const dt2 = Temporal.PlainDateTime.from("2021-07-01[u-ca=gregory]");
console.log(dt2.era); // gregory
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
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
