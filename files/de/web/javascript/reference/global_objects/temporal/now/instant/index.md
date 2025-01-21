---
title: Temporal.Now.instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die statische Methode **`Temporal.Now.instant()`** gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück.

## Syntax

```js-nolint
Temporal.Now.instant()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Temporal.Instant")}} Objekt, das die aktuelle Zeit darstellt, möglicherweise mit [reduzierter Genauigkeit](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now#reduced_time_precision).

## Beispiele

### Vergangene Zeit messen

Im folgenden Beispiel werden zwei Zeitpunkte gemessen und die [Dauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration) dazwischen berechnet. Die Gesamtdauer wird in Millisekunden ermittelt:

```js
const start = Temporal.Now.instant();
// Do something that takes time
const end = Temporal.Now.instant();
const duration = end.since(start);
console.log(duration.total("milliseconds"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.Instant")}}
