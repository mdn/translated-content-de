---
title: "SVGFEColorMatrixElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEColorMatrixElement/result
l10n:
  sourceCommit: ac0a3f797c6c81e964f49bf0f491cd08154d848f
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft der [`SVGFEColorMatrixElement`](/de/docs/Web/API/SVGFEColorMatrixElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivelements als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feColorMatrix")}}-Elementattribut {{SVGAttr("result")}} wider. Der `<feColorMatrix>`-Filter wendet eine Matrixtransformation auf die {{Glossary("RGB", "RGB")}}-Farbe und die {{Glossary("alpha", "Alpha")}}-Werte an. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen. Das Ergebnis des `<feColorMatrix>`-Filters steht dann nur zur Wiederverwendung als impliziter Eingang für das nächste Filterprimitive zur Verfügung, wenn dieses Filterprimitive keinen Wert für sein `in`-Attribut bereitstellt.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
