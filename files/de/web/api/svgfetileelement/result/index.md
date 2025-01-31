---
title: "SVGFETileElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFETileElement/result
l10n:
  sourceCommit: f7c2436db777de600a4f999169ea8a4d88255f1d
---

{{APIRef("SVG")}}

Die schreibgeschützte **`result`**-Eigenschaft des [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Interfaces beschreibt den zugewiesenen Namen eines SVG-Filter-Primitives als ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}}-Attribut des {{SVGElement("feTitle")}}-Elements wider, das ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wenn angegeben, können Grafiken, die aus der Verarbeitung dieses Filter-Primitives resultieren, durch ein {{SVGAttr("in")}}-Attribut auf einem nachfolgenden Filter-Primitive innerhalb desselben {{SVGElement("filter")}}-Elements referenziert werden.

Falls kein `result`-Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feTile>`-Filters wird nur dann zur Wiederverwendung als impliziter Eingang in das nächste Filter-Primitiv verfügbar, wenn dieses Filter-Primitiv keinen Wert für sein `in`-Attribut bereitstellt.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

## Beispiel

```js
const feTileElement = document.querySelector("feTile");
const filterName = feTileElement.result;
console.log(filterName.baseVal); // the filter's assigned name
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFETileElement.in1`](/de/docs/Web/API/SVGFETileElement/in1)
- [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)
- {{cssxref("custom-ident")}} Datentyp
