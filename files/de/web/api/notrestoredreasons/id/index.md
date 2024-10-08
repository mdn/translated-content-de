---
title: "NotRestoredReasons: id-Eigenschaft"
short-title: id
slug: Web/API/NotRestoredReasons/id
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`id`**-Schreibgeschützte Eigenschaft der Schnittstelle [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons) gibt einen String zurück, der den Wert des `id`-Attributs des {{htmlelement("iframe")}} darstellt, in dem das Dokument enthalten ist (zum Beispiel `<iframe id="foo" src="...">`).

## Wert

Ein String.

Wenn das Dokument sich nicht in einem `<iframe>` befindet oder das `<iframe>` keine `id` gesetzt hat, gibt `id` `null` zurück.

## Beispiele

Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
