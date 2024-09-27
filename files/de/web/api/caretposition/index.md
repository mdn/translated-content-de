---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{ APIRef("CSSOM") }}

Die Schnittstelle `CaretPosition` stellt die Caret-Position dar, einen Indikator für den Texteinfügepunkt. Sie können eine `CaretPosition` mit der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) erhalten.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`CaretPosition.offsetNode`](/de/docs/Web/API/CaretPosition/offsetNode) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der den gefundenen Knoten an der Caret-Position enthält.
- [`CaretPosition.offset`](/de/docs/Web/API/CaretPosition/offset) {{ReadOnlyInline}}
  - : Gibt ein `long` zurück, das den Zeichenoffset im Caret-Positionsknoten darstellt.

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
