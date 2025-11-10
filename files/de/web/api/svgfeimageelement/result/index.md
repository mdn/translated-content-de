---
title: "SVGFEImageElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEImageElement/result
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft der [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, welches Bilddaten aus einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Falls vorhanden, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprinzip innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feImage>`-Filters wird nur für die Wiederverwendung als implizite Eingabe in den nächsten Filterprimitive verfügbar sein, wenn dieser Filterprimitive keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feImageElement = document.querySelector("feImage");
const filterName = feImageElement.result;
console.log(filterName.baseVa); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("custom-ident")}} Datentyp
- [SVG Anleitung: Filtereffekte](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects)
- [SVG Filter-Primitive-Attribute](/de/docs/Web/SVG/Reference/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
