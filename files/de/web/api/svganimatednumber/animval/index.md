---
title: "SVGAnimatedNumber: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedNumber/animVal
l10n:
  sourceCommit: 5f0dba0ef63c41d1361c50c14dc343031beedd09
---

{{APIRef("SVG")}}

Die schreibgeschützte **`animVal`**-Eigenschaft des [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Interfaces repräsentiert den animierten Wert eines numerischen Attributs eines SVG-Elements.

Einige animierbare SVG-Attribute akzeptieren eine einzelne Zahl, wie das {{SVGAttr("radius")}}-Attribut der {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elemente sowie die {{SVGAttr("width")}}- und {{SVGAttr("height")}}-Attribute des {{SVGElement("rect")}}-Elements und viele andere. Das `animVal`-Attribut bietet Zugriff auf den aktuellen animierten Wert des animierbaren numerischen Attributs während der Animationen.

## Wert

Ein `number`; der aktuelle Wert des animierten Attributs als Gleitkommazahl.

## Beispiele

Dieses Beispiel enthält ein {{SVGElement("path")}}-Element mit einem verschachtelten {{SVGElement("animate")}}-Element, das den Wert des {{SVGElement("pathLength")}}-Attributs des Pfades animiert:

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

console.log(path.pathLength.animVal); // output: 50
console.log(path.pathLength.baseVal); // output: 90
```

Wir verwenden die `animVal`-Eigenschaft, um auf den aktuellen Wert der animierenden `pathLength` zuzugreifen, während [`SVGAnimatedNumber.baseVal`](/de/docs/Web/API/SVGAnimatedNumber/baseVal) den Basiswert (nicht animiert) der [`pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength) widerspiegelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
