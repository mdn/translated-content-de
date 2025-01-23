---
title: Temporal.Instant.prototype.epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochMilliseconds
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die **`epochMilliseconds`** Zugriffseigenschaft von Instanzen von {{jsxref("Temporal.Instant")}} gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden darstellt, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt verstrichen sind. Dies entspricht dem Dividieren von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.

Der Setz-Zugriff von `epochMilliseconds` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Um ein neues `Temporal.Instant`-Objekt mit dem gewünschten neuen Wert von `epochMilliseconds` zu erstellen, verwenden Sie die Methode {{jsxref("Temporal/Instant/add", "add()")}} oder {{jsxref("Temporal/Instant/subtract", "subtract()")}} mit der entsprechenden Dauer.

## Beispiele

### Verwenden von epochMilliseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochMilliseconds); // 1627821296789

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochMilliseconds); // -13173903211
```

### Ändern von epochMilliseconds

Dies ist die Methode, die es Ihnen ermöglicht, sich um einen beliebigen Zeitraum zu bewegen:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochMilliseconds); // 1627824896789
```

Wenn Sie die Änderung in Millisekunden bereits kennen, können Sie auch direkt ein neues `Temporal.Instant`-Objekt erstellen:

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
