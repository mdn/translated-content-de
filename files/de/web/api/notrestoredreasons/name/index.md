---
title: "NotRestoredReasons: name-Eigenschaft"
short-title: name
slug: Web/API/NotRestoredReasons/name
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`name`**-Eigenschaft, die schreibgeschützt ist, von der {{domxref("NotRestoredReasons")}}-Schnittstelle gibt einen String zurück, der den Wert des `name`-Attributs des {{htmlelement("iframe")}}-Elements darstellt, in dem das Dokument enthalten ist (zum Beispiel `<iframe name="bar" src="...">`).

## Wert

Ein String.

Wenn das Dokument sich nicht in einem `<iframe>` befindet oder das `<iframe>` kein `name`-Attribut gesetzt hat, wird `name` `null` zurückgeben.

## Beispiele

Siehe [Überwachung von Gründen für die Blockierung des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von Gründen für die Blockierung des bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
