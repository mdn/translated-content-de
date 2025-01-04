---
title: "SVGImageElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGImageElement/href
l10n:
  sourceCommit: 9cbd72093beb09809e3bbedc5c7c97f05739508b
---

{{APIRef("SVG")}}

Die **`href`**-Eigenschaft, die nur gelesen werden kann, des [`SVGImageElement`](/de/docs/Web/API/SVGImageElement)-Interfaces spiegelt das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des gegebenen {{SVGElement("image")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```js
// Get the SVG image element
const imageElement = document.querySelector("image");

// Access the href property
const href = imageElement.href.baseVal;

console.log(href); // Output: The href value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
