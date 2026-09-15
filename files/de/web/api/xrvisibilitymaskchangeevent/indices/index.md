---
title: "XRVisibilityMaskChangeEvent: indices-Eigenschaft"
short-title: indices
slug: Web/API/XRVisibilityMaskChangeEvent/indices
l10n:
  sourceCommit: 6a5c66fd39deaf266d332f7e04a885751d1d691c
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`indices`** des Interfaces [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) gibt die Indexposition jedes Koordinatenpaars (nicht den einzelnen Array-Index) innerhalb des Arrays [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) an, das die Dreiecke definiert, die zum Zeichnen des aktuell sichtbaren Teils der im [`XRView`](/de/docs/Web/API/XRView) angezeigten Szene verwendet werden. Wenn dieses Array leer ist, wird der gesamte Bereich des `XRView` gezeichnet.

Die Anzahl der enthaltenen Werte sollte daher ein Vielfaches von drei sein. Weitere Erläuterungen finden Sie unter [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices).

## Wert

Ein {{jsxref("Uint32Array")}}.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite zu [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRVisibilityMaskChangeEvent.vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices)
