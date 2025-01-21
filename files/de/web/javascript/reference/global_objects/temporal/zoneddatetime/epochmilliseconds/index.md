---
title: Temporal.ZonedDateTime.prototype.epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochMilliseconds
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`epochMilliseconds`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt verstrichen sind. Sie ist gleichbedeutend mit der Division von `epochNanoseconds` durch `1e6` und der Rundung des Ergebnisses nach unten.

Der Set-Zugriff von `epochMilliseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime` Objekt mit dem gewünschten neuen `epochMilliseconds` Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/ZonedDateTime/add", "add()")}} oder {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} Methode mit der entsprechenden Dauer.

## Beispiele

### Verwendung von epochMilliseconds

```js
const instant = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(instant.epochMilliseconds); // 1627821296789

const instant2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(instant2.epochMilliseconds); // -13173903211
```

### Erstellen eines ZonedDateTime-Objekts aus einem epochMilliseconds-Wert

Sie können ein `Temporal.ZonedDateTime` Objekt aus einem `epochMilliseconds` Wert erstellen, indem Sie zuerst ein `Temporal.Instant` Objekt mit {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} konstruieren und es dann in ein `Temporal.ZonedDateTime` Objekt mit {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} umwandeln:

```js
const epochMilliseconds = 1627821296789;
const instant = Temporal.Instant.fromEpochMilliseconds(epochMilliseconds);
const zdt = instant.toZonedDateTimeISO("UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

Alternativ verwenden Sie den {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor, aber konvertieren Sie zuerst die Millisekunden in Nanosekunden:

```js
const epochMilliseconds = 1627821296789;
const epochNanoseconds = BigInt(epochMilliseconds) * 1e6n;
const zdt = new Temporal.ZonedDateTime(epochNanoseconds, "UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
