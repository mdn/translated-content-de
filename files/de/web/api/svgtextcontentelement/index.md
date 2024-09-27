---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Das **`SVGTextContentElement`** Interface wird von Elementen implementiert, die das Rendern von untergeordneten Textinhalten unterstützen. Es wird von verschiedenen textbezogenen Schnittstellen geerbt, wie [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement), [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

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
      <td>Das <code>spacing</code>-Schlüsselwort.</td>
    </tr>
    <tr>
      <td>LENGTHADJUST_SPACINGANDGLYPHS</td>
      <td>2</td>
      <td>Das <code>spacingAndGlyphs</code>-Schlüsselwort.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das {{SVGAttr("textLength")}} Attribut des angegebenen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das das {{SVGAttr("lengthAdjust")}} Attribut des angegebenen Elements widerspiegelt. Die numerischen Typwerte repräsentieren einen der oben genannten Konstantenwerte.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt ein `long` zurück, das die Gesamtzahl der adressierbaren Zeichen darstellt, die innerhalb des aktuellen Elements gerendert werden können, unabhängig davon, ob sie gerendert werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt einen `float` zurück, der die berechnete Länge des Textes innerhalb des Elements darstellt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt einen `float` zurück, der die berechnete Länge des formatierten Textvorschubabstands für ein Text-Substring innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Substring und jeden zusätzlichen Abstand berücksichtigt, der durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügt wird. Visuelle Abstandsverschiebungen, die durch das 'x' Attribut vorgenommen wurden, werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)

  - : Gibt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, das die Position eines typografischen Zeichens nach erfolgtem Textlayout darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)

  - : Gibt ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, das die Endposition eines typografischen Zeichens nach erfolgtem Textlayout darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode ein [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das die berechnete enge Begrenzungsbox der Glyphenzelle darstellt, die einem bestimmten typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt einen `float` zurück, der die Drehung eines typografischen Zeichens darstellt.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt ein `long` zurück, das das Zeichen darstellt, welches ein Textglyphe an einer bestimmten Position im Koordinatensystem verursacht hat. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins ist, wird nur das erste Zeichen des relevanten typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
