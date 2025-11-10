---
title: "HTMLImageElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt die Breite an, in der das Bild gezeichnet wird, in {{Glossary("CSS_pixel", "CSS-Pixel")}}, wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gezeichnet oder gerendert wird. Andernfalls ist es die natürliche, an die Pixeldichte angepasste Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Die Art und Weise, wie die Breite definiert ist, hängt davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Breite in {{Glossary("CSS_pixel", "CSS-Pixel")}} angegeben.
- Andernfalls wird die Breite des Bildes unter Verwendung seiner natürlichen (intrinsischen) Breite dargestellt, angepasst an die Anzeigedichte, wie durch [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mit dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Außerdem wird das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut bereitgestellt, um die Breite anzugeben, in der das Bild gezeichnet werden soll, abhängig von der Breite des Viewports.

### HTML

Für Viewports bis zu einer Breite von 400px wird das Bild in einer Breite von 200px gezeichnet. Andernfalls wird es in 400px gezeichnet.

```html
<p>Image width: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(width <= 400px) 200px, 400px" />
```

### JavaScript

Der JavaScript-Code betrachtet die `height`, um die Höhe des Bildes angesichts der Breite, in der es derzeit gezeichnet wird, zu bestimmen.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateWidth = () => {
  output.innerText = clockImage.width;
};

updateWidth();
window.addEventListener("resize", updateWidth);
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 450)}}

Dieses Beispiel ist möglicherweise einfacher {{LiveSampleLink('Examples', 'in its own window')}} auszuprobieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth)
- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
