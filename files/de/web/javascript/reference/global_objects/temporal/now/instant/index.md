---
title: Temporal.Now.instant()
short-title: instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`Temporal.Now.instant()`** statische Methode gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück.

## Syntax

```js-nolint
Temporal.Now.instant()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Temporal.Instant")}} Objekt, das die aktuelle Zeit darstellt, möglicherweise mit [reduzierter Präzision](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now#reduced_time_precision).

## Beispiele

### Verstrichene Zeit messen

Im folgenden Beispiel werden zwei Zeitpunkte gemessen und die [Dauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration) zwischen ihnen berechnet. Die gesamte Dauer wird in Millisekunden ermittelt:

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
