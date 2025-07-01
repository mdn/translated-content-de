---
title: "HTMLSourceElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLSourceElement/sizes
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft der [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Schnittstelle ist ein String, der eine Liste von einer oder mehreren Größen darstellt. Diese Größen beziehen sich auf die Größen zwischen Breakpoints, auf die die Ressource angewendet wird.

Sie spiegelt das `sizes`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<source
  id="el"
  src="mediumVideo.mov"
  type="video/quicktime"
  sizes="(50em <= width <= 60px) 50em,
         (30em <= width < 50em) 30em" />
```

```js
const el = document.getElementById("el");
console.log(el.sizes); // Output: "(50em <= width <= 60px) 50em, (30em <= width < 50em) 30em"
el.sizes = "(50em <= width <= 60px) 100em, (30em <= width < 50em) 60em"; // Updates the sizes value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
- [`HTMLSourceElement.media`](/de/docs/Web/API/HTMLSourceElement/media)
- [`HTMLSourceElement.type`](/de/docs/Web/API/HTMLSourceElement/type)
- [`HTMLSourceElement.src`](/de/docs/Web/API/HTMLSourceElement/src)
- [`HTMLSourceElement.srcset`](/de/docs/Web/API/HTMLSourceElement/srcset)
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
