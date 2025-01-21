---
title: Temporal.Instant.prototype.epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochMilliseconds
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`epochMilliseconds`** Zugreifereigenschaft von {{jsxref("Temporal.Instant")}} Instanzen gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden seit dem Unix-Epochenbeginn (Mitternacht, zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt. Sie entspricht der Division von `epochNanoseconds` durch `1e6` und der Abrundung des Ergebnisses.

Der Set-Accessor von `epochMilliseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.Instant`-Objekt mit dem gewünschten neuen `epochMilliseconds`-Wert zu erstellen, verwenden Sie die Methode {{jsxref("Temporal/Instant/add", "add()")}} oder {{jsxref("Temporal/Instant/subtract", "subtract()")}} mit der entsprechenden Dauer.

## Beispiele

### Verwendung von epochMilliseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochMilliseconds); // 1627821296789

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochMilliseconds); // -13173903211
```

### Ändern von epochMilliseconds

Dies ist die Methode, die es Ihnen ermöglicht, sich um eine beliebige Zeitspanne zu bewegen:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochMilliseconds); // 1627824896789
```

Wenn Sie die Änderung in Millisekunden bereits kennen, können Sie auch direkt ein neues `Temporal.Instant`-Objekt konstruieren:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochMilliseconds(
  instant.epochMilliseconds + 3600000,
);
console.log(instant1hourLater.epochMilliseconds); // 1627824896789
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
