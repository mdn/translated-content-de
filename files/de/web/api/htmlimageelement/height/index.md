---
title: "HTMLImageElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Höhe an, in der das Bild gezeichnet wird, in {{Glossary("CSS_pixel", "CSS-Pixel")}}, wenn das Bild auf ein visuelles Medium wie den Bildschirm oder einen Drucker gezeichnet oder gerendert wird; andernfalls entspricht es der natürlichen, pixelkorrekturgerechten Höhe des Bildes.

## Wert

Ein ganzzahliger Wert, der die Höhe des Bildes angibt. Die Begriffe, in denen die Höhe definiert ist, hängen davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Höhe in {{Glossary("CSS_pixel", "CSS-Pixel")}} ausgedrückt.
- Andernfalls wird die Höhe des Bildes mit seiner natürlichen (intrinsischen) Höhe dargestellt, angepasst an die Anzeigedichte, wie durch [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mithilfe des [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attributes bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Weiterhin wird das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut verwendet, um die Breite anzugeben, in der das Bild gezeichnet werden soll, basierend auf der Breite des Viewports.

### HTML

Speziell für Viewports bis zu 400px Breite wird das Bild mit einer Breite von 200px gezeichnet; andernfalls wird es mit einer Breite von 300px gezeichnet.

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

Der JavaScript-Code schaut sich die `height`-Eigenschaft an, um die Höhe des Bildes basierend auf der Breite zu bestimmen, in der es derzeit gezeichnet wird.

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

Dieses Beispiel könnte leichter ausprobiert werden {{LiveSampleLink('Examples', 'in its own window')}}.

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
