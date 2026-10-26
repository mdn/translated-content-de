---
title: "PerformanceContainerTiming: size-Eigenschaft"
short-title: size
slug: Web/API/PerformanceContainerTiming/size
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`size`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt die Gesamtfläche des kumulierten gerenderten Bereichs des Containers zurück, berechnet ab dem Zeitpunkt, an dem der Container-Root registriert wurde.

## Wert

Eine Ganzzahl, die eine kumulierte Fläche in CSS-Quadratpixeln angibt.

## Beschreibung

`size` berücksichtigt nur die tatsächlich gerenderte Fläche innerhalb des Containers und lässt Inhalte aus, die sich zum Zeitpunkt ihres Renderns außerhalb des Viewports befanden.
Dies unterscheidet sich von [`intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect): Diese Eigenschaft beschreibt ein einzelnes umschließendes Rechteck und kann daher auch Bereiche enthalten, in denen nichts gerendert wurde.
Zusammen mit `intersectionRect` liefert `size` einen nützlichen _Anhaltspunkt_ dafür, wie viel von einem Container bisher gerendert und sichtbar geworden ist.
Die Eigenschaft kann auch beim Debuggen verwendet werden, um zu prüfen, ob Inhalte eines Containers innerhalb des Viewports gerendert werden.

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
