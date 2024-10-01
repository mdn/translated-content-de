---
title: "PerformanceServerTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der Schnittstelle [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Objekts darstellt.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können in `navigation` und `resource`-Einträgen vorhanden sein.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt, wenn neue `navigation`- und `resource`-Performance-Einträge im Leistungsdiagramm des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(serverEntry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
