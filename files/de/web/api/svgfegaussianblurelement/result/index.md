---
title: "SVGFEGaussianBlurElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEGaussianBlurElement/result
l10n:
  sourceCommit: 607900f2b3fdd97a1c591b3dc9f6d81c8623d48c
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`result`** der Schnittstelle [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement) beschreibt den zugewiesenen Namen einer SVG-Filterprimitive als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das Attribut {{SVGAttr("result")}} des Elements {{SVGElement("feGaussianBlur")}} wider, das ein Eingabebild weichzeichnet. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn das Attribut angegeben ist, kann die durch die Verarbeitung dieser Filterprimitive erzeugte Grafik über ein Attribut {{SVGAttr("in")}} einer nachfolgenden Filterprimitive innerhalb desselben Elements {{SVGElement("filter")}} referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen. Die Ausgabe des `<feGaussianBlur>`-Filters steht dann nur als implizite Eingabe für die nächste Filterprimitive zur Wiederverwendung bereit, sofern diese keinen Wert für ihr `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feGaussianBlurElement = document.querySelector("feGaussianBlur");
const filterName = feGaussianBlurElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEGaussianBlurElement.in1`](/de/docs/Web/API/SVGFEGaussianBlurElement/in1)
- Datentyp {{cssxref("custom-ident")}}
- [Effekte mit SVG-Filtern anwenden](/de/docs/Web/SVG/Guides/Filters)
- CSS-Datentyp {{cssxref("blend-mode")}}
- CSS-Funktion {{cssxref("filter-function/blur", "blur()")}}
- Modul [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects)
- CSS-Eigenschaft {{cssxref("mix-blend-mode")}}
