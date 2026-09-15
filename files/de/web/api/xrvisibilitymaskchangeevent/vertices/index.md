---
title: "XRVisibilityMaskChangeEvent: vertices-Eigenschaft"
short-title: vertices
slug: Web/API/XRVisibilityMaskChangeEvent/vertices
l10n:
  sourceCommit: 6a5c66fd39deaf266d332f7e04a885751d1d691c
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`vertices`** des Interfaces [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) ist ein Array, das alle Koordinatenwerte darstellt, die in der Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird der gesamte Bereich von `XRView` gezeichnet.

## Wert

Ein {{jsxref("Float32Array")}}.

## Beschreibung

Jedes im Array `vertices` verfügbare Wertepaar stellt die `x`- und `y`-Koordinatenwerte eines Punkts auf einer flachen Maske im Clip Space dar. Beispielsweise könnte eine einfache quadratische Maske durch das folgende Array dargestellt werden:

```plain
[0, 0, 0, 1, 1, 1, 1, 0]
```

Dies stellt die x,y-Koordinaten (0,0), (0,1), (1,1) und (1,0) dar. Diese Koordinaten bilden die Begrenzung der Sichtbarkeitsmaske — den Bereich der Anzeige, der für den Benutzer tatsächlich sichtbar ist. Alles außerhalb der Maske ist für den Benutzer nicht sichtbar und muss nicht gezeichnet werden. Es kann übersprungen werden, um die Leistung zu verbessern.

Das Array [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices) gibt die Indexposition jedes Koordinatenpaars (nicht den einzelnen Array-Index) innerhalb des Arrays `vertices` an, die die Dreiecke definieren, die zum Zeichnen des aktuell sichtbaren Teils der in `XRView` dargestellten Szene verwendet werden. Die Anzahl der enthaltenen Werte sollte daher ein Vielfaches von drei sein. Ein Beispiel für ein Array `indices`, das sich auf das obige Beispiel `vertices` bezieht, könnte so aussehen:

```plain
[0,1,2,0,3,2]
```

Dies stellt zwei Dreiecke dar, die durch die Koordinatenpaare 0, 1 und 2 sowie 0, 3 und 2 repräsentiert werden und zum Erstellen eines grundlegenden Meshes verwendet werden können. Die Arrays `vertices` und `indices` sind dafür vorgesehen, an eine Grafikbibliothek übergeben zu werden.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite zu [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRVisibilityMaskChangeEvent.indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices)
