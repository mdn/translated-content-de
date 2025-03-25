---
title: "SVGFETurbulenceElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFETurbulenceElement/result
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("SVG")}}

Die **`result`**-Schreibgeschützte Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feTurbulence")}}-Elements wider, das die Synthese künstlicher Texturen ermöglicht. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` leere Zeichenketten, und die Ausgabe des `<feTurbulence>`-Filters steht nur zur erneuten Nutzung als implizite Eingabe in das nächste Filterprimitiv zur Verfügung, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

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

- {{cssxref("custom-ident")}} Datentyp
