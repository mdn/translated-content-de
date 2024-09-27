---
title: "PerformanceServerTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Interfaces ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Darstellung des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Objekts ist.

## Beispiele

### Server-Timing-Einträge protokollieren

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können in `navigation` und `resource`-Einträgen vorhanden sein.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`- und `resource`-Performance-Einträge informiert, wenn sie in der Leistungslinie des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Um eine JSON-Zeichenkette zu erhalten, können Sie direkt [`JSON.stringify(serverEntry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
