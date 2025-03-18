---
title: "SVGFEFloodElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEFloodElement/result
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`result`**-Eigenschaft der [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Schnittstelle, die nur gelesen werden kann, beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}} Attribut des {{SVGElement("feFlood")}} Elements wider, das eine SVG-Filter-Unterregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Opazität füllt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn es angegeben ist, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}} Attribut an einem folgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}} Elements referenziert werden.

Wenn kein `result` Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feFlood>` Filters wird nur zur Wiederverwendung als impliziter Eingang für das nächste Filterprimitiv verfügbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in` Attribut angibt.

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

- [`SVGFEFloodElement.in1`](/de/docs/Web/API/SVGFEFloodElement/in1)
- {{cssxref("custom-ident")}} Datentyp- [SVG Filter Tutorial](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
