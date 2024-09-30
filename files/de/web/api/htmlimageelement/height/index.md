---
title: "HTMLImageElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: 4a9eae8fc95a8ab75db50443b8e79fc5e5a3e701
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Höhe an, in der das Bild gezeichnet wird, in [CSS-Pixel](/de/docs/Glossary/CSS_pixel), wenn das Bild auf ein visuelles Medium wie den Bildschirm oder einen Drucker gezeichnet oder gerendert wird; andernfalls ist es die natürliche, für die Pixeldichte korrigierte Höhe des Bildes.

## Wert

Ein ganzzahliger Wert, der die Höhe des Bildes angibt. Die Maßeinheit, in der die Höhe definiert ist, hängt davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Höhe in [CSS-Pixel](/de/docs/Glossary/CSS_pixel) angegeben.
- Andernfalls wird die Höhe des Bildes mit seiner natürlichen (intrinsischen) Höhe dargestellt, angepasst an die Anzeigedichte, wie durch
  [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) angezeigt.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr unter Verwendung des `[`srcset`](/de/docs/Web/HTML/Element/img#srcset)`-Attributs bereitgestellt. Eine ist 200 Pixel breit und die andere ist 400 Pixel breit. Darüber hinaus wird das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut verwendet, um die Breite anzugeben, in der das Bild bei gegebener Breite des Viewports gezeichnet werden soll.

### HTML

Konkret wird für Viewports bis zu 400px Breite das Bild mit einer Breite von 200px gezeichnet; andernfalls wird es mit 300px gezeichnet.

```html
<p>Image height: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 300px" />
```

### JavaScript

Der JavaScript-Code betrachtet die `height`, um die Höhe des Bildes angesichts der Breite zu bestimmen, in der es derzeit gezeichnet wird.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateHeight = (event) => {
  output.innerText = clockImage.height;
};

window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 450)}}

Dieses Beispiel ist vielleicht einfacher auszuprobieren {{LiveSampleLink('Examples', 'in its own window')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
