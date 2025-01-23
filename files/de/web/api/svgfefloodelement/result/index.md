---
title: "SVGFEFloodElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEFloodElement/result
l10n:
  sourceCommit: 446fc3bbd82b46e4e3ae500332d807c843ebb7d7
---

{{APIRef("SVG")}}

Die **`result`**-Schreibgeschützte Eigenschaft des [`SVGFEFloodElement`](/de/docs/Web/API/SVGFEFloodElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filter-Primitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feFlood")}}-Elements wider, das eine SVG-Filter-Unterregion mit der durch {{SVGAttr("flood-color")}} und {{SVGAttr("flood-opacity")}} definierten Farbe und Deckkraft füllt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, von einem {{SVGAttr("in")}}-Attribut eines nachfolgenden Filter-Primitives innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Falls kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feFlood>`-Filters wird nur zur Wiederverwendung als impliziter Eingang für das nächste Filter-Primitive zur Verfügung stehen, wenn dieses kein Wert für sein `in`-Attribut angibt.

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

- [`SVGFEFloodElement.in1`](/de/docs/Web/API/SVGFEFloodElement/in1)
- {{cssxref("custom-ident")}} Datentyp- [SVG-Filter-Leitfaden](/de/docs/Web/SVG/Tutorial/SVG_Filters_Tutorial)
- CSS {{cssxref("blend-mode")}} Datentyp
- CSS {{cssxref("mix-blend-mode")}} Eigenschaft
