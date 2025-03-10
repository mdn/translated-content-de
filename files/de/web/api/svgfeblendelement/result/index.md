---
title: "SVGFEBlendElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEBlendElement/result
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{APIRef("SVG")}}

Die **`result`**-Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) Interfaces ist eine schreibgeschützte Eigenschaft, die den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) beschreibt.

Sie spiegelt das {{SVGElement("feBlend")}} Element und dessen {{SVGAttr("result")}} Attribut wider. Das `<feBlend>` SVG-Filterelement mischt zwei Eingabebilder unter Verwendung von in Bildbearbeitungssoftware häufig benutzten [Mischmodi](/de/docs/Web/CSS/blend-mode).

Der Attributwert ist ein {{cssxref("custom-ident")}}. Wird dieser angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, von einem {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}} Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feBlend>` Filters ist nur dann für die Wiederverwendung als implizite Eingabe in das nächste Filterprimitiv verfügbar, wenn dieses Filterprimitiv keinen Wert für sein `in`-Attribut bereitstellt.

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
