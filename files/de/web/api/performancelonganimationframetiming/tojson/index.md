---
title: "PerformanceLongAnimationFrameTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceLongAnimationFrameTiming/toJSON
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekts ist.

## Beispiele

### Verwendung der `toJSON`-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceLongAnimationFrameTiming`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "blockingDuration": 0,
  "duration": 60,
  "entryType": "long-animation-frame",
  "firstUIEventTimestamp": 11801.099999999627,
  "name": "long-animation-frame",
  "renderStart": 11858.800000000745,
  "scripts": [
    {
      "duration": 45,
      "entryType": "script",
      "executionStart": 11803.199999999255,
      "forcedStyleAndLayoutDuration": 0,
      "invoker": "DOMWindow.onclick",
      "invokerType": "event-listener",
      "name": "script",
      "pauseDuration": 0,
      "sourceURL": "https://web.dev/js/index-ffde4443.js",
      "sourceFunctionName": "myClickHandler",
      "sourceCharPosition": 17796,
      "startTime": 11803.199999999255,
      "window": [Window object],
      "windowAttribution": "self"
    }
  ],
  "startTime": 11802.400000000373,
  "styleAndLayoutStart": 11858.800000000745
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
