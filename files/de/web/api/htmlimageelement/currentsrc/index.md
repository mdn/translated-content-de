---
title: "HTMLImageElement: currentSrc-Eigenschaft"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`currentSrc`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die URL des Bildes angibt, das vom Browser zum Laden ausgewählt wurde.

## Wert

Ein String, der die vollständige URL des Bildes angibt, das aktuell vom Browser zum Laden ausgewählt wurde. Wenn das Bild das [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verwendet, ermöglicht `currentSrc` es Ihnen zu bestimmen, welches Bild aus dem Satz bereitgestellter Bilder vom Browser ausgewählt wurde. Der Wert der Eigenschaft ist unabhängig davon, ob das Bild erfolgreich geladen wurde oder nicht.

## Beispiele

### Testen, welches Bild geladen wird

In diesem Beispiel werden zwei verschiedene Größen für ein Bild einer Uhr bereitgestellt. Eine ist 200px breit und die andere 400px breit. Das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut wird bereitgestellt, um anzuzeigen, dass das Bild bei einer Dokumentbreite von 50% gezeichnet werden sollte, wenn der Ansichtsbereich unter 400px breit ist; ansonsten wird das Bild mit 90% der Dokumentbreite gezeichnet.

#### HTML

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

#### JavaScript

```js
const clockImage = document.querySelector("img");
const p = document.createElement("p");

p.textContent = clockImage.currentSrc.endsWith("200px.png")
  ? "Using the 200px image!"
  : "Using the 400px image.";
document.body.appendChild(p);
```

#### Ergebnis

{{EmbedLiveSample("Testing which image is loaded", 640, 370)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
- [`HTMLImageElement.srcSet`](/de/docs/Web/API/HTMLImageElement/srcset)
