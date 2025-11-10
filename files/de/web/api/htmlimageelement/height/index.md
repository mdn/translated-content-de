---
title: "HTMLImageElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Höhe an, in der das Bild gezeichnet wird, in {{Glossary("CSS_pixel", "CSS-Pixel")}}, wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gezeichnet oder gerendert wird. Andernfalls ist es die natürliche, pixelgenau korrigierte Höhe des Bildes.

## Wert

Ein ganzzahliger Wert, der die Höhe des Bildes angibt. Die Art und Weise, wie die Höhe definiert wird, hängt davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Höhe in {{Glossary("CSS_pixel", "CSS-Pixel")}} ausgedrückt.
- Andernfalls wird die Höhe des Bildes unter Verwendung seiner natürlichen (intrinsischen) Höhe dargestellt, angepasst an die Anzeigedichte, wie durch [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mit dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Darüber hinaus wird das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut bereitgestellt, um die Breite anzugeben, mit der das Bild in Anbetracht der Breite des Ansichtsfensters gezeichnet werden soll.

### HTML

Für Ansichtsfenster bis zu einer Breite von 400px wird das Bild mit einer Breite von 200px gezeichnet. Andernfalls wird es mit 400px gezeichnet.

```html
<p>Image height: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(width <= 400px) 200px, 300px" />
```

### JavaScript

Der JavaScript-Code betrachtet die `height`, um die Höhe des Bildes zu bestimmen, gegeben die Breite, mit der es gerade gezeichnet wird.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateHeight = () => {
  output.innerText = clockImage.height;
};

updateHeight();
window.addEventListener("resize", updateHeight);
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 450)}}

Dieses Beispiel lässt sich möglicherweise leichter {{LiveSampleLink('Examples', 'in its own window')}} ausprobieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight)
- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height)
- [`HTMLEmbedElement.height`](/de/docs/Web/API/HTMLEmbedElement/height)
- [`HTMLIFrameElement.height`](/de/docs/Web/API/HTMLIFrameElement/height)
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
- [`HTMLSourceElement.height`](/de/docs/Web/API/HTMLSourceElement/height)
- [`HTMLVideoElement.height`](/de/docs/Web/API/HTMLVideoElement/height)
