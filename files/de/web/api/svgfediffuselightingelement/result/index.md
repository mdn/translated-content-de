---
title: "SVGFEDiffuseLightingElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEDiffuseLightingElement/result
l10n:
  sourceCommit: 6f958c59155cfa5142076187384690a679f346ec
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feDiffuseLighting")}}-Elementattribut {{SVGAttr("result")}} wider. Der Filter beleuchtet ein Bild unter Verwendung des Alpha-Kanals als Höhenkarte. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feDiffuseLighting>`-Filters wird nur zur Wiederverwendung als implizite Eingabe in das nächste Filterprimitiv verfügbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Eine [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feDiffuseLightingElement = document.querySelector("feDiffuseLighting");
const filterName = feDiffuseLightingElement.result;
console.log(filterName.baseVa); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDiffuseLightingElement.in1`](/de/docs/Web/API/SVGFEDiffuseLightingElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)
- {{SVGElement("feSpecularLighting")}}
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
