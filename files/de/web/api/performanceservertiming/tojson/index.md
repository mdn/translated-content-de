---
title: "PerformanceServerTiming: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der {{domxref("PerformanceServerTiming")}}-Schnittstelle ist ein {{Glossary("Serialization","Serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("PerformanceServerTiming")}}-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des {{domxref("PerformanceServerTiming")}}-Objekts darstellt.

## Beispiele

### Server-Timing-Einträge protokollieren

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können auf `navigation` und `resource` Einträgen existieren.

Ein Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation` und `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters erstellt wurden.

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

Um eine JSON-Zeichenkette zu erhalten, können Sie [`JSON.stringify(serverEntry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; dies ruft automatisch `toJSON()` auf.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
