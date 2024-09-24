---
title: "HTMLImageElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: ede85d90bfaf56498e8bce1462167d76b4e1c69f
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte {{domxref("HTMLImageElement")}}-Eigenschaft **`currentSrc`** gibt die URL des Bildes an, das aktuell im {{HTMLElement("img")}}-Element, das sie repräsentiert, angezeigt wird.

## Wert

Ein String, der die vollständige URL des aktuell sichtbaren Bildes im {{HTMLElement("img")}}-Element, das durch das `HTMLImageElement` repräsentiert wird, angibt. Dies ist nützlich, wenn Sie mit den {{domxref("HTMLImageElement.sizes", "sizes")}}- und/oder {{domxref("HTMLImageElement.srcset")}}-Eigenschaften mehrere Bildoptionen bereitstellen. `currentSrc` ermöglicht es Ihnen, festzustellen, welches Bild aus der Menge der bereitgestellten Bilder vom Browser ausgewählt wurde.

## Beispiele

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr bereitgestellt. Eine ist 200px breit und die andere ist 400px breit. Das [`sizes`]-Attribut(/de/docs/Web/HTML/Element/img#sizes) wird bereitgestellt, um anzugeben, dass das Bild bei einer Breite unter 400px im Ansichtsfenster zu 50% der Dokumentenbreite dargestellt werden soll; andernfalls wird das Bild mit 90% der Breite des Dokuments gezeichnet.

### HTML

```html
<img
  src="/de/docs/Web/HTML/Element/img/clock-demo-400px.png"
  alt="Clock"
  srcset="
    /de/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /de/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
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
