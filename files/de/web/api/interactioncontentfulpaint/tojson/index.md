---
title: "InteractionContentfulPaint: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/InteractionContentfulPaint/toJSON
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Repräsentation des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekts ist.

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

Um eine JSON-Zeichenkette zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
