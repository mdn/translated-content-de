---
title: "SVGFESpecularLightingElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFESpecularLightingElement/result
l10n:
  sourceCommit: fdd5a169978046c3905a65b85dbf597fffca1a25
---

{{APIRef("SVG")}}

Die **`result`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feSpecularLighting")}}-Elements wider, das eine Quellgrafik mit dem Alphakanal als Höhenkarte beleuchtet. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feSpecularLighting>`-Filters ist nur als implizite Eingabe in das nächste Filterprimitiv wiederverwendbar, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feSpecularLightingElement = document.querySelector("feSpecularLighting");
const filterName = feSpecularLightingElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFESpecularLightingElement.in1`](/de/docs/Web/API/SVGFESpecularLightingElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)
- CSS {{cssxref("lighting-color")}}-Eigenschaft
