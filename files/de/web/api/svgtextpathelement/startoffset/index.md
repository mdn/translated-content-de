---
title: "SVGTextPathElement: startOffset Eigenschaft"
short-title: startOffset
slug: Web/API/SVGTextPathElement/startOffset
l10n:
  sourceCommit: cb6a3d63ca47ea6efeb1d9f8f60e47375a59d541
---

{{APIRef("SVG")}}

Die **`startOffset`** schreibgeschützte Eigenschaft der [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement) Schnittstelle spiegelt die X-Komponente des {{SVGAttr("startOffset")}} Attributs des gegebenen {{SVGElement("textPath")}} wider. Diese definiert einen Versatz vom Beginn des Pfads für die initiale aktuelle Textposition entlang des Pfads nach der Umwandlung des Pfads in das Koordinatensystem des `<textPath>` Elements.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekt.

## Beispiele

### Zugriff auf die `startOffset` Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <defs>
    <path id="myPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
  </defs>
  <text font-size="20" fill="blue">
    <textPath id="myTextPath" href="#myPath" startOffset="25%">
      This text follows a path!
    </textPath>
  </text>
</svg>
```

```js
const textPath = document.getElementById("myTextPath");

// Access the startOffset property
console.log(textPath.startOffset.baseVal.valueAsString); // Output: "25%"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGAttr("startOffset")}} Attribut
