---
title: Temporal.PlainDate.prototype.era
short-title: era
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die Zugriffseigenschaft **`era`** von Instanzen des {{jsxref("Temporal.PlainDate")}} gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z. B. ISO 8601). `era` und `eraYear` gemeinsam identifizieren ein Jahr in einem Kalender eindeutig, genauso wie `year`. Es ist kalenderabhängig. Für den Gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.

Der Set-Accessor von `era` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die Methode {{jsxref("Temporal/PlainDate/with", "with()")}}, um ein neues `Temporal.PlainDate`-Objekt mit dem gewünschten neuen Wert zu erstellen. Beim Festlegen von Epochen kann jeder Code einige Aliase haben; zum Beispiel sind `"ce"` und `"ad"` gleichbedeutend mit `"gregory"`, und `"bce"` und `"bc"` sind gleichbedeutend mit `"gregory-inverse"`.

> [!NOTE]
> Dieser String ist nicht zur Anzeige für Benutzer bestimmt. Verwenden Sie {{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}} mit den entsprechenden Optionen, um einen lokalisierten String zu erhalten.

## Beispiele

### Verwendung von era

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.era); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.era); // gregory

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.era); // gregory-inverse

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.era); // reiwa
```

### Ändern von era

Sie können `era` nur für Kalender festlegen, die sie unterstützen. Zum Beispiel hat der ISO 8601-Kalender keine Epochen. Beachten Sie, dass Sie `era` und `eraYear` zusammen angeben müssen.

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
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
