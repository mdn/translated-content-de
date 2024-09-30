---
title: "Window: mozInnerScreenX-Eigenschaft"
short-title: mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}{{Non-standard_Header}}

Ermittelt die X-Koordinate der oberen linken Ecke des Ansichtsfensters des Fensters, in Bildschirmkoordinaten.

> [!NOTE]
> Diese Koordinate wird in CSS-Pixeln und nicht in Hardware-Pixeln angegeben. Das bedeutet, dass sie vom Zoomlevel beeinflusst werden kann; um die tatsächliche Anzahl physischer Bildschirm-Pixel zu berechnen, sollten Sie die Eigenschaft `nsIDOMWindowUtils.screenPixelsPerCSSPixel` verwenden.

## Wert

Die `window.mozInnerScreenX`-Eigenschaft ist ein Gleitkommawert und schreibgeschützt; sie hat keinen Standardwert.

## Spezifikationen

Teil keiner technischen Spezifikation oder Empfehlung des W3C.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.mozInnerScreenY`](/de/docs/Web/API/Window/mozInnerScreenY)
- `nsIDOMWindowUtils.screenPixelsPerCSSPixel`
