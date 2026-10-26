---
title: "PerformanceContainerTiming: presentationTime-Eigenschaft"
short-title: presentationTime
slug: Web/API/PerformanceContainerTiming/presentationTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`presentationTime`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem der neu gerenderte Inhalt des Containers tatsächlich auf dem Bildschirm angezeigt wurde.

Der Wert von `presentationTime` kann `null` sein: Der zugrunde liegende Zeitstempel ist implementierungsabhängig. Browser, die ihn nicht bereitstellen, geben daher `null` zurück.
Da [`PerformanceContainerTiming.paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) in allen Implementierungen auf dieselbe Weise bereitgestellt wird, ist dieser Wert für Metriken, die browserübergreifend vergleichbar sein müssen, zuverlässiger.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) oder {{jsxref("null")}}, wenn der Wert nicht verfügbar gemacht wird.

## Beispiele

Siehe [Beobachten, wie sich Einträge ändern, wenn ein Container wächst](/de/docs/Web/API/PerformanceContainerTiming#observing_how_entries_change_as_a_container_grows).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime)
