---
title: "HTMLSourceElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLSourceElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft der [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Schnittstelle ist eine nicht-negative Zahl, die die Höhe der Bildressource in CSS-Pixeln angibt.

Die Eigenschaft hat nur dann eine Wirkung, wenn das übergeordnete Element des aktuellen {{HTMLElement("source")}}-Elements ein {{HTMLElement("picture")}}-Element ist.

Sie spiegelt das `height`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Eine nicht-negative Zahl, die die Höhe der Bildressource in CSS-Pixeln angibt.

## Beispiele

```html
<picture id="img">
  <source
    srcset="landscape.png"
    media="(min-width: 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(min-width: 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(min-width: 600px)"
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
console.log(Array.from(sources).map((el) => el.height)); // Output: [400, 800, 800]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
