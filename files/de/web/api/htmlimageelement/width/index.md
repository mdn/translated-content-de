---
title: "HTMLImageElement: width Eigenschaft"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

Die **`width`** Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interface zeigt die Breite an, mit der ein Bild in {{Glossary("CSS_pixel", "CSS-Pixeln")}} gezeichnet wird, wenn es auf ein visuelles Medium wie einen Bildschirm oder Drucker gezeichnet oder gerendert wird. Andernfalls ist es die natürliche, pixel-dichte-korrigierte Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Die Art und Weise, wie die Breite definiert ist, hängt davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht, z. B. auf einen Bildschirm oder Drucker:

- Wenn das Bild auf ein visuelles Medium gerendert wird, wird die Breite in
  {{Glossary("CSS_pixel", "CSS-Pixeln")}} ausgedrückt.
- Wenn das Bild nicht auf ein visuelles Medium gerendert wird, wird seine Breite durch die natürliche (intrinsische) Breite des Bildes dargestellt, angepasst an die Anzeigedichte, wie durch [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mit dem
[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut bereitgestellt. Eines ist 200px breit und das andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut wird verwendet, um die Breite anzugeben, mit der das Bild bei gegebener Breite des Viewports gezeichnet werden sollte.

### HTML

Für Viewports bis zu 400px Breite wird das Bild mit einer Breite von 200px gezeichnet. Andernfalls wird es mit 400px gezeichnet.

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

JavaScript betrachtet die `width` Eigenschaft, um die momentane Breite des Bildes zu bestimmen. Dies wird in den [`load`](/de/docs/Web/API/Window/load_event) und [`resize`](/de/docs/Web/API/Window/resize_event) Ereignishandlern des Fensters durchgeführt, sodass immer die aktuellsten Breiteninformationen verfügbar sind.

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

Dieses Beispiel könnte leichter zu versuchen sein {{LiveSampleLink('Examples', 'in its own window')}}.

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
