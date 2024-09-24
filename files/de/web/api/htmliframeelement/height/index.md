---
title: "HTMLIFrameElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLIFrameElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des {{domxref("HTMLIFrameElement")}}-Interfaces gibt einen String zurück, der das `height`-Attribut des {{HTMLElement("iframe")}}-Elements widerspiegelt und die Höhe des Rahmens in CSS-Pixeln angibt.

## Wert

Ein String, der die Höhe des Rahmens in CSS-Pixeln angibt.

## Beispiele

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.height); // Ausgabe: '600'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLImageElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
