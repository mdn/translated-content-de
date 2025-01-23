---
title: Temporal.Now.instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.Now.instant()`** gibt die aktuelle Zeit als ein {{jsxref("Temporal.Instant")}}-Objekt zurück.

## Syntax

```js-nolint
Temporal.Now.instant()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Temporal.Instant")}}-Objekt, das die aktuelle Zeit repräsentiert, mit möglicherweise [reduzierter Präzision](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now#reduced_time_precision).

## Beispiele

### Zeitverlauf messen

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
