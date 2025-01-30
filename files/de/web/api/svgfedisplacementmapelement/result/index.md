---
title: "SVGFEDisplacementMapElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEDisplacementMapElement/result
l10n:
  sourceCommit: b85296a36664e26537fc181c65521d0aa8679fa6
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement) Schnittstelle beschreibt den zugewiesenen Namen einer SVG-Filter-Primitiven als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGElement("feDisplacementMap")}}-Element-Attribut {{SVGAttr("result")}} wider. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filter-Primitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filter-Primtiv innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feDisplacementMap>`-Filters wird nur zur Wiederverwendung als implizite Eingabe in das nächste Filter-Primitiv verfügbar sein, wenn dieses Filter-Primitiv keinen Wert für sein `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feDisplacementMapElement = document.querySelector("feDisplacementMap");
const filterName = feDisplacementMapElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEDisplacementMapElement.in1`](/de/docs/Web/API/SVGFEDisplacementMapElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement) API und {{SVGElement("feImage")}} Element
- [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) API und {{SVGElement("feTurbulence")}} Element
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
