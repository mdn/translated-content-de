---
title: "RTCStatsReport: [Symbol.iterator]() Methode"
short-title: "[Symbol.iterator]"
slug: Web/API/RTCStatsReport/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`[Symbol.iterator]()`** Methode der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Schnittstelle implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es Statistikberichten, von den meisten Syntaxen konsumiert zu werden, die Iterables erwarten, wie beispielsweise die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Schlüssel-Wert-Paare des Berichts in der Einfügereihenfolge liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries) Methode.

Die Methode entspricht ansonsten der [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).

## Syntax

```js-nolint
RTCStatsReport[Symbol.iterator]()
```

### Rückgabewert

Der gleiche Rückgabewert wie [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries).
Dies ist ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Schlüssel-Wert (`id`-"Statistik-Wörterbuch") Paare des Berichts liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
