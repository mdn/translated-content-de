---
title: "XRVisibilityMaskChangeEvent: vertices-Eigenschaft"
short-title: vertices
slug: Web/API/XRVisibilityMaskChangeEvent/vertices
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`vertices`**-Eigenschaft des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Interfaces ist ein Array, das alle Koordinatenwerte repräsentiert, die in der Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird der gesamte Bereich der `XRView` gezeichnet.

## Wert

Ein [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array).

## Beschreibung

Jedes Paar von Werten im `vertices`-Array stellt die `x`- und `y`-Koordinatenwerte eines Punktes auf einer flachen Maske im Clipraum dar. Zum Beispiel könnte eine einfache quadratische Maske durch das folgende Array dargestellt werden:

```plain
[0, 0, 0, 1, 1, 1, 1, 0]
```

Das repräsentiert die x,y-Koordinaten (0,0), (0,1), (1,1) und (1,0). Diese Koordinaten sind die Grenze der Sichtbarkeitsmaske — der Bereich des Displays, der tatsächlich für den Benutzer sichtbar ist. Alles außerhalb der Maske ist für den Benutzer nicht sichtbar und muss nicht gezeichnet werden. Es kann übersprungen werden, um die Leistung zu verbessern.

Das [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices)-Array gibt die Indexposition jedes Koordinatenpaars (nicht den einzelnen Array-Index) innerhalb des `vertices`-Arrays an, das die Dreiecke definiert, die verwendet werden, um den derzeit sichtbaren Teil der Szene darzustellen, die in der `XRView` angezeigt wird. Die Anzahl der enthaltenen Werte sollte daher ein Vielfaches von drei sein. Ein Beispiel für ein `indices`-Array, das zu dem obigen `vertices`-Beispiel gehört, könnte wie folgt aussehen:

```plain
[0,1,2,0,3,2]
```

Das repräsentiert zwei Dreiecke, die durch die Koordinatenpaare 0, 1 und 2 sowie 0, 3 und 2 dargestellt werden, welche verwendet werden können, um ein einfaches Mesh zu erstellen. Die `vertices`- und `indices`-Arrays sind dafür ausgelegt, an eine Grafikbibliothek übergeben zu werden.

## Beispiele

Siehe die Hauptseite [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRVisibilityMaskChangeEvent.indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices)
