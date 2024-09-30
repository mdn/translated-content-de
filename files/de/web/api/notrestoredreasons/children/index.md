---
title: "NotRestoredReasons: children Eigenschaft"
short-title: children
slug: Web/API/NotRestoredReasons/children
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`children`** schreibgeschützte Eigenschaft der [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Schnittstelle gibt ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten zurück, eines für jedes eingebettete {{htmlelement("iframe")}} im aktuellen Dokument, das Gründe enthalten kann, warum das Top-Level-Frame in Bezug auf die Kind-Frames blockiert wurde.

Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt – auf diese Weise können beliebig viele Ebenen von eingebetteten `<iframe>`s rekursiv im Objekt dargestellt werden.

## Wert

Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten.

Wenn das Frame keine Kinder hat, wird das Array leer sein; wenn das Dokument in einem Cross-Origin-`<iframe>` ist, wird `children` `null` zurückgeben.

## Beispiele

Sehen Sie sich [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
