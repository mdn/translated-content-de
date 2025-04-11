---
title: "HTMLImageElement: height Eigenschaft"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

{{APIRef("HTML DOM")}}

Die **`height`** Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces gibt die Höhe an, in der das Bild gezeichnet wird, in {{Glossary("CSS_pixel", "CSS-Pixeln")}}, wenn das Bild auf ein visuelles Medium wie Bildschirm oder Drucker gezeichnet oder gerendert wird; andernfalls handelt es sich um die natürliche, pixel-dichte-korrigierte Höhe des Bildes.

## Wert

Ein ganzzahliger Wert, der die Höhe des Bildes angibt. Die Begriffe, in denen die Höhe definiert ist, hängen davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Höhe in {{Glossary("CSS_pixel", "CSS-Pixeln")}} ausgedrückt.
- Andernfalls wird die Höhe des Bildes mit der natürlichen (intrinsischen) Höhe dargestellt, die an die Anzeigedichte angepasst ist, wie durch
  [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) angegeben.

## Beispiele

In diesem Beispiel werden zwei unterschiedliche Größen für ein Bild einer Uhr mit dem
[`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Weiterhin wird das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut bereitgestellt, um die Breite anzugeben, mit der das Bild gezeichnet werden soll, basierend auf der Breite des Ansichtsfensters.

### HTML

Speziell für Ansichtsfenster, die bis zu 400px breit sind, wird das Bild mit einer Breite von 200px gezeichnet;
andersfalls wird es mit 300px gezeichnet.

```html
<p>Image height: <span class="size">?</span>px (resize to update)</p>
<img
  src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 300px" />
```

### JavaScript

Der JavaScript-Code betrachtet die `height`, um die Höhe des
Bildes zu bestimmen, gemessen an der Breite, mit der es derzeit gezeichnet wird.

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

Dieses Beispiel kann einfacher ausprobiert werden {{LiveSampleLink('Examples', 'in einem eigenen Fenster')}}.

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
