---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Das Interface **`SVGTextContentElement`** wird von Elementen implementiert, die untergeordneten Textinhalt rendern können. Verschiedene textbezogene Interfaces erben davon, darunter [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

{{InheritanceDiagram}}

## Statische Eigenschaften

- `LENGTHADJUST_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `LENGTHADJUST_SPACING` (1)
  - : Entspricht dem Wert `spacing`.
- `LENGTHADJUST_SPACINGANDGLYPHS` (2)
  - : Entspricht dem Wert `spacingAndGlyphs`.

## Instanzeigenschaften

_Dieses Interface erbt außerdem Eigenschaften von seinem übergeordneten Interface [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das Attribut {{SVGAttr("textLength")}} des jeweiligen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die das Attribut {{SVGAttr("lengthAdjust")}} des jeweiligen Elements widerspiegelt. Die numerischen Typwerte entsprechen jeweils einem der konstanten Werte `LENGTHADJUST_*`.

## Instanzmethoden

_Dieses Interface erbt außerdem Methoden von seinem übergeordneten Interface [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt einen ganzzahligen Wert zurück, der die Gesamtzahl der adressierbaren Zeichen angibt, die innerhalb des aktuellen Elements zum Rendern verfügbar sind – unabhängig davon, ob sie tatsächlich gerendert werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt eine Gleitkommazahl zurück, die die berechnete Länge des Textes innerhalb des Elements angibt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt eine Gleitkommazahl zurück, die den berechneten Vorschubabstand des formatierten Textes für eine Teilzeichenfolge innerhalb des Elements angibt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen in der Teilzeichenfolge sowie zusätzliche Abstände berücksichtigt, die durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügt werden. Visuelle Abstandsanpassungen durch das Attribut 'x' werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)
  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Position eines typografischen Zeichens nach dem Textlayout angibt.
- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)
  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Endposition eines typografischen Zeichens nach dem Textlayout angibt.
- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das die berechnete eng umschließende Begrenzungsbox der Glyphenzelle angibt, die einem bestimmten typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt eine Gleitkommazahl zurück, die die Drehung eines typografischen Zeichens angibt.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt einen ganzzahligen Wert zurück, der das Zeichen angibt, aufgrund dessen an einer bestimmten Position im Koordinatensystem eine Textglyphe gerendert wurde. Da die Zuordnung zwischen Zeichen und Glyphen nicht immer eins zu eins ist, wird nur das erste Zeichen des betreffenden typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
