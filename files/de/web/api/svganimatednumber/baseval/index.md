---
title: "SVGAnimatedNumber: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
l10n:
  sourceCommit: 5f0dba0ef63c41d1361c50c14dc343031beedd09
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der Schnittstelle [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) repräsentiert den Basiswert (nicht animiert) eines animierbaren numerischen Attributs.

Einige animierbare SVG-Attribute akzeptieren einen einzelnen numerischen Wert, wie das {{SVGAttr("radius")}}-Attribut der {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elemente und die {{SVGAttr("width")}}- und {{SVGAttr("height")}}-Attribute des {{SVGElement("rect")}}-Elements sowie viele andere. Die `baseVal`-Eigenschaft spiegelt den Basiswert des numerischen Attributs wider und aktualisiert ihn.

## Wert

Eine `number`; der Basiswert des Attributs als Gleitkommazahl.

## Beispiele

Dieses Beispiel enthält ein {{SVGElement("path")}}-Element mit einem verschachtelten {{SVGElement("animate")}}-Element, das den Wert des `pathLength`-Attributs des Pfades animiert:

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

Der `baseVal` spiegelt diesen Wert des `pathLength`-Attributs wider. Wir verwenden auch die `baseVal`-Eigenschaft, um den Basiswert (nicht animiert) des animierten `pathLength` zuzugreifen.

Um den aktuellen Wert des [`pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength) während der Animation zuzugreifen, verwenden Sie die [`SVGAnimatedNumber.animVal`](/de/docs/Web/API/SVGAnimatedNumber/animVal)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
