---
title: "SVGFEImageElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGFEImageElement/href
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte **`href`**-Eigenschaft des [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Interfaces spiegelt das {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}}-Attribut ({{deprecated_inline}}) des gegebenen {{SVGElement("feImage")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter id="image-filter">
      <!-- feImage element referencing an external image -->
      <feImage
        href="https://via.placeholder.com/150"
        x="0"
        y="0"
        width="150"
        height="150" />
    </filter>
  </defs>

  <!-- Rectangle with the filter applied -->
  <rect
    x="50"
    y="50"
    width="200"
    height="100"
    fill="blue"
    filter="url(#image-filter)" />
</svg>
```

```js
// Select the feImage element
const feImageElement = document.querySelector("feImage");

// Access the href property
console.log(feImageElement.href.baseVal); // Output: "https://via.placeholder.com/150"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
