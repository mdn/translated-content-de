---
title: "NotRestoredReasons: url-Eigenschaft"
short-title: url
slug: Web/API/NotRestoredReasons/url
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`url`**-Eigenschaft des [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Zeichenkette zurückgibt, die die URL der navigierten Seite oder des {{htmlelement("iframe")}} darstellt.

## Wert

Eine Zeichenkette.

Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `url` `null` zurück.

## Beispiele

Siehe [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
