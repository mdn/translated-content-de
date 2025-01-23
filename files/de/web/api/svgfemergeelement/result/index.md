---
title: "SVGFEMergeElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEMergeElement/result
l10n:
  sourceCommit: 2b0c47e02bba6be47057507f217f8267a6916ec8
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`result`** der [`SVGFEMergeElement`](/de/docs/Web/API/SVGFEMergeElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feMerge")}}-Elements wider. Der Attributwert ist ein {{cssxref("custom-ident")}}. Falls angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feMerge>`-Filters steht nur zur Wiederverwendung als implizite Eingabe für das nächste Filterprimitive zur Verfügung, falls dieses Filterprimitive keinen Wert für sein `in`-Attribut angibt.

## Wert

Eine [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feMergeElement = document.querySelector("feMerge");
const filterName = feMergeElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMergeNodeElement.in1`](/de/docs/Web/API/SVGFEMergeNodeElement/in1)
- {{cssxref("custom-ident")}} Datentyp
