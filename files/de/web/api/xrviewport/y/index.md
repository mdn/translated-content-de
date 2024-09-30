---
title: "XRViewport: y-Eigenschaft"
short-title: "y"
slug: Web/API/XRViewport/y
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Schnittstelle [`XRViewport`](/de/docs/Web/API/XRViewport)
enthält die **`y`**-Eigenschaft, die den Versatz von der Unterkante der
Zielfläche (typischerweise ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)) bis zur Unterkante des
Ansichtsfensters innerhalb der Fläche angibt, in die WebXR-Inhalte gerendert werden sollen. Die
Eigenschaft [`x`](/de/docs/Web/API/XRViewport/x) des Ansichtsfensters identifiziert die `x`-Komponente des Ursprungs, und die Dimensionen werden durch die Eigenschaften [`width`](/de/docs/Web/API/XRViewport/width)
und [`height`](/de/docs/Web/API/XRViewport/height) angegeben.

## Wert

Der Versatz von der Unterkante der Rendering-Fläche bis zur Unterkante des
Ansichtsfensters, in Pixeln.

> [!NOTE]
> Obwohl andere Web-APIs typischerweise die `y`-Achse am oberen Bildschirmrand beginnen und nach unten hin wachsen lassen, kehrt WebGL dies um,
> mit `y`, das nach oben auf dem Bildschirm größer wird.

## Beispiele

Siehe die Hauptseite zu [`XRViewport`](/de/docs/Web/API/XRViewport) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
