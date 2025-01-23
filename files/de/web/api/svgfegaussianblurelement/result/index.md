---
title: "SVGFEGaussianBlurElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEGaussianBlurElement/result
l10n:
  sourceCommit: 94b32d908c0f13c1c2555996806454f7a0a48588
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft des [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feGaussianBlur")}}-Elements wider, das ein Eingabebild verwischt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenketten, und die Ausgabe des `<feGaussianBlur>`-Filters wird nur zur Wiederverwendung als implizite Eingabe in das nächste Filterprimitiv verfügbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

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
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("filter-function/blur", "blur()")}} Funktion
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)-Modul- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
