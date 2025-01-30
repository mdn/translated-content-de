---
title: "SVGFEBlendElement: result Eigenschaft"
short-title: result
slug: Web/API/SVGFEBlendElement/result
l10n:
  sourceCommit: ebf665a2679f308eb8e4dc7330864b4661bcdb9c
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feBlend")}} Elementattribut {{SVGAttr("result")}} wider.
Das `<feBlend>` SVG-Filterelement kombiniert zwei Eingabebilder mit üblichen Bildbearbeitungssoftware-{{cssxref("blend-mode", "Mischmodi")}}.

Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}} Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}} Elements referenziert werden.

Wenn kein `result` Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feBlend>` Filters wird nur als implizite Eingabe in das nächste Filterprimitiv wiederverwendbar sein, wenn dieses Filterprimitiv keinen Wert für sein `in` Attribut angibt.

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
