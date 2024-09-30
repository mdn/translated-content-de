---
title: "NotRestoredReasons: url-Eigenschaft"
short-title: url
slug: Web/API/NotRestoredReasons/url
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`url`**-Schreibgeschützte Eigenschaft der [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Schnittstelle gibt einen String zurück, der die URL der navigierten Seite oder des {{htmlelement("iframe")}} darstellt.

## Wert

Ein String.

Befindet sich das Dokument in einem Cross-Origin-`<iframe>`, gibt `url` `null` zurück.

## Beispiele

Siehe [Überwachen von bfcache-Sperrgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachen von bfcache-Sperrgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
