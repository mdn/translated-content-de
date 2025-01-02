---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{APIRef("SVG")}}

Die **`SVGTextContentElement`**-Schnittstelle wird von Elementen implementiert, die das Rendern von untergeordnetem Textinhalt unterstützen. Sie wird von verschiedenen textbezogenen Schnittstellen geerbt, wie z. B. [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement), [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

{{InheritanceDiagram}}

## Konstanten

<table class="standard-table">
  <tbody>
    <tr>
      <td>Konstante</td>
      <td>Wert</td>
      <td>Beschreibung</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_UNKNOWN</td>
      <td>0</td>
      <td>Ein anderer Wert.</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACING</td>
      <td>1</td>
      <td>Das Schlüsselwort <code>spacing</code>.</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACINGANDGLYPHS</td>
      <td>2</td>
      <td>Das Schlüsselwort <code>spacingAndGlyphs</code>.</td>
    </tr>
  </tbody>
</table>

## Instanzattribute

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das {{SVGAttr("textLength")}}-Attribut des gegebenen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das das {{SVGAttr("lengthAdjust")}}-Attribut des gegebenen Elements widerspiegelt. Die numerischen Typwerte stellen einen der oben genannten Konstantenwerte dar.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt eine lange Zahl zurück, die die Gesamtanzahl der adressierbaren Zeichen darstellt, die innerhalb des aktuellen Elements gerendert werden können, unabhängig davon, ob sie tatsächlich gerendert werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt einen Float zurück, der die berechnete Länge des Textes innerhalb des Elements darstellt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt einen Float zurück, der die berechnete Länge der formatierten Textvorschublänge für einen Teilstring von Text innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Teilstring und jeden zusätzlichen Abstand berücksichtigt, der durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügt wird. Visuelle Abstandsjustierungen, die durch das 'x'-Attribut vorgenommen werden, werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)

  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Position eines typografischen Zeichens nach der Textlayoutbearbeitung darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode einen [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)

  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Endposition eines typografischen Zeichens nach der Textlayoutbearbeitung darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode einen [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das das berechnete enge Begrenzungsrechteck der Glyphenzelle darstellt, die einem gegebenen typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt einen Float zurück, der die Rotation eines typografischen Zeichens darstellt.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt eine lange Zahl zurück, die das Zeichen darstellt, das ein Textglyph an einer bestimmten Position im Koordinatensystem verursacht hat. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins ist, wird nur das erste Zeichen des relevanten typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
