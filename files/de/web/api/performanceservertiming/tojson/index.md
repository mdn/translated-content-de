---
title: "PerformanceServerTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceServerTiming`-Objekt repräsentiert.

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceServerTiming`-Objekt angetroffen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`name`](/de/docs/Web/API/PerformanceServerTiming/name)
- [`duration`](/de/docs/Web/API/PerformanceServerTiming/duration)
- [`description`](/de/docs/Web/API/PerformanceServerTiming/description)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### Direkter Aufruf von toJSON()

Dieses Beispiel ruft ein `PerformanceServerTiming`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

Für Server-Timing-Metriken muss der Server den Header {{HTTPHeader("Server-Timing")}} senden. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

`serverTiming`-Einträge können in `navigation`- und `resource`-Einträgen enthalten sein.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`- und `resource`-Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverTiming) => {
      const json = serverTiming.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.name); // Same value as serverTiming.name
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

### Serialisierung als JSON-String

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(serverTiming));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "name": "cache",
  "duration": 23.2,
  "description": "Cache Read"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
