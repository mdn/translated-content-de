---
title: "PerformanceContainerTiming: Eigenschaft size"
short-title: size
slug: Web/API/PerformanceContainerTiming/size
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`size`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt die Gesamtfläche des kumulierten gerenderten Bereichs eines Containers zurück, berechnet ab dem Zeitpunkt, zu dem die Containerwurzel registriert wurde.

## Wert

Eine Ganzzahl, die eine kumulierte Fläche in CSS-Quadratpixeln angibt.

## Beschreibung

`size` berücksichtigt nur die tatsächlich gerenderte Fläche innerhalb des Containers. Inhalte, die sich zum Zeitpunkt ihres Renderings außerhalb des Viewports befanden, werden nicht berücksichtigt.
Darin unterscheidet sich `size` von [`intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect): Diese Eigenschaft beschreibt ein einzelnes umschließendes Rechteck und kann daher auch Bereiche enthalten, in denen nichts gerendert wurde.
Zusammen mit `intersectionRect` liefert `size` einen nützlichen _Anhaltspunkt_ dafür, wie viel eines Containers bisher gerendert und sichtbar geworden ist.
Beim Debugging lässt sich damit auch prüfen, ob Inhalte eines Containers innerhalb des Viewports gerendert werden.

Weitere Informationen finden Sie unter [Wann werden Einträge erzeugt?](/de/docs/Web/API/PerformanceContainerTiming#when_are_entries_generated) in `PerformanceContainerTiming`.

## Beispiele

Siehe [Beobachten, dass nur sichtbare Renderings gezählt werden](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect#observing_that_only_visible_paints_are_counted) unter [`PerformanceContainerTiming.intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect)
- [`PerformanceContainerTiming.firstRenderTime`](/de/docs/Web/API/PerformanceContainerTiming/firstRenderTime)
