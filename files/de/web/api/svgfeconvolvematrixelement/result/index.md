---
title: "SVGFEConvolveMatrixElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEConvolveMatrixElement/result
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`result`**-Schreibgeschützte Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Element und dessen {{SVGAttr("result")}}-Attribut wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixkonvolutionseffekt an, indem Pixel des Eingabebildes mit benachbarten Pixeln kombiniert werden, um einen Konvolutionseffekt wie Unschärfe, Kantenerkennung, Schärfen, Prägen oder Abfasung zu erzeugen.

Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn er angegeben wird, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut bei einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feConvolveMatrix>`-Filters ist nur als implizierte Eingabe für das nächste Filterprimitiv zur Wiederverwendung verfügbar, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feConvolveMatrixElement = document.querySelector("feConvolveMatrix");
const filterName = feConvolveMatrixElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEConvolveMatrixElement.in1`](/de/docs/Web/API/SVGFEConvolveMatrixElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
