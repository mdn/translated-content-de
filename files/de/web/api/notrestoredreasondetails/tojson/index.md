---
title: "NotRestoredReasonDetails: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/NotRestoredReasonDetails/toJSON
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekts darstellt.

## Beispiele

Die folgende Funktion gibt eine JSON-Darstellung des ersten `NotRestoredReasonDetails`-Objekts des `NotRestoredReasons`-Objekts vom ersten `PerformanceNavigationTiming`-Objekt zurück, das derzeit in der Performance-Zeitleiste vorhanden ist:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  let navEntry = navEntries[0];
  return navEntry.notRestoredReasons.reasons[0].toJSON();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
- [Überwachung von Blockierungsgründen des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
