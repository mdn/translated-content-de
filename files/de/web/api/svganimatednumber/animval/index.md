---
title: "SVGAnimatedNumber: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedNumber/animVal
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("SVG")}}

Die **`animVal`**-Schreibgeschützte Eigenschaft der [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Schnittstelle repräsentiert den animierten Wert eines numerischen Attributs eines SVG-Elements.

Einige animierbare SVG-Attribute akzeptieren eine einzelne Zahl, wie das {{SVGAttr("radius")}}-Attribut der {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Elemente und die {{SVGAttr("width")}}- und {{SVGAttr("height")}}-Attribute des {{SVGElement("rect")}}-Elements und viele andere. Das `animVal`-Attribut ermöglicht den Zugriff auf den aktuellen animierten Wert des animierbaren numerischen Attributs während Animationen.

## Wert

Eine `number`; der aktuelle Wert des animierten Attributs als Gleitkommazahl.

## Beispiele

Dieses Beispiel beinhaltet ein {{SVGElement("path")}}-Element mit einem verschachtelten {{SVGElement("animate")}}-Element, das den Wert des {{SVGAttr("pathLength")}}-Attributs des Pfads animiert:

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

Wir verwenden die `animVal`-Eigenschaft, um auf den aktuellen Wert des animierenden `pathLength` zuzugreifen, während [`SVGAnimatedNumber.baseVal`](/de/docs/Web/API/SVGAnimatedNumber/baseVal) den Basiswert (nicht animierend) des [`pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength) widerspiegelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
