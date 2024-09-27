---
title: "LargestContentfulPaint: toJSON() Methode"
short-title: toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Die **`toJSON()`** Methode des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Interfaces ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Repräsentation des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekts darstellt.

Das JSON enthält nicht die [`element`](/de/docs/Web/API/LargestContentfulPaint/element)-Eigenschaft, da sie vom Typ [`Element`](/de/docs/Web/API/Element) ist und keine `toJSON()`-Operation bietet.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Repräsentation des `LargestContentfulPaint`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "largest-contentful-paint", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "",
  "entryType": "largest-contentful-paint",
  "startTime": 468.2,
  "duration": 0,
  "size": 19824,
  "renderTime": 468.2,
  "loadTime": 0,
  "id": "",
  "url": ""
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
