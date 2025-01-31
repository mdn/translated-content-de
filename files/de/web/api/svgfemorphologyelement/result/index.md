---
title: "SVGFEMorphologyElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEMorphologyElement/result
l10n:
  sourceCommit: 9ecba36579d53837ec5853ea6883f57c3d6fc864
---

{{APIRef("SVG")}}

Die **`result`**-Schreibgeschützte Eigenschaft des [`SVGFEMorphologyElement`](/de/docs/Web/API/SVGFEMorphologyElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feMorphology")}}-Elements wider. Der Attributwert ist ein {{cssxref("custom-ident")}}. Falls angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenketten, und die Ausgabe des `<feMorphology>`-Filters wird nur dann als impliziter Eingang in das nächste Filterprimitiv zur Wiederverwendung verfügbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feMorphologyElement = document.querySelector("feMorphology");
const filterName = feMorphologyElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEMorphologyElement.in1`](/de/docs/Web/API/SVGFEMorphologyElement/in1)
- {{cssxref("custom-ident")}} Datentyp
