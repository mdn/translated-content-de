---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{APIRef("SVG")}}

Das **`SVGTextContentElement`** Interface wird von Elementen implementiert, die das Rendern von Textinhalten von Kindern unterstützen. Es wird von verschiedenen textbezogenen Schnittstellen geerbt, wie z.B. von [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

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
      <td>Das <code>spacing</code> Schlüsselwort.</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACINGANDGLYPHS</td>
      <td>2</td>
      <td>Das <code>spacingAndGlyphs</code> Schlüsselwort.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das {{SVGAttr("textLength")}} Attribut des gegebenen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das das {{SVGAttr("lengthAdjust")}} Attribut des gegebenen Elements widerspiegelt. Die numerischen Typwerte repräsentieren einen der obigen Konstantenwerte.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt einen Long-Wert zurück, der die Gesamtzahl der adressierbaren Zeichen repräsentiert, die innerhalb des aktuellen Elements zur Darstellung zur Verfügung stehen, unabhängig davon, ob sie dargestellt werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt einen Float zurück, der die berechnete Länge des Textes innerhalb des Elements darstellt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt einen Float zurück, der die berechnete Länge des formatierten Textvorschubabstands für einen Textabschnitt innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Textabschnitt und jegliche zusätzlichen Abstände, die durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügt werden, berücksichtigt. Visuelle Abstandsänderungen, die durch das 'x' Attribut vorgenommen werden, werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)

  - : Gibt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, das die Position eines typografischen Zeichens repräsentiert, nachdem das Textlayout durchgeführt wurde.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)

  - : Gibt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, das die Position des Endes eines typografischen Zeichens repräsentiert, nachdem das Textlayout durchgeführt wurde.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das den berechneten engen Begrenzungsrahmen der Glyphenzelle darstellt, die einem gegebenen typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt einen Float zurück, der die Drehung eines typografischen Zeichens repräsentiert.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt einen Long-Wert zurück, der das Zeichen darstellt, das dazu führte, dass ein Textglyph an einer gegebenen Position im Koordinatensystem gerendert wurde. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins besteht, wird nur das erste Zeichen des betreffenden typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
