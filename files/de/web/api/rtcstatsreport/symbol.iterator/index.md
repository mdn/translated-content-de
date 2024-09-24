---
title: "RTCStatsReport: [Symbol.iterator]() Methode"
short-title: "[Symbol.iterator]"
slug: Web/API/RTCStatsReport/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`[Symbol.iterator]()`** Methode der {{domxref("RTCStatsReport")}} Schnittstelle implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass Statistikberichte von den meisten Syntaxen, die Iterables erwarten, genutzt werden können, wie zum Beispiel der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen.
Sie gibt ein [Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Schlüssel-Wert-Paare des Berichts in Einfügereihenfolge liefert.

Der Anfangswert dieser Eigenschaft ist dasselbe Funktionsobjekt wie der Anfangswert der {{domxref("RTCStatsReport.entries()")}} Methode.

Die Methode ist ansonsten dieselbe wie [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).

## Syntax

```js-nolint
RTCStatsReport[Symbol.iterator]()
```

### Rückgabewert

Der gleiche Rückgabewert wie bei {{domxref("RTCStatsReport.entries()")}}.
Dies ist ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Schlüssel-Wert-Paare (`id`-„Statistik-Dictionary“) des Berichts liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCStatsReport.entries()")}}
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
