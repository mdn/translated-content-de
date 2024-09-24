---
title: "NotRestoredReasons: url-Eigenschaft"
short-title: url
slug: Web/API/NotRestoredReasons/url
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`url`**-Eigenschaft des schreibgeschützten {{domxref("NotRestoredReasons")}}-Interfaces gibt eine Zeichenkette zurück, die die URL der navigierten Seite oder des {{htmlelement("iframe")}} darstellt.

## Wert

Eine Zeichenkette.

Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, gibt `url` `null` zurück.

## Beispiele

Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
