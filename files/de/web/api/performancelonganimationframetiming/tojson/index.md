---
title: "PerformanceLongAnimationFrameTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceLongAnimationFrameTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceLongAnimationFrameTiming`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceLongAnimationFrameTiming`-Objekt gefunden wird.

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
- [`paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
- [`presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime)
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
- [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)

Der Wert jeder Eigenschaft wird unverändert übernommen. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, werden die Objekte im `scripts`-Array zusätzlich mit [`PerformanceScriptTiming.toJSON()`](/de/docs/Web/API/PerformanceScriptTiming/toJSON) serialisiert.

## Beispiele

### toJSON() direkt aufrufen

In diesem Beispiel wird ein `PerformanceLongAnimationFrameTiming`-Objekt abgerufen. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.blockingDuration); // Same value as entry.blockingDuration
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### In eine JSON-Zeichenfolge serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(entry));
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "long-animation-frame",
  "entryType": "long-animation-frame",
  "startTime": 11802.25,
  "duration": 60.5,
  "navigationId": 2463,
  "paintTime": 11862.75,
  "presentationTime": 11868.5,
  "renderStart": 11859.5,
  "styleAndLayoutStart": 11859.5,
  "firstUIEventTimestamp": 11801.25,
  "blockingDuration": 2.5,
  "scripts": [
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
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeitmessung langer Animationsframes](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
