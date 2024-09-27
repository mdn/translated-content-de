---
title: "Performance: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/Performance/toJSON
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`toJSON()`**-Methode des [`Performance`](/de/docs/Web/API/Performance)-Interfaces ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Darstellung des [`Performance`](/de/docs/Web/API/Performance)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`Performance`](/de/docs/Web/API/Performance)-Objekts darstellt.

Das zurückgegebene JSON enthält nicht die [`eventCounts`](/de/docs/Web/API/Performance/eventCounts)-Eigenschaft, da es sich um einen Typ von [`EventCounts`](/de/docs/Web/API/EventCounts) handelt, welcher keine `toJSON()`-Operation bereitstellt.

> [!NOTE]
> Das JSON-Objekt enthält die Serialisierung der veralteten Eigenschaften [`performance.timing`](/de/docs/Web/API/Performance/timing) und [`performance.navigation`](/de/docs/Web/API/Performance/navigation). Um eine JSON-Darstellung des neueren [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Interfaces zu erhalten, rufen Sie stattdessen [`PerformanceNavigationTiming.toJSON()`](/de/docs/Web/API/PerformanceNavigationTiming/toJSON) auf.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `performance.toJSON()` eine JSON-Darstellung des `Performance`-Objekts zurück.

```js
performance.toJSON();
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "timeOrigin": 1668077531367.4,
  "timing": {
    "connectStart": 1668077531372,
    "navigationStart": 1668077531367,
    "secureConnectionStart": 0,
    "fetchStart": 1668077531372,
    "domContentLoadedEventStart": 1668077531580,
    "responseStart": 1668077531372,
    "domInteractive": 1668077531524,
    "domainLookupEnd": 1668077531372,
    "responseEnd": 1668077531500,
    "redirectStart": 0,
    "requestStart": 1668077531372,
    "unloadEventEnd": 0,
    "unloadEventStart": 0,
    "domLoading": 1668077531512,
    "domComplete": 1668077531585,
    "domainLookupStart": 1668077531372,
    "loadEventStart": 1668077531585,
    "domContentLoadedEventEnd": 1668077531580,
    "loadEventEnd": 1668077531585,
    "redirectEnd": 0,
    "connectEnd": 1668077531372
  },
  "navigation": {
    "type": 0,
    "redirectCount": 0
  }
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(performance)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
