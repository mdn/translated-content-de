---
title: "HTMLSourceElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLSourceElement/sizes
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der eine Liste von einer oder mehreren Größen darstellt, die Größen zwischen den Breakpoints repräsentieren, auf die sich die Ressource bezieht.

Sie spiegelt das `sizes`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<picture>
  <source
    id="el"
    srcset="medium-pic.jpg"
    type="image/jpeg"
    sizes="(50em <= width <= 60px) 50em,
           (30em <= width < 50em) 30em" />
</picture>
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
