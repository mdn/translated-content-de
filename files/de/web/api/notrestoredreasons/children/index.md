---
title: "NotRestoredReasons: children-Eigenschaft"
short-title: children
slug: Web/API/NotRestoredReasons/children
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`children`** schreibgeschützte Eigenschaft der {{domxref("NotRestoredReasons")}}-Schnittstelle gibt ein Array von {{domxref("NotRestoredReasons")}}-Objekten zurück, eines für jedes in das aktuelle Dokument eingebettete Kind-{{htmlelement("iframe")}}, das Gründe enthalten kann, warum das übergeordnete Frame in Bezug auf die Kind-Frames blockiert wurde.

Jedes Objekt hat dieselbe Struktur wie das übergeordnete Objekt – auf diese Weise kann jede Anzahl von Ebenen eingebetteter `<iframe>`s rekursiv innerhalb des Objekts dargestellt werden.

## Wert

Ein Array von {{domxref("NotRestoredReasons")}}-Objekten.

Wenn das Frame keine Kinder hat, wird das Array leer sein; wenn sich das Dokument in einem plattformübergreifenden `<iframe>` befindet, wird `children` `null` zurückgeben.

## Beispiele

Siehe [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockierungsgründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
