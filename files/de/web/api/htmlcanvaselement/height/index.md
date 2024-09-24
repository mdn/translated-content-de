---
title: "HTMLCanvasElement: height Eigentum"
short-title: height
slug: Web/API/HTMLCanvasElement/height
l10n:
  sourceCommit: c16ab7959173ec929df57d3916f8f4dbce485709
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.height`**-Eigenschaft ist ein positiver `integer`, der das [`height`](/de/docs/Web/HTML/Element/canvas#height) HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt und in CSS-Pixeln interpretiert wird. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie z.B. einen negativen, gesetzt ist, wird der Standardwert `150` verwendet.

Wenn die `height`-Eigenschaft gesetzt wird, wird der Zeichenpuffer immer auf leer zurückgesetzt – dies gilt für alle Kontexttypen, selbst wenn die Höhe auf denselben Wert gesetzt wird. Wenn Sie den vorherigen Inhalt wiederherstellen möchten, können Sie ihn mit {{domxref("CanvasRenderingContext2D.getImageData()")}} speichern und mit {{domxref("CanvasRenderingContext2D.putImageData()")}} wiederherstellen.

Dies ist eine der beiden Eigenschaften, die andere ist {{domxref("HTMLCanvasElement.width")}}, die die Größe der Leinwand kontrollieren.

## Wert

Eine Zahl.

## Beispiele

Gegeben ist dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Höhe der Leinwand mit folgendem Code abrufen:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}: Schnittstelle zur Definition der `HTMLCanvasElement.height`-Eigenschaft
- {{domxref("HTMLCanvasElement.width")}}: Andere Eigenschaft zur Kontrolle der Größe der Leinwand
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
