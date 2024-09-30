---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{ APIRef("CSSOM") }}

Das `CaretPosition`-Interface repräsentiert die Caret-Position, einen Indikator für die Text-Einfügestelle. Sie können eine `CaretPosition` mithilfe der [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) Methode erhalten.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`CaretPosition.offsetNode`](/de/docs/Web/API/CaretPosition/offsetNode) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der den am Caret-Position gefundene Knoten enthält.
- [`CaretPosition.offset`](/de/docs/Web/API/CaretPosition/offset) {{ReadOnlyInline}}
  - : Gibt einen `long` zurück, der den Zeichen-Offset im Caret-Positionsknoten repräsentiert.

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
