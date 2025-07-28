---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: 90e5b796c5741c209aaa674e9ff86d4d7c8e0427
---

{{APIRef("CSSOM")}}

Das `CaretPosition`-Interface repräsentiert die Caret-Position, einen Indikator für den Texteingabepunkt. Sie können eine `CaretPosition` mit der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) erhalten.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`CaretPosition.offsetNode`](/de/docs/Web/API/CaretPosition/offsetNode) {{ReadOnlyInline}}
  - : Gibt ein [`Node`](/de/docs/Web/API/Node) zurück, das den gefundenen Knoten an der Position des Carets enthält.
- [`CaretPosition.offset`](/de/docs/Web/API/CaretPosition/offset) {{ReadOnlyInline}}
  - : Gibt einen `long` zurück, der den Offset der Auswahl im Knoten der Caret-Position repräsentiert. Dies wird der Zeichenoffset in einem Textknoten oder der Index des ausgewählten Kindknotens in einem Elementknoten sein.

## Instanz-Methoden

- [`CaretPosition.getClientRect`](/de/docs/Web/API/CaretPosition/getClientRect)
  - : Gibt das Client-Rechteck für den Caret-Bereich zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
- [`Range`](/de/docs/Web/API/Range)
- [`Node`](/de/docs/Web/API/Node)
