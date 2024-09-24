---
title: "NotRestoredReasons: src-Eigenschaft"
short-title: src
slug: Web/API/NotRestoredReasons/src
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`src`** schreibgeschützte Eigenschaft des {{domxref("NotRestoredReasons")}}-Interfaces gibt einen String zurück, der den Pfad zur Quelle des {{htmlelement("iframe")}}, das das Dokument enthält, darstellt (zum Beispiel `<iframe src="b.html">`).

## Wert

Ein String.

Wenn sich das Dokument nicht in einem `<iframe>` befindet, gibt `src` `null` zurück.

## Beispiele

Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
