---
title: "SVGFESpecularLightingElement: kernelUnitLengthY Eigenschaft"
short-title: kernelUnitLengthY
slug: Web/API/SVGFESpecularLightingElement/kernelUnitLengthY
l10n:
  sourceCommit: 686af8e5f06a7234ac86076070a9c19ee1946575
---

{{APIRef("SVG")}}

Die **`kernelUnitLengthY`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle spiegelt den y-Wert des {{SVGAttr("kernelUnitLength")}}-Attributs des angegebenen {{SVGElement("feSpecularLighting")}}-Elements wider.

Das `kernelUnitLength`-Attribut gibt die beabsichtigte Entfernung in den aktuellen Filtereinheiten an, die durch das `primitiveUnits`-Attribut spezifiziert werden, für die x- und y-Koordinaten. Es enthält einen oder zwei Werte, wobei der y-Wert auf x zurückfällt, falls dieser nicht vorhanden ist, und die `kernelUnitLengthY`-Eigenschaft den letzten Wert ermittelt und festlegt.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt, das der Y-Komponente des {{SVGAttr("kernelUnitLength")}}-Attributs des angegebenen Elements entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFeSpecularLightingElement.kernelUnitLengthX`](/de/docs/Web/API/SVGFESpecularLightingElement/kernelUnitLengthX)
- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
