---
title: "LayoutShift: toJSON() Methode"
short-title: toJSON()
slug: Web/API/LayoutShift/toJSON
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`** Methode der {{domxref("LayoutShift")}} Schnittstelle ist ein {{Glossary("Serialization","Serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("LayoutShift")}} Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}} Objekt, das die Serialisierung des {{domxref("LayoutShift")}} Objekts ist.

## Beispiele

### Verwendung der toJSON-Methode

In diesem Beispiel gibt der Aufruf von `entry.toJSON()` eine JSON-Darstellung des `LayoutShift` Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "name": "",
  "entryType": "layout-shift",
  "startTime": 246.39999999850988,
  "duration": 0,
  "value": 0.0071167845054842215,
  "hadRecentInput": false,
  "lastInputTime": 0,
  "sources": [
    {
      "previousRect": {
        "x": 917,
        "y": 708,
        "width": 706,
        "height": 248,
        "top": 708,
        "right": 1623,
        "bottom": 956,
        "left": 917
      },
      "currentRect": {
        "x": 693,
        "y": 708,
        "width": 1154,
        "height": 472,
        "top": 708,
        "right": 1847,
        "bottom": 1180,
        "left": 693
      }
    }
  ]
}
```

Um eine JSON-Zeichenkette zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
