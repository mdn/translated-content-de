---
title: Temporal.ZonedDateTime.prototype.epochMilliseconds
short-title: epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochMilliseconds
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`epochMilliseconds`** Zugriffs-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt verstrichen sind. Es ist äquivalent dazu, `epochNanoseconds` durch `1e6` zu teilen und das Ergebnis abzurunden.

Der set Accessor von `epochMilliseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen `epochMilliseconds`-Wert zu erstellen, siehe unten.

## Beispiele

### Verwendung von epochMilliseconds

```js
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochMilliseconds); // 1627821296789

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochMilliseconds); // -13173903211
```

### Erstellen eines ZonedDateTime-Objekts aus einem epochMilliseconds-Wert

Sie können ein `Temporal.ZonedDateTime`-Objekt aus einem `epochMilliseconds`-Wert erstellen, indem Sie zuerst ein `Temporal.Instant`-Objekt mit {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} konstruieren und es dann mit {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} in ein `Temporal.ZonedDateTime`-Objekt umwandeln:

```js
const epochMilliseconds = 1627821296789;
const instant = Temporal.Instant.fromEpochMilliseconds(epochMilliseconds);
const zdt = instant.toZonedDateTimeISO("UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

Alternativ können Sie den {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor verwenden, jedoch zuerst die Millisekunden in Nanosekunden umwandeln:

```js
const epochMilliseconds = 1627821296789;
const epochNanoseconds = BigInt(epochMilliseconds) * 1_000_000n;
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
