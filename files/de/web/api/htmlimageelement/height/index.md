---
title: "HTMLImageElement: height Eigenschaft"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: 4a9eae8fc95a8ab75db50443b8e79fc5e5a3e701
---

{{APIRef("HTML DOM")}}

Die **`height`** Eigenschaft des {{domxref("HTMLImageElement")}} Interfaces gibt die Höhe an, in der das Bild gezeichnet wird, in {{Glossary("CSS pixel", "CSS-Pixel")}}, wenn das Bild auf ein visuelles Medium wie den Bildschirm oder einen Drucker gezeichnet oder gerendert wird; andernfalls entspricht sie der natürlichen, pixelartdichtenkorrigierten Höhe des Bildes.

## Wert

Ein ganzzahliger Wert, der die Höhe des Bildes angibt. Die Begriffe, in denen die Höhe definiert ist, hängen davon ab, ob das Bild auf ein visuelles Medium gerendert wird oder nicht.

- Wenn das Bild auf ein visuelles Medium wie einen Bildschirm oder Drucker gerendert wird, wird die Höhe in {{Glossary("CSS pixel", "CSS-Pixel")}} ausgedrückt.
- Andernfalls wird die Höhe des Bildes mit seiner natürlichen (intrinsischen) Höhe dargestellt, die an die Darstellungsdichte angepasst ist, wie durch {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}} angegeben.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr unter Verwendung des [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attributs bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Außerdem wird das [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribut verwendet, um die Breite anzugeben, auf der das Bild abhängig von der Breite des Ansichtsfeldes gezeichnet werden soll.

### HTML

Speziell für Ansichtsfenster bis 400px Breite wird das Bild mit einer Breite von 200px gezeichnet; andernfalls wird es mit 300px gezeichnet.

```html
<p>Bildhöhe: <span class="size">?</span>px (Größe ändern, um zu aktualisieren)</p>
<img
  src="/de/docs/Web/HTML/Element/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /de/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /de/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 300px" />
```

### JavaScript

Der JavaScript-Code prüft die `height`, um die Höhe des Bildes basierend auf der Breite, in der es derzeit gezeichnet wird, zu bestimmen.

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

Dieses Beispiel lässt sich möglicherweise einfacher {{LiveSampleLink('Examples', 'in einem eigenen Fenster')}} ausprobieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
