---
title: "Fenster: mozInnerScreenX-Eigenschaft"
short-title: mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}{{Non-standard_Header}}

Ruft die X-Koordinate der oberen linken Ecke des Viewports des Fensters in Bildschirmkoordinaten ab.

> [!NOTE]
> Diese Koordinate wird in CSS-Pixeln angegeben, nicht in Hardware-Pixeln. Das bedeutet, dass sie von der Zoomstufe beeinflusst werden kann; um die tatsächliche Anzahl physischer Bildschirm-Pixel zu berechnen, sollten Sie die Eigenschaft `nsIDOMWindowUtils.screenPixelsPerCSSPixel` verwenden.

## Wert

Die `window.mozInnerScreenX`-Eigenschaft ist ein Gleitkommawert, der nur gelesen werden kann; sie hat keinen Standardwert.

## Spezifikationen

Kein Teil einer technischen Spezifikation oder Empfehlung des W3C.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.mozInnerScreenY")}}
- `nsIDOMWindowUtils.screenPixelsPerCSSPixel`
