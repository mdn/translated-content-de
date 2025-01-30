---
title: "SVGFECompositeElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFECompositeElement/result
l10n:
  sourceCommit: a5395de76cd0066aed71cf351029eb6e342b73d1
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feComposite")}}-Element über das {{SVGAttr("result")}}-Attribut wider. Das `<feComposite>` SVG-Filterprimitiv kombiniert zwei Eingabebilder mittels einer Porter-Duff-Kombinationsoperation. Der Attributwert ist eine {{cssxref("custom-ident")}}. Wenn angegeben, dann können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Zeichenketten, und die Ausgabe des `<feComposite>`-Filters wird nur als implizierte Eingabe für das nächste Filterprimitiv wiederverwendbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feCompositeElement = document.querySelector("feComposite");
const filterName = feCompositeElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFECompositeElement.in1`](/de/docs/Web/API/SVGFECompositeElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
