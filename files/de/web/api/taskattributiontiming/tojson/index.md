---
title: "TaskAttributionTiming: toJSON() Methode"
short-title: toJSON()
slug: Web/API/TaskAttributionTiming/toJSON
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode des [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekts ist.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `TaskAttributionTiming`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "taskattribution", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
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
```

Um eine JSON-Zeichenkette zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
