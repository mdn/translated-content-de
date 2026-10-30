---
title: "PerformanceTimingConfidence: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceTimingConfidence/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence) gibt ein JSON-serialisierbares, einfaches Objekt zurück, das das `PerformanceTimingConfidence`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceTimingConfidence`-Objekt auftritt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares, einfaches Objekt mit den folgenden Eigenschaften:

- [`randomizedTriggerRate`](/de/docs/Web/API/PerformanceTimingConfidence/randomizedTriggerRate)
- [`value`](/de/docs/Web/API/PerformanceTimingConfidence/value)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `PerformanceTimingConfidence`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const confidence = entry.confidence;

    const json = confidence.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.value); // Same value as confidence.value
  });
});

observer.observe({ type: "navigation", buffered: true });
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(confidence));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "randomizedTriggerRate": 0.4994798,
  "value": "high"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)
- {{jsxref("JSON")}}
