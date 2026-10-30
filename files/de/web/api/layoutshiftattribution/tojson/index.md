---
title: "LayoutShiftAttribution: Methode toJSON()"
short-title: toJSON()
slug: Web/API/LayoutShiftAttribution/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`LayoutShiftAttribution`](/de/docs/Web/API/LayoutShiftAttribution) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `LayoutShiftAttribution`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `LayoutShiftAttribution`-Objekt vorkommt.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`previousRect`](/de/docs/Web/API/LayoutShiftAttribution/previousRect)
- [`currentRect`](/de/docs/Web/API/LayoutShiftAttribution/currentRect)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Eigenschaften `previousRect` und `currentRect` zusätzlich mithilfe von [`DOMRectReadOnly.toJSON()`](/de/docs/Web/API/DOMRectReadOnly/toJSON) serialisiert.

Das zurückgegebene Objekt enthält die Eigenschaft [`node`](/de/docs/Web/API/LayoutShiftAttribution/node) nicht, da [`Node`](/de/docs/Web/API/Node) keine `toJSON()`-Operation bereitstellt.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel erhält ein `LayoutShiftAttribution`-Objekt. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
new PerformanceObserver((list) => {
  for (const { sources } of list.getEntries()) {
    if (sources) {
      const attribution = sources[0];

      const json = attribution.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.previousRect.x); // Same value as attribution.previousRect.x
    }
  }
}).observe({ type: "layout-shift", buffered: true });
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(attribution));
```

Dies würde einen JSON-String wie den folgenden ausgeben (zur besseren Lesbarkeit formatiert):

```json
{
  "previousRect": {
    "x": 917.25,
    "y": 708.25,
    "width": 706.5,
    "height": 248.5,
    "top": 708.25,
    "right": 1623.75,
    "bottom": 956.75,
    "left": 917.25
  },
  "currentRect": {
    "x": 693.25,
    "y": 708.25,
    "width": 1154.5,
    "height": 472.5,
    "top": 708.25,
    "right": 1847.75,
    "bottom": 1180.75,
    "left": 693.25
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
