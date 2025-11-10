---
title: "SVGFEBlendElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEBlendElement/result
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feBlend")}}-Element-Attribut {{SVGAttr("result")}} wider. Das `<feBlend>` SVG-Filter-Element mischt zwei Eingabebilder unter Verwendung von in Bildbearbeitungssoftware häufig verwendeten [Blendmodi](/de/docs/Web/CSS/Reference/Values/blend-mode).

Der Attributswert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feBlend>`-Filters wird nur dann für die Wiederverwendung als implizite Eingabe in das nächste Filterprimitiv verfügbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feBlendElement = document.querySelector("feBlend");
const filterName = feBlendElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEBlendElement.in1`](/de/docs/Web/API/SVGFEBlendElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
