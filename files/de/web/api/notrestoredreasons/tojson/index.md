---
title: "NotRestoredReasons: Methode toJSON()"
short-title: toJSON()
slug: Web/API/NotRestoredReasons/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `NotRestoredReasons`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `NotRestoredReasons`-Objekt auftritt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein einfaches, JSON-serialisierbares Objekt mit den folgenden Eigenschaften:

- [`src`](/de/docs/Web/API/NotRestoredReasons/src)
- [`id`](/de/docs/Web/API/NotRestoredReasons/id)
- [`url`](/de/docs/Web/API/NotRestoredReasons/url)
- [`name`](/de/docs/Web/API/NotRestoredReasons/name)
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons)
- [`children`](/de/docs/Web/API/NotRestoredReasons/children)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Objekte in den Arrays `reasons` und `children` mit [`NotRestoredReasonDetails.toJSON()`](/de/docs/Web/API/NotRestoredReasonDetails/toJSON) beziehungsweise `NotRestoredReasons.toJSON()` weiter serialisiert, sofern die Arrays nicht `null` sind.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `NotRestoredReasons`-Objekt aus dem ersten Navigationseintrag ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Seine Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const navEntries = performance.getEntriesByType("navigation");
const navEntry = navEntries[0];
const reasons = navEntry.notRestoredReasons;

const json = reasons.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.url); // Same value as reasons.url
```

### In einen JSON-String serialisieren

Das Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(reasons));
```

Dadurch würde ein JSON-String wie der folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "src": null,
  "id": null,
  "url": "https://example.com/",
  "name": null,
  "reasons": [
    {
      "reason": "masked"
    }
  ],
  "children": [
    {
      "src": "https://other.example/frame.html",
      "id": "frame",
      "url": null,
      "name": null,
      "reasons": null,
      "children": null
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
- [Gründe für die Blockierung des bfcache überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
