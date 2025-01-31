---
title: "SVGFEOffsetElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFEOffsetElement/result
l10n:
  sourceCommit: e9fd7a0d2640c9878e6187dc69213814828a05f5
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft des [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filterprimitives als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feOffset")}}-Elements wider, das das Eingabebild relativ zu seiner aktuellen Position verschiebt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Falls angegeben, können Grafiken, die aus der Verarbeitung dieses Filterprimitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filterprimitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Wenn kein `result`-Attribut definiert ist, sind die `result.baseVal` und `result.animVal` des Filters leere Strings, und die Ausgabe des `<feOffset>`-Filters wird nur dann für eine Wiederverwendung als implizite Eingabe in den nächsten Filterprimitive verfügbar sein, wenn dieser Filterprimitive keinen Wert für sein `in`-Attribut angibt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feOffsetElement = document.querySelector("feOffset");
const filterName = feOffsetElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEOffsetElement.in1`](/de/docs/Web/API/SVGFEOffsetElement/in1)
- {{cssxref("custom-ident")}} Datentyp
