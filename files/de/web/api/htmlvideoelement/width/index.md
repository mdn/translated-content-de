---
title: "HTMLVideoElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLVideoElement/width
l10n:
  sourceCommit: 33b0a16f58b83a24a682b469e58f6b78713d0258
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces gibt eine ganze Zahl zurück, die das `width`-Attribut des {{HTMLElement("video")}}-Elements widerspiegelt und die angezeigte Breite der Ressource in CSS-Pixeln angibt.

## Wert

Eine positive ganze Zahl oder 0.

## Beispiele

```html
<video id="media" width="800" height="600"></video>
```

```js
const el = document.getElementById("media");
console.log(el.width); // Output: 800
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
