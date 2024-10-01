---
title: "PerformanceScriptTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceScriptTiming/toJSON
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie liefert eine JSON-Darstellung des `PerformanceScriptTiming`-Objekts.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekts ist.

## Beispiele

### Verwendung der `toJSON`-Methode

In diesem Beispiel liefert der Aufruf von `entry.toJSON()` eine JSON-Darstellung des ersten verfügbaren `PerformanceScriptTiming`-Objekts in einem beobachteten langen Animationsrahmen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.scripts[0].toJSON());
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
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
```

Um eine JSON-Zeichenkette zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
