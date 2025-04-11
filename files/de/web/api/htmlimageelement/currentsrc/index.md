---
title: "HTMLImageElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`currentSrc`** gibt die URL des Bildes an, das aktuell im {{HTMLElement("img")}}-Element dargestellt wird.

## Wert

Ein String, der die vollständige URL des Bildes angibt, das aktuell im durch das `HTMLImageElement` dargestellten {{HTMLElement("img")}}-Element sichtbar ist. Dies ist nützlich, wenn Sie mehrere Bildoptionen mit den [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)- und/oder [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Eigenschaften bereitstellen. `currentSrc` ermöglicht es Ihnen, festzustellen, welches Bild aus dem bereitgestellten Bildsatz vom Browser ausgewählt wurde.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut wird bereitgestellt, um anzuzeigen, dass das Bild bei 50% der Dokumentbreite gezeichnet werden soll, wenn der Viewport unter 400px breit ist. Andernfalls wird das Bild bei 90% Breite des Dokuments gezeichnet.

### HTML

```html
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 50%, 90%" />
```

### JavaScript

```js
const clockImage = document.querySelector("img");
const p = document.createElement("p");

p.textContent = clockImage.currentSrc.endsWith("200px.png")
  ? "Using the 200px image!"
  : "Using the 400px image.";
document.body.appendChild(p);
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 370)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
