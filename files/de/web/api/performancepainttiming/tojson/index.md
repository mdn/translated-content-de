---
title: "PerformancePaintTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformancePaintTiming/toJSON
l10n:
  sourceCommit: ff2d2a411c10d5b8b6732a66e69d0b78842b44fe
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekts darstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformancePaintTiming`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "paint", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "first-contentful-paint",
  "entryType": "paint",
  "startTime": 234.5,
  "duration": 0
}
```

Um eine JSON-Zeichenkette zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
