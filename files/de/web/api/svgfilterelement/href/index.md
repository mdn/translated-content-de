---
title: "SVGFilterElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGFilterElement/href
l10n:
  sourceCommit: ed8d1fc9149b9b5987d1019b1a6e1c7216a5333b
---

{{APIRef("SVG")}}

Die **`href`**-Schreibgeschützte Eigenschaft der [`SVGFilterElement`](/de/docs/Web/API/SVGFilterElement)-Schnittstelle spiegelt das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des angegebenen {{SVGElement("filter")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <filter id="myFilter" x="0" y="0" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blurred" />
    </filter>
  </defs>
  <rect
    width="200"
    height="200"
    stroke="green"
    stroke-width="10"
    fill="lime"
    filter="url(#myFilter)" />
</svg>
```

```js
const filterElement = document.querySelector("filter");

// Access the href property
console.log(filterElement.href.baseVal); // Output: "#myFilter"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("href")}}-Attribut
