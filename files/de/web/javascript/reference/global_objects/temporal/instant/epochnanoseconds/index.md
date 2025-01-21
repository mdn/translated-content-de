---
title: Temporal.Instant.prototype.epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochNanoseconds
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die Zugriffseigenschaft **`epochNanoseconds`** von Instanzen des {{jsxref("Temporal.Instant")}} gibt ein {{jsxref("BigInt")}} zurück, welches die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch-Zeitpunkt (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.

Der set-Accessor von `epochNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.Instant` Objekt mit dem gewünschten neuen `epochNanoseconds` Wert zu erstellen, verwenden Sie die {{jsxref("Temporal/Instant/add", "add()")}} oder {{jsxref("Temporal/Instant/subtract", "subtract()")}} Methode mit der entsprechenden Dauer.

Ein Instant kann nur ±10<sup>8</sup> Tage (etwa ±273,972.6 Jahre) um den Epoch darstellen, was ±8.64e21 Nanosekunden entspricht. Der Versuch, `epochNanoseconds` außerhalb dieser Grenze festzulegen, löst einen {{jsxref("RangeError")}} aus.

## Beispiele

### Verwendung von epochNanoseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Änderung von epochNanoseconds

Dies ist die Methode, die Ihnen erlaubt, sich um eine beliebige Zeitmenge zu bewegen:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

Wenn Sie die Änderung in Nanosekunden bereits kennen, können Sie auch direkt ein neues `Temporal.Instant` Objekt konstruieren:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochNanoseconds(
  instant.epochNanoseconds + 3600000000000n,
);
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
