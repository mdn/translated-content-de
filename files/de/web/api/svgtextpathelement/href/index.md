---
title: "SVGTextPathElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGTextPathElement/href
l10n:
  sourceCommit: cb6a3d63ca47ea6efeb1d9f8f60e47375a59d541
---

{{APIRef("SVG")}}

Die **`href`**-Eigenschaft der [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement)-Schnittstelle gibt das {{SVGAttr("href")}}-Attribut (oder das veraltete {{SVGAttr("xlink:href")}}-Attribut) des angegebenen {{SVGElement("textPath")}}-Elements wieder.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the href property
console.log(textPath.href.baseVal); // Output: "#myPath"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("href")}}-Attribut
