---
title: "SVGAnimatedNumber: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Schnittstelle repräsentiert den Basiswert (nicht animiert) eines animierbaren numerischen Attributs.

Einige animierbare SVG-Attribute akzeptieren einen einzelnen numerischen Wert, wie das {{SVGAttr("radius")}}-Attribut der {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elemente und die {{SVGAttr("width")}}- und {{SVGAttr("height")}}-Attribute des {{SVGElement("rect")}}-Elements und viele andere. Die `baseVal`-Eigenschaft spiegelt den Basiswert, oder nicht animierten Wert, des numerischen Attributs wider und aktualisiert diesen.

## Wert

Ein `number`; der Basiswert des Attributs als Gleitkommawert.

## Beispiele

Dieses Beispiel enthält ein {{SVGElement("path")}}-Element mit einem verschachtelten {{SVGElement("animate")}}-Element, das den Wert des {{SVGAttr("pathLength")}}-Attributs des Pfads animiert:

```html
<path d="M 0,40 h100" pathLength="90" id="path">
  <animate
    attributeName="pathLength"
    values="50; 90; 50;"
    dur="10s"
    repeatCount="indefinite" />
</path>
```

```js
const path = document.querySelector("path");

console.log(path.pathLength.baseVal); // output: 90
path.pathLength.baseVal = 50; // updates the value
console.log(path.pathLength.baseVal); // output: 90
```

Das `baseVal` spiegelt den Wert des `pathLength`-Attributs wider. Wir verwenden auch die `baseVal`-Eigenschaft, um den Basiswert (nicht animierend) des animierten `pathLength`-Werts zuzugreifen.

Um den aktuellen Wert des [`pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength)-Werts während der Animation zu ermitteln, verwenden Sie die [`SVGAnimatedNumber.animVal`](/de/docs/Web/API/SVGAnimatedNumber/animVal)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
