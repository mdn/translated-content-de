---
title: "HTMLVideoElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLVideoElement/width
l10n:
  sourceCommit: 33b0a16f58b83a24a682b469e58f6b78713d0258
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des {{domxref("HTMLVideoElement")}}-Interfaces gibt eine Ganzzahl zurück, die das `width`-Attribut des {{HTMLElement("video")}}-Elements widerspiegelt. Sie gibt die angezeigte Breite der Ressource in CSS-Pixel an.

## Wert

Eine positive Ganzzahl oder 0.

## Beispiele

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.width); // Ausgabe: 800
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLImageElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
