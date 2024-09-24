---
title: "HTMLIFrameElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLIFrameElement/width
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft der {{domxref("HTMLIFrameElement")}}-Schnittstelle gibt einen String zurück, der das `width`-Attribut des {{HTMLElement("iframe")}}-Elements widerspiegelt und die Breite des Rahmens in CSS-Pixeln angibt.

## Wert

Ein String, der die Breite des Rahmens in CSS-Pixeln angibt.

## Beispiele

```html
<iframe id="el" width="800" height="600"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.width); // Ausgabe: '800'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
