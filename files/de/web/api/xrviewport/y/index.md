---
title: "XRViewport: y-Eigenschaft"
short-title: y
slug: Web/API/XRViewport/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRViewport`](/de/docs/Web/API/XRViewport)-Schnittstelle besitzt die **`y`**-Eigenschaft, die den Versatz von der unteren Kante der Zieloberfläche (typischerweise ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)) zur unteren Kante des Ansichtsbereichs innerhalb der Oberfläche angibt, in die WebXR-Inhalte gerendert werden sollen. Die [`x`](/de/docs/Web/API/XRViewport/x)-Eigenschaft des Ansichtsbereichs identifiziert die `x`-Komponente des Ursprungs, und dieser wird durch die [`width`](/de/docs/Web/API/XRViewport/width)- und [`height`](/de/docs/Web/API/XRViewport/height)-Eigenschaften definiert.

## Wert

Der Versatz von der unteren Kante der Rendering-Oberfläche zur unteren Kante des Ansichtsbereichs, in Pixeln.

> [!NOTE]
> Obwohl andere Web-APIs typischerweise die `y`-Achse am oberen Rand beginnen lassen und diese in Richtung nach unten größer wird, kehrt WebGL dies um, sodass `y` größer wird, während es sich nach oben auf dem Bildschirm bewegt.

## Beispiele

Beispiele finden Sie auf der Hauptseite von [`XRViewport`](/de/docs/Web/API/XRViewport).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
