---
title: "HTMLImageElement: width Eigenschaft"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`width`** Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces gibt die Breite an, mit der ein Bild in [CSS-Pixeln](/de/docs/Glossary/CSS_pixel) gezeichnet wird, wenn es auf einem visuellen Medium wie einem Bildschirm oder Drucker dargestellt wird. Andernfalls ist es die natürliche, pixeldichtekorrigierte Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Die Art und Weise, wie die Breite definiert wird, hängt davon ab, ob das Bild auf einem visuellen Medium dargestellt wird:

- Wenn das Bild auf einem visuellen Medium dargestellt wird, wird die Breite in [CSS-Pixeln](/de/docs/Glossary/CSS_pixel) angegeben.
- Wenn das Bild nicht auf einem visuellen Medium dargestellt wird, wird seine Breite unter Verwendung der natürlichen (intrinsischen) Breite des Bildes dargestellt, angepasst an die Darstellungsdichte wie durch [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mithilfe des [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attributs bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut wird verwendet, um die Breite anzugeben, mit der das Bild bei gegebener Bildschirmbreite gezeichnet werden soll.

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

JavaScript betrachtet die `width` Eigenschaft, um die aktuelle Breite des Bildes zu bestimmen. Dies wird in den Event-Handlern [`load`](/de/docs/Web/API/Window/load_event) und [`resize`](/de/docs/Web/API/Window/resize_event) des Fensters durchgeführt, sodass immer die aktuellsten Breiteninformationen verfügbar sind.

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

Dieses Beispiel ist möglicherweise leichter auszuprobieren {{LiveSampleLink('Examples', 'in its own window')}}.

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
