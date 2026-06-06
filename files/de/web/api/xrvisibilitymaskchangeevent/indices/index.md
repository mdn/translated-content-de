---
title: "XRVisibilityMaskChangeEvent: indices-Eigenschaft"
short-title: indices
slug: Web/API/XRVisibilityMaskChangeEvent/indices
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`indices`** schreibgeschützte Eigenschaft des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Interfaces gibt die Indexposition jedes Koordinatenpaares (nicht des einzelnen Array-Index) innerhalb des [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices)-Arrays an, die die Dreiecke definieren, die verwendet werden, um den derzeit sichtbaren Teil der im [`XRView`](/de/docs/Web/API/XRView) angezeigten Szene zu zeichnen. Wenn dieses Array leer ist, wird der gesamte Bereich des `XRView` gezeichnet.

Die Anzahl der enthaltenen Werte sollte daher ein Vielfaches von drei sein. Siehe [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) für eine ausführlichere Erklärung.

## Wert

Ein [`Uint32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array).

## Beispiele

Siehe die Hauptseite von [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRVisibilityMaskChangeEvent.vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices)
