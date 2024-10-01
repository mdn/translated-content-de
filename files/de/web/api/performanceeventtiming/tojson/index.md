---
title: "PerformanceEventTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceEventTiming/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) Objekts ist.

Das JSON enthält nicht die [`target`](/de/docs/Web/API/PerformanceEventTiming/target) Eigenschaft, da sie vom Typ [`Node`](/de/docs/Web/API/Node) ist, der keine `toJSON()`-Operation bereitstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceEventTiming` Objekts zurück.

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

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
