---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 43a8839abdfb01d4388f11a028582bec4e7ead18
---

{{APIRef("SVG")}}

Das **`SVGTextContentElement`**-Interface wird von Elementen implementiert, die das Rendern von Kind-Textinhalten unterstützen. Es wird von verschiedenen textbezogenen Schnittstellen geerbt, wie zum Beispiel [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das {{SVGAttr("textLength")}}-Attribut des angegebenen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das das {{SVGAttr("lengthAdjust")}}-Attribut des angegebenen Elements widerspiegelt. Die numerischen Typwerte repräsentieren einen der `LENGTHADJUST_*`-Konstantenwerte.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt eine ganze Zahl zurück, die die Gesamtanzahl der adressierbaren Zeichen repräsentiert, die innerhalb des aktuellen Elements zur Verfügung stehen, unabhängig davon, ob sie gerendert werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt eine Fließkommazahl zurück, die die berechnete Länge des Textes innerhalb des Elements darstellt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt eine Fließkommazahl zurück, die die berechnete Länge des formatierten Textvorschublängenabstands für eine Teilzeichenkette des Textes innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen in der Teilzeichenkette und zusätzlichen Abstand berücksichtigt, der durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügt wird. Visuelle Abstandsverstellungen, die durch das 'x'-Attribut vorgenommen werden, werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)
  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Position eines typografischen Zeichens nach der Textlayoutdarstellung darstellt.
- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)
  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Endposition eines typografischen Zeichens nach der Textlayoutdarstellung darstellt.
- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt einen [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, der das berechnete enge Begrenzungsrechteck der Glyphe darstellt, das einem gegebenen typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt eine Fließkommazahl zurück, die die Rotation eines typografischen Zeichens darstellt.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt eine ganze Zahl zurück, die das Zeichen repräsentiert, das eine Textglyphe an einer bestimmten Position im Koordinatensystem gerendert hat. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins ist, wird nur das erste Zeichen des relevanten typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Statische Eigenschaften

- `LENGTHADJUST_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einem neuen Wert diesen Typ zuzuweisen oder einen bestehenden Wert auf diesen Typ zu wechseln.
- `LENGTHADJUST_SPACING` (1)
  - : Entspricht dem Wert `spacing`.
- `LENGTHADJUST_SPACINGANDGLYPHS` (2)
  - : Entspricht dem Wert `spacingAndGlyphs`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
