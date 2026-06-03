---
title: "XRVisibilityMaskChangeEvent: Eigenschaften des indices"
short-title: indices
slug: Web/API/XRVisibilityMaskChangeEvent/indices
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`indices`**-Eigenschaft der [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Schnittstelle ist schreibgeschützt und gibt die Indexposition jedes Koordinatenpaares (nicht den einzelnen Array-Index) innerhalb des [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices)-Arrays an, das die Dreiecke definiert, die den aktuell sichtbaren Teil der Szene darstellen, der im [`XRView`](/de/docs/Web/API/XRView) angezeigt wird. Wenn dieses Array leer ist, wird der gesamte Bereich des `XRView` gezeichnet.

Die Anzahl der enthaltenen Werte sollte daher ein Vielfaches von drei sein. Siehe [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) für mehr Erklärung.

## Wert

Ein [`Uint32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array).

## Beispiele

Siehe die Hauptseite [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRVisibilityMaskChangeEvent.vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices)
