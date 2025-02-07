---
title: Temporal.Instant.prototype.epochMilliseconds
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochMilliseconds
l10n:
  sourceCommit: 262c13dcbcd394beddd98e07d9c78bc79ce3513c
---

{{JSRef}}{{SeeCompatTable}}

Die **`epochMilliseconds`** Zugriffseigenschaft von {{jsxref("Temporal.Instant")}}-Instanzen gibt eine Ganzzahl zurück, welche die Anzahl der Millisekunden seit der Unix-Epoche (Mitternacht am Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt darstellt. Dies entspricht dem Teilen von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.

Der Setter von `epochMilliseconds` ist `undefined`. Diese Eigenschaft kann nicht direkt geändert werden. Um ein neues `Temporal.Instant`-Objekt mit dem gewünschten neuen `epochMilliseconds`-Wert zu erstellen, verwenden Sie stattdessen die statische Methode {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}.

## Beispiele

### Verwendung von epochMilliseconds

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochMilliseconds); // 1627821296789

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochMilliseconds); // -13173903211
```

### Ändern von epochMilliseconds

Dies ist die Methode, die es erlaubt, um eine beliebige Zeitspanne zu verschieben:

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochMilliseconds); // 1627824896789
```

Falls Sie die Änderung in Millisekunden bereits kennen, können Sie auch direkt ein neues `Temporal.Instant`-Objekt erstellen:

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
