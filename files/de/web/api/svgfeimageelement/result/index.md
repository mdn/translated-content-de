---
title: "SVGFEImageElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEImageElement/result
l10n:
  sourceCommit: 5498d8aab210c639ba0415071ca6fd77305762b0
---

{{APIRef("SVG")}}

Die **`result`** schreibgeschützte Eigenschaft des [`SVGFEImageElement`](/de/docs/Web/API/SVGFEImageElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feImage")}}-Elements wider, welches Bilddaten von einer externen Quelle abruft und die Pixeldaten als Ausgabe bereitstellt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Falls angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Falls kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feImage>`-Filters steht nur zur Wiederverwendung als implizite Eingabe in das nächste Filterprimitive zur Verfügung, falls dieses keine Angabe für sein `in`-Attribut bereitstellt.

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

- [`SVGFEImageElement.in1`](/de/docs/Web/API/SVGFEImageElement/in1)
- {{cssxref("custom-ident")}} Datentyp
- [SVG-Tutorial: Filtereffekte](/de/docs/Web/SVG/Tutorial/Filter_effects)
- [SVG-Filterprimitivattribute](/de/docs/Web/SVG/Attribute#filters_attributes)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
