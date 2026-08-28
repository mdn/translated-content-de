---
title: "PerformanceSoftNavigation: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceSoftNavigation/toJSON
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Objekts ist.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `PerformanceSoftNavigation`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "soft-navigation", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "duration": 41.4,
  "entryType": "soft-navigation",
  "interactionId": 1704,
  "name": "https://www.example.com/#2",
  "navigationId": 2463,
  "navigationType": "push",
  "paintTime": 2232.4,
  "presentationTime": 2268,
  "startTime": 2226.6
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
