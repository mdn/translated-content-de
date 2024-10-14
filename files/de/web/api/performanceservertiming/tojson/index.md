---
title: "PerformanceServerTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Objekts ist.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können sich in `navigation` und `resource` Einträgen befinden.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation` und `resource` Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(serverEntry.toJSON());
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "cache",
  "duration": 23.2,
  "description": "Cache Read"
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(serverEntry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es ruft automatisch `toJSON()` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
