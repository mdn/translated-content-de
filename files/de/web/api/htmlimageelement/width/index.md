---
title: "HTMLImageElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLImageElement/width
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des {{domxref("HTMLImageElement")}}-Interfaces gibt die Breite an, mit der ein Bild in {{Glossary("CSS pixel", "CSS-Pixel")}} gezeichnet wird, wenn es in ein visuelles Medium wie einen Bildschirm oder Drucker gezeichnet oder gerendert wird. Andernfalls ist es die natürliche, pixel-dichte-korrigierte Breite des Bildes.

## Wert

Ein ganzzahliger Wert, der die Breite des Bildes angibt. Die Art und Weise, wie die Breite definiert ist, hängt davon ab, ob das Bild in ein visuelles Medium gerendert wird oder nicht, wie zum Beispiel ein Bildschirm oder ein Drucker:

- Wenn das Bild in ein visuelles Medium gerendert wird, wird die Breite in {{Glossary("CSS pixel", "CSS-Pixel")}} angegeben.
- Wenn das Bild nicht in ein visuelles Medium gerendert wird, wird seine Breite anhand der natürlichen (intrinsischen) Breite des Bildes dargestellt, angepasst an die Anzeigedichte, wie durch {{domxref("HTMLImageElement.naturalWidth", "naturalWidth")}} angezeigt.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr mithilfe des [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attributs bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut wird verwendet, um die Breite anzugeben, bei der das Bild gezeichnet werden soll, abhängig von der Breite des Ansichtsfensters.

### HTML

Für Ansichtsfenster bis zu 400px Breite wird das Bild in einer Breite von 200px gezeichnet. Andernfalls wird es in 400px gezeichnet.

```html
<p>Bildbreite: <span class="size">?</span>px (vergrößern, um zu aktualisieren)</p>
<img
  src="/de/docs/Web/HTML/Element/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /de/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /de/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 400px" />
```

### JavaScript

JavaScript betrachtet die `width`-Eigenschaft, um die Breite des Bildes im Moment zu bestimmen. Dies wird in den {{domxref("Window.load_event", "load")}}- und {{domxref("Window.resize_event", "resize")}}-Ereignishandlern des Fensters durchgeführt, damit immer die aktuellsten Breiteninformationen verfügbar sind.

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

Dieses Beispiel könnte einfacher {{LiveSampleLink('Examples', 'in seinem eigenen Fenster')}} auszuprobieren sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.width")}}
- {{domxref("HTMLEmbedElement.width")}}
- {{domxref("HTMLIFrameElement.width")}}
- {{domxref("HTMLObjectElement.width")}}
- {{domxref("HTMLSourceElement.width")}}
- {{domxref("HTMLVideoElement.width")}}
