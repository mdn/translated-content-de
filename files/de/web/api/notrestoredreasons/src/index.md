---
title: "NotRestoredReasons: src-Eigenschaft"
short-title: src
slug: Web/API/NotRestoredReasons/src
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`src`** schreibgeschützte Eigenschaft des [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Interfaces gibt einen String zurück, der den Pfad zur Quelle des {{htmlelement("iframe")}} angibt, in dem das Dokument enthalten ist (zum Beispiel `<iframe src="b.html">`).

## Wert

Ein String.

Wenn sich das Dokument nicht in einem `<iframe>` befindet, wird `src` `null` zurückgeben.

## Beispiele

Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
