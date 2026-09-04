---
title: "InteractionContentfulPaint: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/InteractionContentfulPaint/toJSON
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Repräsentation des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekts darstellt.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Repräsentation des `InteractionContentfulPaint`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "entryType": "interaction-contentful-paint",
  "interactionId": 1704,
  "largestContentfulPaint": <not shown>,
  "name": "",
  "navigationId": 2463,
  "paintTime": 2589.3,
  "presentationTime": 2616,
  "startTime": 2226.6,
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; dabei wird `toJSON()` automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
