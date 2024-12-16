---
title: "SVGAnimatedNumber: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedNumber/baseVal
l10n:
  sourceCommit: c99030f392eba91d64d87a480e13e55897092ee9
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft des [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Interfaces repräsentiert den Basiswert (nicht animiert) eines animierbaren numerischen Attributs.

Einige animierbare SVG-Attribute akzeptieren einen einzelnen numerischen Wert, wie z.B. das {{SVGAttr("radius")}}-Attribut der {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elemente und die {{SVGAttr("width")}}- und {{SVGAttr("height")}}-Attribute des {{SVGElement("rect")}}-Elements und viele andere. Die `baseVal`-Eigenschaft spiegelt den Basiswert, also den nicht animierten Wert, des numerischen Attributs wider und aktualisiert ihn.

## Wert

Eine `Nummer`; der Basiswert des Attributs als Fließkommazahl.

## Beispiele

Dieses Beispiel enthält ein {{SVGElement("path")}}-Element mit einem verschachtelten {{SVGElement("animate")}}-Element, das den Wert des {{SVGElement("pathLength")}}-Attributs des Pfads animiert:

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

Der `baseVal` spiegelt den Wert des `pathLength`-Attributs wider. Wir verwenden die `baseVal`-Eigenschaft auch, um auf den Basiswert (nicht animierend) des animierenden `pathLength` zuzugreifen.

Um auf den aktuellen Wert des [`pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength)-Werts zuzugreifen, während er animiert, verwenden Sie die [`SVGAnimatedNumber.animVal`](/de/docs/Web/API/SVGAnimatedNumber/animVal)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
