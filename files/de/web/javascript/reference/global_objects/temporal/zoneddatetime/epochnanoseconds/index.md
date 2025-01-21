---
title: Temporal.ZonedDateTime.prototype.epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochNanoseconds
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`epochNanoseconds`** Zugriffs-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangen sind.

Der set-Accessor von `epochNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen `epochNanoseconds`-Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/add", "add()")}} oder {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} Methode mit der entsprechenden Dauer.

Ein Zeitpunkt kann nur ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) um den Epoch darstellen, was ±8,64e21 Nanosekunden entspricht. Der Versuch, `epochNanosecond` über diese Grenze hinaus festzulegen, löst einen {{jsxref("RangeError")}} aus.

## Beispiele

### Verwendung von epochNanoseconds

```js
const instant = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Erstellen eines ZonedDateTime-Objekts aus einem epochNanoseconds-Wert

Sie können ein `Temporal.ZonedDateTime`-Objekt aus einem `epochNanoseconds`-Wert mit dem {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor erstellen.

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
