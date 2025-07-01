---
title: "SVGFEImageElement: preserveAspectRatio-Eigenschaft"
short-title: preserveAspectRatio
slug: Web/API/SVGFEImageElement/preserveAspectRatio
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte **`preserveAspectRatio`**-Eigenschaft der [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Schnittstelle spiegelt das {{SVGAttr("preserveAspectRatio")}}-Attribut des angegebenen {{SVGElement("feImage")}}-Elements wider.

## Wert

Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt.

## Beispiel

### Zugriff auf die `preserveAspectRatio`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter id="image-filter">
      <!-- feImage element with preserveAspectRatio attribute -->
      <feImage
        href="https://via.placeholder.com/150"
        x="0"
        y="0"
        width="150"
        height="150"
        preserveAspectRatio="xMidYMid meet" />
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

// Access the preserveAspectRatio property
console.dir(feImageElement.preserveAspectRatio); // Output: SVGAnimatedPreserveAspectRatio object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("preserveAspectRatio")}}
