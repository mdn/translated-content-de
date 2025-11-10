---
title: "SVGFEColorMatrixElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEColorMatrixElement/result
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft des [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feColorMatrix")}}-Element und dessen {{SVGAttr("result")}}-Attribut wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farb- und {{Glossary("alpha", "Alpha")}}-Werte an. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn er angegeben wird, können Grafiken, die durch die Verarbeitung dieses Filterprimitivs entstehen, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen und die Ausgabe des `<feColorMatrix>`-Filters kann nur als impliziter Input für das nächste Filterprimitiv wiederverwendet werden, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feColorMatrixElement = document.querySelector("feColorMatrix");
const filterName = feColorMatrixElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEColorMatrixElement.in1`](/de/docs/Web/API/SVGFEColorMatrixElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
- [CSS-Filter-Effekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
