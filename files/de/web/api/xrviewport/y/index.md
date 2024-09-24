---
title: "XRViewport: y-Eigenschaft"
short-title: "y"
slug: Web/API/XRViewport/y
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`y`**-Eigenschaft der {{domxref("XRViewport")}}-Schnittstelle gibt den Versatz von der unteren Kante der Zieloberfläche (typischerweise eine {{domxref("XRWebGLLayer")}}) zur unteren Kante des Viewports innerhalb der Oberfläche an, in die WebXR-Inhalte gerendert werden sollen. Die {{domxref("XRViewport.x", "x")}}-Eigenschaft des Viewports identifiziert die `x`-Komponente des Ursprungs, und wird durch die Eigenschaften {{domxref("XRViewPort.width", "width")}} und {{domxref("XRViewport.height", "height")}} angegeben.

## Wert

Der Versatz von der unteren Kante der Rendering-Oberfläche zur unteren Kante des Viewports, in Pixeln.

> [!NOTE]
> Obwohl andere Web-APIs typischerweise die `y`-Achse als beginnend oben und nach unten hin wachsend betrachten, kehrt WebGL dies um, wobei `y` nach oben hin auf dem Bildschirm größer wird.

## Beispiele

Siehe die Hauptseite von {{domxref("XRViewport")}} für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
