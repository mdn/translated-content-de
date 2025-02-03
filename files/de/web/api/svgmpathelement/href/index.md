---
title: "SVGMPathElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGMPathElement/href
l10n:
  sourceCommit: 4d45ceb8c5083fcd325abf028105d0ddfe8d4874
---

{{APIRef("SVG")}}

Die **`href`**-Eigenschaft der [`SVGMPathElement`](/de/docs/Web/API/SVGMPathElement)-Schnittstelle, die nur lesbar ist, spiegelt das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des gegebenen {{SVGElement("mpath")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <path
    id="motionPath"
    d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
    fill="transparent"
    stroke="black" />

  <circle id="circle" cx="0" cy="0" r="5" fill="blue">
    <animateMotion dur="4s" repeatCount="indefinite">
      <mpath href="#motionPath"></mpath>
    </animateMotion>
  </circle>
</svg>
```

```js
const mpathElement = document.querySelector("mpath");

// Access the href property
console.log(mpathElement.href.baseVal); // Output: "#motionPath"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
