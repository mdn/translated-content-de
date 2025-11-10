---
title: "SVGFEFloodElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEFloodElement/result
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft des [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, welches eine SVG-Filter-Unterregion mit der Farbe und Deckkraft füllt, die durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definiert sind. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feFlood>`-Filters wird nur dann für die Wiederverwendung als impliziter Eingang in das nächste Filterprimitive verfügbar sein, wenn dieses Filterprimitive keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feFloodElement = document.querySelector("feFlood");
const filterName = feFloodElement.result;
console.log(filterName.baseVa); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("custom-ident")}} Datentyp
- [SVG-Filter-Tutorial](/de/docs/Web/SVG/Guides/SVG_filters)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
