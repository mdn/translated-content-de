---
title: "NotRestoredReasons: name-Eigenschaft"
short-title: name
slug: Web/API/NotRestoredReasons/name
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`name`**-Eigenschaft der [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Schnittstelle gibt einen String zurück, der den `name`-Attributwert des {{htmlelement("iframe")}} darstellt, in dem das Dokument enthalten ist (zum Beispiel `<iframe name="bar" src="...">`).

## Wert

Ein String.

Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keinen `name` gesetzt hat, wird `name` `null` zurückgeben.

## Beispiele

Beispiele finden Sie unter [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
