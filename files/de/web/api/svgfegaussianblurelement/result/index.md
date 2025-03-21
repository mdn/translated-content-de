---
title: "SVGFEGaussianBlurElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEGaussianBlurElement/result
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft des [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) Interface beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}} Attribut des {{SVGElement("feGaussianBlur")}} Elements wider, welches ein Eingabebild verwischt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}} Attribut in einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}} Elements referenziert werden.

Wenn kein `result` Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und das Ergebnis des `<feGaussianBlur>` Filters wird nur als implizite Eingabe in das nächste Filterprimitive zur Wiederverwendung zur Verfügung stehen, wenn dieses Filterprimitive keinen Wert für sein `in` Attribut angibt.

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
- [CSS-Filter-Effekte](/de/docs/Web/CSS/CSS_filter_effects) Modul- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
