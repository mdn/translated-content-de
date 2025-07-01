---
title: "HTMLImageElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die Höhe an, in der das Bild gezeichnet wird, in {{Glossary("CSS_pixel", "CSS-Pixel")}}, wenn das Bild auf ein visuelles Medium wie den Bildschirm oder einen Drucker gezeichnet oder gerendert wird; andernfalls ist es die natürliche, an die Pixeldichte angepasste Höhe des Bildes.

## Wert

Ein ganzzahliger Wert, der die Höhe des Bildes angibt. Die Bedingungen, unter denen die Höhe definiert ist, hängen davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Höhe in {{Glossary("CSS_pixel", "CSS-Pixel")}} ausgedrückt.
- Andernfalls wird die Höhe des Bildes unter Verwendung seiner natürlichen (intrinsischen) Höhe dargestellt, angepasst an die Displaydichte, wie durch
  [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) angegeben.

## Beispiele

In diesem Beispiel werden zwei unterschiedliche Größen für ein Bild einer Uhr mit dem
[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut angegeben. Eine ist 200px breit, die andere ist 400px breit. Weiterhin wird das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut angegeben, um die Breite zu spezifizieren, in der das Bild gezeichnet werden sollte, basierend auf der Breite des Viewports.

### HTML

Speziell für Viewports bis zu 400px Breite wird das Bild mit einer Breite von 200px gezeichnet; andernfalls wird es mit 300px gezeichnet.

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

Der JavaScript-Code betrachtet die `height`, um die Höhe des Bildes zu bestimmen, basierend auf der Breite, in der es momentan gezeichnet wird.

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

Dieses Beispiel kann einfacher ausprobiert werden {{LiveSampleLink('Examples', 'in his own window')}}.

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
