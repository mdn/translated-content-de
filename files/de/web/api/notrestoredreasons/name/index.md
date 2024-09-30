---
title: "NotRestoredReasons: name-Eigenschaft"
short-title: name
slug: Web/API/NotRestoredReasons/name
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`name`**-Eigenschaft der [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Schnittstelle gibt einen Zeichenfolgenwert zurück, der den `name`-Attributwert des {{htmlelement("iframe")}}, das das Dokument enthält, darstellt (zum Beispiel `<iframe name="bar" src="...">`).

## Wert

Ein Zeichenfolgenwert.

Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keinen `name` gesetzt hat, wird `name` `null` zurückgeben.

## Beispiele

Siehe [Überwachung der Gründe für das Blockieren des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der Gründe für das Blockieren des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
