---
title: SVGTextContentElement
slug: Web/API/SVGTextContentElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGTextContentElement`**-Interface wird von Elementen implementiert, die das Rendern von Textinhalt in untergeordneten Elementen unterstützen. Es wird von verschiedenen textbezogenen Schnittstellen geerbt, wie zum Beispiel [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) und [`SVGTextPathElement`](/de/docs/Web/API/SVGTextPathElement).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.textLength`](/de/docs/Web/API/SVGTextContentElement/textLength) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das das Attribut {{SVGAttr("textLength")}} des gegebenen Elements widerspiegelt.
- [`SVGTextContentElement.lengthAdjust`](/de/docs/Web/API/SVGTextContentElement/lengthAdjust) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das das Attribut {{SVGAttr("lengthAdjust")}} des gegebenen Elements widerspiegelt. Die numerischen Typwerte stehen für einen der `LENGTHADJUST_*`-Konstantenwerte.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGTextContentElement.getNumberOfChars()`](/de/docs/Web/API/SVGTextContentElement/getNumberOfChars)
  - : Gibt eine lange Zahl zurück, die die Gesamtzahl der adressierbaren Zeichen darstellt, die innerhalb des aktuellen Elements zum Rendern verfügbar sind, unabhängig davon, ob sie gerendert werden.
- [`SVGTextContentElement.getComputedTextLength()`](/de/docs/Web/API/SVGTextContentElement/getComputedTextLength)
  - : Gibt eine Gleitkommazahl zurück, die die berechnete Länge des Textes innerhalb des Elements darstellt.
- [`SVGTextContentElement.getSubStringLength()`](/de/docs/Web/API/SVGTextContentElement/getSubStringLength)
  - : Gibt eine Gleitkommazahl zurück, die die berechnete Länge der formatierten Textvorschubstrecke für ein Textsubstring innerhalb des Elements darstellt. Beachten Sie, dass diese Methode nur die Breiten der Glyphen im Substring und die von den CSS-Eigenschaften 'letter-spacing' und 'word-spacing' eingefügten zusätzlichen Abstände berücksichtigt. Visuelle Abstandsanpassungen, die durch das Attribut 'x' vorgenommen werden, werden ignoriert.
- [`SVGTextContentElement.getStartPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getStartPositionOfChar)

  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Position eines typografischen Zeichens nach der Textlayout-Durchführung darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode einen [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getEndPositionOfChar()`](/de/docs/Web/API/SVGTextContentElement/getEndPositionOfChar)

  - : Gibt einen [`DOMPoint`](/de/docs/Web/API/DOMPoint) zurück, der die Endposition eines typografischen Zeichens nach der Textlayout-Durchführung darstellt.

    > [!NOTE]
    > In SVG 1.1 gab diese Methode einen [`SVGPoint`](/de/docs/Web/API/SVGPoint) zurück.

- [`SVGTextContentElement.getExtentOfChar()`](/de/docs/Web/API/SVGTextContentElement/getExtentOfChar)
  - : Gibt ein [`DOMRect`](/de/docs/Web/API/DOMRect) zurück, das die berechnete enge Begrenzungsbox der Glyphe darstellt, die einem gegebenen typografischen Zeichen entspricht.
- [`SVGTextContentElement.getRotationOfChar()`](/de/docs/Web/API/SVGTextContentElement/getRotationOfChar)
  - : Gibt eine Gleitkommazahl zurück, die die Rotation eines typografischen Zeichens darstellt.
- [`SVGTextContentElement.getCharNumAtPosition()`](/de/docs/Web/API/SVGTextContentElement/getCharNumAtPosition)
  - : Gibt eine lange Zahl zurück, die das Zeichen darstellt, das eine Textglyphe verursacht hat, bei einer gegebenen Position im Koordinatensystem gerendert zu werden. Da die Beziehung zwischen Zeichen und Glyphen nicht eins zu eins ist, wird nur das erste Zeichen des relevanten typografischen Zeichens zurückgegeben.
- [`SVGTextContentElement.selectSubString()`](/de/docs/Web/API/SVGTextContentElement/selectSubString) {{deprecated_inline}}
  - : Wählt Text innerhalb des Elements aus.

## Statische Eigenschaften

- `LENGTHADJUST_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu diesem Typ zu wechseln.
- `LENGTHADJUST_SPACING` (1)
  - : Entspricht dem Wert `spacing`.
- `LENGTHADJUST_SPACINGANDGLYPHS` (2)
  - : Entspricht dem Wert `spacingAndGlyphs`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
