---
title: "SVGFEFloodElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEFloodElement/result
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`result`** der Schnittstelle [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement) beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das Attribut {{SVGAttr("result")}} des Elements {{SVGElement("feFlood")}} wider. Dieses füllt einen SVG-Filterteilbereich mit der Farbe und Deckkraft, die durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} festgelegt sind. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn das Attribut angegeben ist, kann die durch die Verarbeitung dieses Filterprimitivs entstehende Grafik über ein {{SVGAttr("in")}}-Attribut eines nachfolgenden Filterprimitivs innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen. Die Ausgabe des `<feFlood>`-Filters steht dann nur als implizite Eingabe für das nächste Filterprimitiv zur Wiederverwendung zur Verfügung, sofern dieses Filterprimitiv keinen Wert für sein `in`-Attribut angibt.

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

- Datentyp {{cssxref("custom-ident")}}
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
