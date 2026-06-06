---
title: "XRVisibilityMaskChangeEvent: vertices-Eigenschaft"
short-title: vertices
slug: Web/API/XRVisibilityMaskChangeEvent/vertices
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte **`vertices`**-Eigenschaft der [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Schnittstelle ist ein Array, das alle Koordinatenwerte darstellt, die im Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird die gesamte Region der `XRView` gezeichnet.

## Wert

Ein [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array).

## Beschreibung

Jedes Wertepaar im `vertices`-Array repräsentiert die `x`- und `y`-Koordinatenwerte eines Punktes auf einer flachen Maske im Clip Space. Ein einfaches quadratisches Maske könnte beispielsweise durch folgendes Array dargestellt werden:

```plain
[0, 0, 0, 1, 1, 1, 1, 0]
```

welches die x,y-Koordinaten (0,0), (0,1), (1,1) und (1,0) darstellt. Diese Koordinaten bilden die Grenze der Sichtbarkeitsmaske — den Bereich des Displays, der tatsächlich für den Benutzer sichtbar ist. Alles außerhalb der Maske ist für den Benutzer nicht sichtbar und muss nicht gezeichnet werden. Es kann übersprungen werden, um die Leistung zu verbessern.

Das [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices)-Array gibt die Indexposition jedes Koordinatenpaars (nicht des einzelnen Array-Indext) innerhalb des `vertices`-Arrays an, die die Dreiecke definieren, die verwendet werden, um den derzeit sichtbaren Teil der Szene im `XRView` zu zeichnen. Die Anzahl der enthaltenen Werte sollte daher ein Vielfaches von drei sein. Ein Beispiel für ein `indices`-Array, das sich auf das obige `vertices`-Beispiel bezieht, könnte so aussehen:

```plain
[0,1,2,0,3,2]
```

Das zwei Dreiecke darstellt, die durch die Koordinatenpaare 0, 1 und 2 sowie 0, 3 und 2 repräsentiert werden, die verwendet werden können, um ein einfaches Netz zu erstellen. Die `vertices`- und `indices`-Arrays sind dazu ausgelegt, an eine Grafikbibliothek übergeben zu werden.

## Beispiele

Sehen Sie sich die Hauptseite [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRVisibilityMaskChangeEvent.indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices)
