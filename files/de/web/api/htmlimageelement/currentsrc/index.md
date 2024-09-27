---
title: "HTMLImageElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: ede85d90bfaf56498e8bce1462167d76b4e1c69f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`currentSrc`** gibt die URL des Bildes an, das derzeit im {{HTMLElement("img")}}-Element dargestellt wird, das es repräsentiert.

## Wert

Ein String, der die vollständige URL des Bildes angibt, das derzeit im {{HTMLElement("img")}}-Element sichtbar ist, das durch das `HTMLImageElement` repräsentiert wird. Dies ist nützlich, wenn Sie mehrere Bildoptionen mit den Eigenschaften [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) und/oder [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset) bereitstellen. `currentSrc` ermöglicht es Ihnen festzustellen, welches Bild aus dem bereitgestellten Set vom Browser ausgewählt wurde.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr bereitgestellt. Eine ist 200px breit und die andere 400px breit. Das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut wird bereitgestellt, um anzugeben, dass das Bild bei einer Viewport-Breite von unter 400px in 50% der Dokumentbreite gezeichnet werden soll; anderenfalls wird das Bild in 90% der Dokumentbreite gezeichnet.

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
