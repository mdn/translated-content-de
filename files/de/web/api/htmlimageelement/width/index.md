---
title: "HTMLImageElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Breite an, in der ein Bild in {{Glossary("CSS_pixel", "CSS-Pixel")}} gezeichnet wird, wenn es auf ein visuelles Medium wie Bildschirm oder Drucker gezeichnet oder gerendert wird. Andernfalls ist es die natürliche, pixel-dichte-korrigierte Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Die Art und Weise, wie die Breite definiert wird, hängt davon ab, ob das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird:

- Wenn das Bild auf ein visuelles Medium gerendert wird, wird die Breite in
  {{Glossary("CSS_pixel", "CSS-Pixel")}} ausgedrückt.
- Wenn das Bild nicht auf ein visuelles Medium gerendert wird, wird seine Breite mit der natürlichen (intrinsischen) Breite des Bildes dargestellt, angepasst an die Anzeigedichte, wie durch [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mit dem
[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut wird verwendet, um die Breite anzugeben,
bei der das Bild gezeichnet werden soll, abhängig von der Breite des Viewports.

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

JavaScript betrachtet die `width`-Eigenschaft, um die Breite des Bildes im Moment zu bestimmen. Dies wird in den [`load`](/de/docs/Web/API/Window/load_event)- und [`resize`](/de/docs/Web/API/Window/resize_event)-Event-Handlern des Fensters ausgeführt, damit immer die aktuellsten Breiteninformationen verfügbar sind.

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

Dieses Beispiel ist möglicherweise einfacher auszuprobieren {{LiveSampleLink('Examples', 'in its own window')}}.

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
