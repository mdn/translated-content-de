---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die **`SVGTextContentElement`**-Schnittstelle wird von Elementen implementiert, die das Rendern von Kind-Textinhalten unterstützen. Sie wird von verschiedenen textbezogenen Schnittstellen wie {{domxref("SVGTextElement")}}, {{domxref("SVGTSpanElement")}}, {{domxref("SVGTRefElement")}} und {{domxref("SVGTextPathElement")}} geerbt.

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

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGTextContentElement.textLength")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der das {{SVGAttr("textLength")}} Attribut des gegebenen Elements widerspiegelt.
- {{domxref("SVGTextContentElement.lengthAdjust")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der das {{SVGAttr("lengthAdjust")}} Attribut des gegebenen Elements widerspiegelt. Die numerischen Typwerte repräsentieren einen der oben genannten Konstantenwerte.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGTextContentElement.getNumberOfChars()")}}
  - : Gibt ein Long zurück, das die Gesamtzahl der adressierbaren Zeichen darstellt, die innerhalb des aktuellen Elements für das Rendern verfügbar sind, unabhängig davon, ob sie gerendert werden.
- {{domxref("SVGTextContentElement.getComputedTextLength()")}}
  - : Gibt ein Float zurück, das die berechnete Länge für den Text innerhalb des Elements darstellt.
- {{domxref("SVGTextContentElement.getSubStringLength()")}}
  - : Gibt ein Float zurück, das die berechnete Länge der formatierten Texterweiterungsstrecke für einen Teilstring des Textes innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Teilstring und jeglichen zusätzlichen Abstand, der durch die CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingeführt wurde, berücksichtigt. Visuelle Abstands-Anpassungen, die durch das 'x'-Attribut vorgenommen wurden, werden ignoriert.
- {{domxref("SVGTextContentElement.getStartPositionOfChar()")}}

  - : Gibt ein {{domxref("DOMPoint")}} zurück, das die Position eines typografischen Zeichens darstellt, nachdem das Textlayout durchgeführt wurde.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode ein {{domxref("SVGPoint")}} zurück.

- {{domxref("SVGTextContentElement.getEndPositionOfChar()")}}

  - : Gibt ein {{domxref("DOMPoint")}} zurück, das die Endposition eines typografischen Zeichens darstellt, nachdem das Textlayout durchgeführt wurde.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode ein {{domxref("SVGPoint")}} zurück.

- {{domxref("SVGTextContentElement.getExtentOfChar()")}}
  - : Gibt ein {{domxref("DOMRect")}} zurück, das die berechnete enge Begrenzungsbox der Glyphenzelle darstellt, die einem gegebenen typografischen Zeichen entspricht.
- {{domxref("SVGTextContentElement.getRotationOfChar()")}}
  - : Gibt ein Float zurück, das die Drehung des typografischen Zeichens darstellt.
- {{domxref("SVGTextContentElement.getCharNumAtPosition()")}}
  - : Gibt ein Long zurück, das das Zeichen darstellt, welches ein Textglyph an einer gegebenen Position im Koordinatensystem verursacht hat. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins ist, wird nur das erste Zeichen des relevanten typografischen Zeichens zurückgegeben.
- {{domxref("SVGTextContentElement.selectSubString()")}} {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
