---
title: "SVGFESpecularLightingElement: kernelUnitLengthX-Eigenschaft"
short-title: kernelUnitLengthX
slug: Web/API/SVGFESpecularLightingElement/kernelUnitLengthX
l10n:
  sourceCommit: 686af8e5f06a7234ac86076070a9c19ee1946575
---

{{APIRef("SVG")}}

Die **`kernelUnitLengthX`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle spiegelt den x-Wert des {{SVGAttr("kernelUnitLength")}}-Attributs des gegebenen {{SVGElement("feSpecularLighting")}}-Elements wider.

Das `kernelUnitLength`-Attribut gibt die beabsichtigte Entfernung in den aktuellen Filtereinheiten an, die durch das `primitiveUnits`-Attribut spezifiziert werden, für die x- und y-Koordinaten. Es enthält einen oder zwei Werte, wobei der y-Wert auf x standardmäßig gesetzt wird, wenn er nicht vorhanden ist. Die `kernelUnitLengthX`-Eigenschaft ruft den ersten Wert ab und setzt ihn.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt, das der X-Komponente des {{SVGAttr("kernelUnitLength")}}-Attributs des gegebenen Elements entspricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFeSpecularLightingElement.kernelUnitLengthY`](/de/docs/Web/API/SVGFESpecularLightingElement/kernelUnitLengthY)
- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
