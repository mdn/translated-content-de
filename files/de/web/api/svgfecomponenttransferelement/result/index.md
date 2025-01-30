---
title: "SVGFEComponentTransferElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEComponentTransferElement/result
l10n:
  sourceCommit: 555feb3f59cfdea83d769ce9f38baebc679f0681
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft der [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feComponentTransfer")}}-Element und dessen {{SVGAttr("result")}}-Attribut wider. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Falls kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feComponentTransfer>`-Filters ist nur für die Wiederverwendung als implizite Eingabe für das nächste Filterprimitiv verfügbar, sofern dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feComponentTransferElement = document.querySelector(
  "feComponentTransfer",
);
const filterName = feComponentTransferElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEComponentTransferElement.in1`](/de/docs/Web/API/SVGFEComponentTransferElement/in1)
- {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}}, {{SVGElement("feFuncA")}} Elemente
- {{cssxref("custom-ident")}} Datentyp
