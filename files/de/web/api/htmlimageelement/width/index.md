---
title: "HTMLImageElement: width property"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces gibt die Breite an, mit der ein Bild in [CSS-Pixel](/de/docs/Glossary/CSS_pixel) gezeichnet wird, wenn es auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird. Andernfalls ist es die natürliche, an die Pixeldichte angepasste Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Wie die Breite definiert ist, hängt davon ab, ob das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird oder nicht:

- Wenn das Bild auf ein visuelles Medium gerendert wird, wird die Breite in [CSS-Pixel](/de/docs/Glossary/CSS_pixel) angegeben.
- Wenn das Bild nicht auf ein visuelles Medium gerendert wird, wird seine Breite unter Verwendung der natürlichen (intrinsischen) Breite, angepasst an die Anzeige-Dichte, wie durch [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) angezeigt, dargestellt.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mittels des [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attributs bereitgestellt. Eine ist 200px breit und die andere 400px breit. Das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut wird verwendet, um die Breite anzugeben, mit der das Bild in Abhängigkeit von der Breite des Viewports gezeichnet werden soll.

### HTML

Für Viewports bis zu 400px Breite wird das Bild mit einer Breite von 200px gezeichnet. Andernfalls wird es mit 400px gezeichnet.

```html
<p>Image width: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 400px" />
```

### JavaScript

JavaScript betrachtet die `width`-Eigenschaft, um die Breite des Bildes zum aktuellen Zeitpunkt zu bestimmen. Dies wird in den [`load`](/de/docs/Web/API/Window/load_event)- und [`resize`](/de/docs/Web/API/Window/resize_event)-Ereignishandlern des Fensters durchgeführt, damit immer die aktuellsten Breiteninformationen verfügbar sind.

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

Dieses Beispiel lässt sich einfacher ausprobieren {{LiveSampleLink('Examples', 'in its own window')}}.

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
