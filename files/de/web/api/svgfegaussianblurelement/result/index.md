---
title: "SVGFEGaussianBlurElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEGaussianBlurElement/result
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft der [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, das ein Eingangsbild verwischt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und das Ergebnis des `<feGaussianBlur>`-Filters steht nur zur Wiederverwendung als impliziter Eingang in das nächste Filterprimitiv zur Verfügung, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feGaussianBlurElement = document.querySelector("feGaussianBlur");
const filterName = feGaussianBlurElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEGaussianBlurElement.in1`](/de/docs/Web/API/SVGFEGaussianBlurElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul - CSS {{cssxref("mix-blend-mode")}} Eigenschaft
