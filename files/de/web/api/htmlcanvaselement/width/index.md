---
title: "HTMLCanvasElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: c16ab7959173ec929df57d3916f8f4dbce485709
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.width`**-Eigenschaft ist ein positiver `integer`, der das [`width`](/de/docs/Web/HTML/Element/canvas#width)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements in CSS-Pixeln widerspiegelt. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert wie einen negativen gesetzt ist, wird der Standardwert `300` verwendet.

Wenn die `width`-Eigenschaft gesetzt wird, wird der Zeichenpuffer immer auf leer zurückgesetzt – dies gilt für alle Kontexttypen, und selbst wenn die Breite auf denselben Wert eingestellt wird. Wenn Sie den vorherigen Inhalt wiederherstellen müssen, können Sie ihn über {{domxref("CanvasRenderingContext2D.getImageData()")}} speichern und über {{domxref("CanvasRenderingContext2D.putImageData()")}} wiederherstellen.

Dies ist eine der beiden Eigenschaften, zusammen mit {{domxref("HTMLCanvasElement.height")}}, die die Größe der Leinwand steuern.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Breite des Canvas mit folgendem Code abfragen:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}: Schnittstelle zur Definition der `HTMLCanvasElement.width`-Eigenschaft
- {{domxref("HTMLCanvasElement.height")}}: Andere Eigenschaft zur Steuerung der Größe der Leinwand
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
