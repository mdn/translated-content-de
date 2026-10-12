---
title: "InteractionContentfulPaint: Methode toJSON()"
short-title: toJSON()
slug: Web/API/InteractionContentfulPaint/toJSON
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) ist ein {{Glossary("Serialization", "Serializer")}}. Sie gibt eine JSON-Darstellung des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekts darstellt.

## Beispiele

### Verwendung der Methode toJSON

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `InteractionContentfulPaint`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

Dabei würde ein JSON-Objekt wie das folgende protokolliert:

```json
{
  "entryType": "interaction-contentful-paint",
  "interactionId": 1704,
  "largestContentfulPaint": { "...": "..." },
  "name": "",
  "navigationId": 2463,
  "paintTime": 2589.3,
  "presentationTime": 2616,
  "startTime": 2226.6
}
```

Um eine JSON-Zeichenfolge zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden. Dabei wird `toJSON()` automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
