---
title: "SVGFEConvolveMatrixElement: Ergebnis-Eigenschaft"
short-title: result
slug: Web/API/SVGFEConvolveMatrixElement/result
l10n:
  sourceCommit: e0bf626da04e5e1e21373fe4011e20fdcaae62a0
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`result`** des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Elementattribut {{SVGAttr("result")}} wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixkonvolutionseffekt an, der Pixel im Eingabebild mit benachbarten Pixeln kombiniert, um einen Konvolutionseffekt wie Weichzeichnen, Kantenerkennung, Schärfen, Prägen oder Abfasen zu erzeugen.

Der Attributwert ist ein {{cssxref("custom-ident")}}. Falls angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feConvolveMatrix>`-Filters kann nur als implizite Eingabe in das nächste Filterprimitiv wiederverwendet werden, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

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
- {{cssxref("custom-ident")}}-Datentyp
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
