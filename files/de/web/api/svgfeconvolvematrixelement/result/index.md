---
title: "SVGFEConvolveMatrixElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEConvolveMatrixElement/result
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`result`** Schreibgeschützte Eigenschaft des [`SVGFEConvolveMatrixElement`](/de/docs/Web/API/SVGFEConvolveMatrixElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feConvolveMatrix")}}-Element und dessen {{SVGAttr("result")}}-Attribut wider. Der `<feConvolveMatrix>`-Filter wendet einen Matrixkonvolutionseffekt an, der Pixel im Eingangsbild mit benachbarten Pixeln kombiniert, um einen Konvolutionseffekt wie Weichzeichnung, Kantenerkennung, Schärfung, Prägen oder Abschrägen zu erzeugen.

Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, von einem {{SVGAttr("in")}}-Attribut in einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feConvolveMatrix>`-Filters steht nur zur Wiederverwendung als impliziter Input für das nächste Filterprimitive zur Verfügung, falls dieses Filterprimitive keinen Wert für sein `in`-Attribut angibt.

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
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul
- SVG {{SVGElement("filter")}}-Element, SVG {{SVGAttr("filter")}}-Attribut in [SVG](/de/docs/Web/SVG)
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
