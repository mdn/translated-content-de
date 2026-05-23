---
title: "PerformanceTimingConfidence: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceTimingConfidence/toJSON
l10n:
  sourceCommit: 29e6ba9d844b835a1f00346ef1a78fa5d9e7c1a8
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`** Methode des [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}, der eine JSON-Darstellung des [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Objekts zurückgibt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}} Objekt, das die Serialisierung des [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Objekts ist.

## Beispiele

### Verwendung der toJSON-Methode

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), um eine JSON-Serialisierung der Vertrauensdaten für beobachtete [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Einträge abzurufen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.confidence.toJSON());
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Dies würde ein JSON-Objekt folgendermaßen protokollieren:

```json
{
  "randomizedTriggerRate": 0.4994798,
  "value": "high"
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)
- {{jsxref("JSON")}}
