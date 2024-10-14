---
title: "PerformanceEntry: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceEntry/toJSON
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`toJSON()`** Methode ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}} Objekt, das die Serialisierung des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekts ist.

## Beispiele

### Verwendung der toJSON Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekts zurück.

```js
performance.mark("debug-marker", {
  detail: "debugging-marker-123",
});

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ entryTypes: ["mark"] });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "debug-marker",
  "entryType": "mark",
  "startTime": 158361,
  "duration": 0
}
```

Beachten Sie, dass es die [`detail`](/de/docs/Web/API/PerformanceMark/detail)-Eigenschaft von `PerformanceMark` nicht enthält.

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
