---
title: "SVGFEColorMatrixElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEColorMatrixElement/result
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`result`**-Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filter-Primitive als ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feColorMatrix")}}-Element des {{SVGAttr("result")}}-Attributs wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farb- und {{Glossary("alpha", "Alpha")}}-Werte an. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feColorMatrix>`-Filters steht nur zur Wiederverwendung als implizite Eingabe in das nächste Filter-Primitive zur Verfügung, wenn dieses Filter-Primitive keinen Wert für sein `in`-Attribut bereitstellt.

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
- [CSS-Filter-Effekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
