---
title: "RTCStatsReport: [Symbol.iterator]() Methode"
short-title: "[Symbol.iterator]"
slug: Web/API/RTCStatsReport/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`[Symbol.iterator]()`** Methode des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Interfaces implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, Statistikberichte mit den meisten Syntaxen zu konsumieren, die Iterables erwarten, wie zum Beispiel die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Schlüssel-Werte-Paare des Berichts in Einfüge-Reihenfolge liefert.

Der anfängliche Wert dieser Eigenschaft ist das gleiche Funktionsobjekt wie der anfängliche Wert der [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries) Methode.

Die Methode ist ansonsten identisch mit [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).

## Syntax

```js-nolint
RTCStatsReport[Symbol.iterator]()
```

### Rückgabewert

Der gleiche Rückgabewert wie [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries).
Dies ist ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Schlüssel-Werte (`id`-"Statistik-Dictionary") Paare des Berichts liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
