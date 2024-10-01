---
title: "PerformanceEntry: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceEntry/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekts darstellt.

## Beispiele

### Verwendung der toJSON-Methode

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

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; diese wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
