---
title: "HTMLImageElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Breite an, mit der ein Bild in {{Glossary("CSS_pixel", "CSS-Pixeln")}} gezeichnet wird, wenn es in einem visuellen Medium wie einem Bildschirm oder Drucker dargestellt oder gerendert wird. Andernfalls ist es die natürliche, an die Pixeldichte angepasste Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Die Art und Weise, wie die Breite definiert wird, hängt davon ab, ob das Bild in einem visuellen Medium gerendert wird oder nicht, wie z.B. ein Bildschirm oder Drucker:

- Wenn das Bild in einem visuellen Medium gerendert wird, wird die Breite in {{Glossary("CSS_pixel", "CSS-Pixeln")}} ausgedrückt.
- Wenn das Bild nicht in einem visuellen Medium gerendert wird, wird seine Breite unter Verwendung der natürlichen (intrinsischen) Breite des Bildes dargestellt, angepasst an die Anzeigedichte, wie durch [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) angezeigt.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mit dem [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut wird verwendet, um die Breite anzugeben, mit der das Bild gezeichnet werden sollte, basierend auf der Breite des Viewports.

### HTML

Für Viewports bis zu einer Breite von 400px wird das Bild mit einer Breite von 200px gezeichnet. Andernfalls wird es mit 400px gezeichnet.

```html
<p>Image width: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 400px" />
```

### JavaScript

JavaScript überprüft die `width`-Eigenschaft, um die Breite des Bildes im aktuellen Moment zu bestimmen. Dies erfolgt in den [`load`](/de/docs/Web/API/Window/load_event)- und [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignishandlern des Fensters, sodass stets die aktuellsten Breiteninformationen verfügbar sind.

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateWidth = (event) => {
  output.innerText = clockImage.width;
};

window.addEventListener("load", updateWidth);
window.addEventListener("resize", updateWidth);
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 450)}}

Dieses Beispiel lässt sich möglicherweise einfacher {{LiveSampleLink('Examples', 'in einem eigenen Fenster')}} ausprobieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.width`](/de/docs/Web/API/HTMLCanvasElement/width)
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
