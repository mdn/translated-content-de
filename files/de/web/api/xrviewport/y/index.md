---
title: "XRViewport: y-Eigenschaft"
short-title: "y"
slug: Web/API/XRViewport/y
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Schnittstelle [`XRViewport`](/de/docs/Web/API/XRViewport) verfügt über die Eigenschaft **`y`**, die den Versatz vom unteren Rand der Zieloberfläche (typischerweise ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)) bis zum unteren Rand des Viewports innerhalb der Oberfläche angibt, in die WebXR-Inhalte gerendert werden sollen. Die [`x`](/de/docs/Web/API/XRViewport/x)-Eigenschaft des Viewports identifiziert die `x`-Komponente des Ursprungs, und dieser wird durch die Eigenschaften [`width`](/de/docs/Web/API/XRViewPort/width) und [`height`](/de/docs/Web/API/XRViewport/height) definiert.

## Wert

Der Versatz vom unteren Rand der Rendering-Oberfläche zum unteren Rand des Viewports, in Pixeln.

> [!NOTE]
> Obwohl andere Web-APIs typischerweise davon ausgehen, dass die `y`-Achse am oberen Rand beginnt und mit zunehmendem Abstand nach unten größer wird, kehrt WebGL dies um, sodass `y` größer wird, wenn es nach oben auf dem Bildschirm geht.

## Beispiele

Siehe die Hauptseite von [`XRViewport`](/de/docs/Web/API/XRViewport) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
