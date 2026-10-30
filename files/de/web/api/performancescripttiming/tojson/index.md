---
title: "PerformanceScriptTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceScriptTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceScriptTiming`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceScriptTiming`-Objekt verarbeitet wird.

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
- [`invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker)
- [`invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
- [`windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution)
- [`executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
- [`forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
- [`pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
- [`sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)
- [`sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName)
- [`sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition)

Der Wert jeder Eigenschaft wird unverändert übernommen.

Das zurückgegebene Objekt enthält die Eigenschaft [`window`](/de/docs/Web/API/PerformanceScriptTiming/window) nicht, da [`Window`](/de/docs/Web/API/Window) keine `toJSON()`-Operation bereitstellt.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `PerformanceScriptTiming`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const scriptTiming = entry.scripts[0];

    const json = scriptTiming.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.sourceURL); // Same value as scriptTiming.sourceURL
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(scriptTiming));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "script",
  "entryType": "script",
  "startTime": 11803.25,
  "duration": 49.25,
  "navigationId": 2463,
  "invoker": "DOMWindow.onclick",
  "invokerType": "event-listener",
  "windowAttribution": "self",
  "executionStart": 11803.25,
  "forcedStyleAndLayoutDuration": 0.5,
  "pauseDuration": 0.25,
  "sourceURL": "https://web.dev/js/index-ffde4443.js",
  "sourceFunctionName": "myClickHandler",
  "sourceCharPosition": 17796
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
