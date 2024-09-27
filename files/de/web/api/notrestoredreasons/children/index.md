---
title: "NotRestoredReasons: Eigenschaft children"
short-title: children
slug: Web/API/NotRestoredReasons/children
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`children`** der [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Schnittstelle gibt ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten zurück, eines für jedes eingebettete {{htmlelement("iframe")}} im aktuellen Dokument, welches möglicherweise die Gründe enthält, warum der übergeordnete Frame in Bezug auf die Kinderframes blockiert wurde.

Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt — auf diese Weise können beliebig viele Ebenen von eingebetteten `<iframe>`s rekursiv innerhalb des Objekts dargestellt werden.

## Wert

Ein Array von [`NotRestoredReasons`](/de/docs/Web/API/NotRestoredReasons)-Objekten.

Wenn der Frame keine Kinder hat, ist das Array leer; wenn das Dokument in einem cross-origin `<iframe>` ist, gibt `children` `null` zurück.

## Beispiele

Sehen Sie sich [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der bfcache-Blockierungsgründe](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
