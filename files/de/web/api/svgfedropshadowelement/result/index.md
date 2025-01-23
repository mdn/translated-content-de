---
title: "SVGFEDropShadowElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEDropShadowElement/result
l10n:
  sourceCommit: f318ba7838c55e50366284c1df56fbcb40ea802b
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft des [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das Attribut {{SVGAttr("result")}} wider. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Falls kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und das Ergebnis des `<feDropShadow>`-Filters kann nur als impliziter Input für das nächste Filterprimitive wiederverwendet werden, wenn dieses Filterprimitive keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feDropShadowElement = document.querySelector("feDropShadow");
const filterName = feDropShadowElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDropShadowElement.in1`](/de/docs/Web/API/SVGFEDropShadowElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- CSS {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} Funktion
- CSS {{cssxref("box-shadow")}} Eigenschaft
- CSS {{cssxref("text-shadow")}} Eigenschaft
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
