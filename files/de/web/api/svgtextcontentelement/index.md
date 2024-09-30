---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Das **`SVGTextContentElement`**-Interface wird von Elementen implementiert, die das Rendern von Kindtextinhalten unterstützen. Es wird von verschiedenen textbezogenen Schnittstellen, wie [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement), [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement) geerbt.

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

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das Attribut {{SVGAttr("textLength")}} des angegebenen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das das Attribut {{SVGAttr("lengthAdjust")}} des angegebenen Elements widerspiegelt. Die numerischen Typwerte repräsentieren einen der oben genannten konstanten Werte.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt eine lange Zahl zurück, die die Gesamtzahl der adressierbaren Zeichen darstellt, die innerhalb des aktuellen Elements für das Rendern verfügbar sind, unabhängig davon, ob sie gerendert werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt eine Gleitkommazahl zurück, die die berechnete Länge des Textes innerhalb des Elements darstellt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt eine Gleitkommazahl zurück, die die berechnete Länge des formatierten Textvorschubbetrags für einen Textabschnitt innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Zeichen im Abschnitt und jeden zusätzlichen Abstand berücksichtigt, der durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügt wird. Visuelle Abstandsanpassungen, die durch das 'x'-Attribut vorgenommen werden, werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)

  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Position eines typografischen Zeichens nach erfolgtem Textlayout darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode einen [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)

  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Endposition eines typografischen Zeichens nach erfolgtem Textlayout darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode einen [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt einen [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, der den berechneten engen Begrenzungsrahmen der Glyphezelle darstellt, die einem gegebenen typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt eine Gleitkommazahl zurück, die die Rotation eines typografischen Zeichens darstellt.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt eine lange Zahl zurück, die das Zeichen darstellt, das verursacht hat, dass eine Textglyphe an einer gegebenen Position im Koordinatensystem gerendert wurde. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins ist, wird nur das erste Zeichen des relevanten typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
