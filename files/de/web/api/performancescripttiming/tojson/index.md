---
title: "PerformanceScriptTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceScriptTiming/toJSON
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des `PerformanceScriptTiming`-Objekts zurück.

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

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des ersten `PerformanceScriptTiming`-Objekts zurück, das in einem beobachteten langen Animationsframe verfügbar ist.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.scripts[0].toJSON());
  });
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Dies würde ein Objekt wie folgt protokollieren:

```js
({
  duration: 45,
  entryType: "script",
  executionStart: 11803.199999999255,
  forcedStyleAndLayoutDuration: 0,
  invoker: "DOMWindow.onclick",
  invokerType: "event-listener",
  name: "script",
  pauseDuration: 0,
  sourceURL: "https://web.dev/js/index-ffde4443.js",
  sourceFunctionName: "myClickHandler",
  sourceCharPosition: 17796,
  startTime: 11803.199999999255,
  windowAttribution: "self",
});
```

Um eine JSON-Zeichenkette zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{jsxref("JSON")}}
