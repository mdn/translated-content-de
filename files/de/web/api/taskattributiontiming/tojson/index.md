---
title: "TaskAttributionTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/TaskAttributionTiming/toJSON
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}{{non-standard_header}}

Die Methode **`toJSON()`** der Schnittstelle [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `TaskAttributionTiming`-Objekt darstellt.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `TaskAttributionTiming`-Objekt vorkommt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`name`](/de/docs/Web/API/PerformanceEntry/name)
- [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
- [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
- [`duration`](/de/docs/Web/API/PerformanceEntry/duration)
- [`navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId)
- [`containerType`](/de/docs/Web/API/TaskAttributionTiming/containerType)
- [`containerSrc`](/de/docs/Web/API/TaskAttributionTiming/containerSrc)
- [`containerId`](/de/docs/Web/API/TaskAttributionTiming/containerId)
- [`containerName`](/de/docs/Web/API/TaskAttributionTiming/containerName)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### Direkter Aufruf von toJSON()

Dieses Beispiel ruft ein `TaskAttributionTiming`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.attribution.forEach((attribution) => {
      const json = attribution.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.containerType); // Same value as attribution.containerType
    });
  });
});

observer.observe({ type: "longtask", buffered: true });
```

### Serialisierung als JSON-Zeichenfolge

Innerhalb des Callbacks aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(attribution));
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "unknown",
  "entryType": "taskattribution",
  "startTime": 0,
  "duration": 0,
  "navigationId": 2463,
  "containerType": "window",
  "containerSrc": "",
  "containerId": "",
  "containerName": ""
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
