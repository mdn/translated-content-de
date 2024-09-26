---
title: "NotRestoredReasons: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/NotRestoredReasons/toJSON
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der {{domxref("NotRestoredReasons")}}-Schnittstelle ist ein {{Glossary("Serialization","Serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("NotRestoredReasons")}}-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des {{domxref("NotRestoredReasons")}}-Objekts darstellt.

## Beispiele

Die folgende Funktion gibt eine JSON-Darstellung des `NotRestoredReasons`-Objekts des ersten `PerformanceNavigationTiming`-Objekts zurück, das sich derzeit in der Performance-Timeline befindet:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  let navEntry = navEntries[0];
  return navEntry.notRestoredReasons.toJSON();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}