---
title: Temporal.ZonedDateTime.prototype.epochNanoseconds
short-title: epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochNanoseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`epochNanoseconds`** Zugriffs-Eigenschaft der {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangen sind.

Der set-Zugriff von `epochNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen `epochNanoseconds`-Wert zu erstellen, verwenden Sie stattdessen den {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "new Temporal.ZonedDateTime()")}} Konstruktor.

Ein Zeitpunkt kann nur ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) um den Epoch herum darstellen, was ±8,64e21 Nanosekunden entspricht. Der Versuch, `epochNanoseconds` über diese Grenze zu setzen, löst einen {{jsxref("RangeError")}} aus.

## Beispiele

### Verwendung von epochNanoseconds

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochNanoseconds); // 1627821296789000000n

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochNanoseconds); // -13173903211000000n
```

### Erstellen eines ZonedDateTime-Objekts aus einem epochNanoseconds-Wert

Sie können ein `Temporal.ZonedDateTime`-Objekt aus einem `epochNanoseconds`-Wert mithilfe des {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktors erstellen.

```js
const epochNanoseconds = 1627821296789000000n;
const zdt = new Temporal.ZonedDateTime(epochNanoseconds, "UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
