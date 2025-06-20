---
title: Temporal.ZonedDateTime.prototype.epochNanoseconds
short-title: epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochNanoseconds
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`epochNanoseconds`** Zugriffsproperty von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangen sind.

Der Set-Zugriff von `epochNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen `epochNanoseconds`-Wert zu erstellen, verwenden Sie stattdessen den {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "new Temporal.ZonedDateTime()")}} Konstruktor.

Ein Moment kann nur ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) um den Epoch herum darstellen, was ±8,64e21 Nanosekunden entspricht. Der Versuch, `epochNanoseconds` über diese Grenze hinaus zu setzen, führt zu einem {{jsxref("RangeError")}}.

## Beispiele

### Verwendung von epochNanoseconds

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochNanoseconds); // 1627821296789000000n

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochNanoseconds); // -13173903211000000n
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
