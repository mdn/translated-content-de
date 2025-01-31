---
title: "SVGFETurbulenceElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFETurbulenceElement/result
l10n:
  sourceCommit: ec48a043c5dbedef746b2d85f780f73cef59f332
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle beschreibt den zugewiesenen Namen einer SVG-Filterprimitive als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements wider, welches die Synthese von künstlichen Texturen ermöglicht. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können die Grafiken, die aus der Verarbeitung dieser Filterprimitive resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einer nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen und die Ausgabe des `<feTurbulence>`-Filters steht nur für die Wiederverwendung als implizite Eingabe in die nächste Filterprimitive zur Verfügung, falls diese Filterprimitive keinen Wert für ihr `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feTurbulenceElement = document.querySelector("feTurbulence");
const filterName = feTurbulenceElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETurbulenceElement.in1`](/de/docs/Web/API/SVGFETurbulenceElement/in1)
- {{cssxref("custom-ident")}} Datentyp
