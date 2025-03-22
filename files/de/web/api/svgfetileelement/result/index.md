---
title: "SVGFETileElement: result-Eigenschaft"
short-title: result
slug: Web/API/SVGFETileElement/result
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("SVG")}}

Die **`result`** Schreibgeschützte Eigenschaft der [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement) Schnittstelle beschreibt den zugewiesenen Namen eines SVG-Filterprimitivs als [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString).

Sie spiegelt das {{SVGAttr("result")}} Attribut des {{SVGElement("feTile")}} Elements wider, welches ein Zielrechteck mit einem wiederholten, gekachelten Muster eines Eingabebildes füllt. Der Attributwert ist ein {{cssxref("custom-ident")}}. Wird es bereitgestellt, können Grafiken, die aus der Verarbeitung dieses Filterprimitivs resultieren, durch ein {{SVGAttr("in")}} Attribut auf einem nachfolgenden Filterprimitiv innerhalb desselben {{SVGElement("filter")}} Elements referenziert werden.

Wenn kein `result` Attribut definiert ist, sind `result.baseVal` und `result.animVal` des Filters leere Zeichenfolgen, und die Ausgabe des `<feTile>` Filters steht nur zur Wiederverwendung als implizite Eingabe in das nächste Filterprimitiv zur Verfügung, falls dieses Filterprimitiv keinen Wert für sein `in` Attribut angibt.

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
