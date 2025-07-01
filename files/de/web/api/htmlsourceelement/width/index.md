---
title: "HTMLSourceElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLSourceElement/width
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement) Interface ist eine nicht-negative Zahl, die die Breite der Bildressource in CSS-Pixel angibt.

Die Eigenschaft hat nur dann eine Wirkung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.

Sie spiegelt das `width`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Eine nicht-negative Zahl, die die Breite der Bildressource in CSS-Pixel angibt.

## Beispiele

```html
<picture id="img">
  <source
    srcset="landscape.png"
    media="(width >= 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(width >= 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(width >= 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image used when the browser does not support the sources"
    width="500"
    height="400" />
</picture>
```

```js
const img = document.getElementById("img");
const sources = img.querySelectorAll("source");
console.log(Array.from(sources).map((el) => el.width)); // Output: [1000, 800, 600]
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
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
