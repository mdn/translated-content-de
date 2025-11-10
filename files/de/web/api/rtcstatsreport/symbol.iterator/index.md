---
title: "RTCStatsReport: [Symbol.iterator]() Methode"
short-title: "[Symbol.iterator]"
slug: Web/API/RTCStatsReport/Symbol.iterator
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`[Symbol.iterator]()`** Methode des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Interfaces implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und erlaubt es, Statistikberichte mit Syntaxen zu verwenden, die Iterables erwarten, wie zum Beispiel die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen.
Sie gibt ein [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Schlüssel-Wert-Paare des Berichts in Einfügereihenfolge liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries) Methode.

Die Methode ist ansonsten identisch mit [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).

## Syntax

```js-nolint
RTCStatsReport[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Der gleiche Rückgabewert wie bei [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries).
Dies ist ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Schlüssel-Wert-Paare (`id`-"Statistik-Wörterbuch") des Berichts liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
