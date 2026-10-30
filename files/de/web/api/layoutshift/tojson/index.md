---
title: "LayoutShift: Methode toJSON()"
short-title: toJSON()
slug: Web/API/LayoutShift/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`LayoutShift`](/de/docs/Web/API/LayoutShift) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `LayoutShift`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `LayoutShift`-Objekt verarbeitet wird.

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
- [`value`](/de/docs/Web/API/LayoutShift/value)
- [`hadRecentInput`](/de/docs/Web/API/LayoutShift/hadRecentInput)
- [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime)
- [`sources`](/de/docs/Web/API/LayoutShift/sources)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Objekte im `sources`-Array zusätzlich mithilfe von [`LayoutShiftAttribution.toJSON()`](/de/docs/Web/API/LayoutShiftAttribution/toJSON) serialisiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `LayoutShift`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Seine Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.value); // Same value as entry.value
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

### In eine JSON-Zeichenfolge serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dies würde eine JSON-Zeichenfolge wie die folgende protokollieren (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "",
  "entryType": "layout-shift",
  "startTime": 246.5,
  "duration": 0,
  "navigationId": 2463,
  "value": 0.0071167845054842215,
  "hadRecentInput": false,
  "lastInputTime": 0,
  "sources": [
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
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
