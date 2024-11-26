---
title: "HTMLSourceElement: sizes-Eigenschaft"
short-title: sizes
slug: Web/API/HTMLSourceElement/sizes
l10n:
  sourceCommit: da9701a81a92538abef8763e69d88158e6215703
---

{{APIRef("HTML DOM")}}

Die **`sizes`**-Eigenschaft des [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)-Interfaces ist ein String, der eine Liste von einer oder mehreren Größen darstellt, die auf die Ressource zwischen den Breakpoints angewendet werden.

Sie spiegelt das `sizes`-Attribut des {{HTMLElement("source")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<source
  id="el"
  src="mediumVideo.mov"
  type="video/quicktime"
  sizes="((min-width: 50em) and (max-width: 60em)) 50em,
         ((min-width: 30em) and (max-width: 50em)) 30em" />
```

```js
const el = document.getElementById("el");
console.log(el.sizes); // Output: "((min-width: 50em) and (max-width: 60em)) 50em, ((min-width: 30em) and (max-width: 50em)) 30em"
el.sizes =
  "((min-width: 50em) and (max-width: 60em)) 50em, ((min-width: 30em) and (max-width: 50em)) 30em"; // Updates the sizes value
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
