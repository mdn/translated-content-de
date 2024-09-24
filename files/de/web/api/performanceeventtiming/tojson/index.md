---
title: "PerformanceEventTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceEventTiming/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der {{domxref("PerformanceEventTiming")}}-Schnittstelle ist ein {{Glossary("Serialization","Serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("PerformanceEventTiming")}}-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des {{domxref("PerformanceEventTiming")}}-Objekts darstellt.

Das JSON enthält nicht die {{domxref("PerformanceEventTiming.target", "target")}}-Eigenschaft, da diese vom Typ {{domxref("Node")}} ist, welcher keine `toJSON()`-Operation bereitstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceEventTiming`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
