---
title: Temporal.Instant.prototype.epochNanoseconds
short-title: epochNanoseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochNanoseconds
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`epochNanoseconds`**-Zugriffseigenschaft von Instanzen von {{jsxref("Temporal.Instant")}} gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangen sind.

Der set-Zugriff von `epochNanoseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.Instant`-Objekt mit dem gewünschten neuen `epochNanoseconds`-Wert zu erstellen, verwenden Sie stattdessen die statische Methode {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}.

Ein Zeitpunkt kann nur ±10<sup>8</sup> Tage (etwa ±273.972,6 Jahre) um die Epoche herum darstellen, was ±8,64e21 Nanosekunden entspricht. Der Versuch, `epochNanoseconds` über diese Grenze hinaus festzulegen, führt zu einem {{jsxref("RangeError")}}.

## Beispiele

### Verwendung von epochNanoseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Ändern von epochNanoseconds

Dies ist die Methode, die es Ihnen ermöglicht, sich über eine beliebige Zeitspanne zu bewegen:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

Wenn Sie die Änderung in Nanosekunden bereits kennen, können Sie auch direkt ein neues `Temporal.Instant`-Objekt konstruieren:

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
