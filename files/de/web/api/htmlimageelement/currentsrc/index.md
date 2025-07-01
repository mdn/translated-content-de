---
title: "HTMLImageElement: `currentSrc`-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) **`currentSrc`** gibt die URL des Bildes an, das derzeit im {{HTMLElement("img")}}-Element dargestellt wird, das es repräsentiert.

## Wert

Ein String, der die vollständige URL des Bildes angibt, das aktuell im durch das `HTMLImageElement` repräsentierten {{HTMLElement("img")}}-Element sichtbar ist. Dies ist nützlich, wenn Sie mehrere Bildoptionen mit den Eigenschaften [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) und/oder [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset) bereitstellen. `currentSrc` ermöglicht es Ihnen zu bestimmen, welches Bild aus der bereitgestellten Menge von Bildern vom Browser ausgewählt wurde.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut wird bereitgestellt, um anzugeben, dass das Bild bei einer Breite von 50 % des Dokuments gezeichnet werden soll, wenn der Viewport weniger als 400px breit ist; andernfalls wird das Bild bei 90 % der Breite des Dokuments gezeichnet.

### HTML

```html
<img
  src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 400w
  "
  sizes="(width <= 400px) 50%, 90%" />
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
