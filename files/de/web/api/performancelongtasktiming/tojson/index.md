---
title: "PerformanceLongTaskTiming: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceLongTaskTiming/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Schnittstelle ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Darstellung des [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekts darstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceLongTaskTiming`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "longtask", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "self",
  "entryType": "longtask",
  "startTime": 183,
  "duration": 60,
  "attribution": [
    {
      "name": "unknown",
      "entryType": "taskattribution",
      "startTime": 0,
      "duration": 0,
      "containerType": "window",
      "containerSrc": "",
      "containerId": "",
      "containerName": ""
    }
  ]
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
