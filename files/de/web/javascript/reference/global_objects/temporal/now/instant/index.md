---
title: Temporal.Now.instant()
short-title: instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`Temporal.Now.instant()`** statische Methode gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}} Objekt zurück.

## Syntax

```js-nolint
Temporal.Now.instant()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Temporal.Instant")}} Objekt, das die aktuelle Zeit darstellt, mit möglicherweise [reduzierter Präzision](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now#reduced_time_precision).

## Beispiele

### Verstrichene Zeit messen

Das folgende Beispiel misst zwei Zeitpunkte und berechnet die [Dauer](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration) zwischen ihnen und erhält die Gesamtdauer in Millisekunden:

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
