---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: ae524b0c327f8aaea51cc6a5c59e0301bde646c0
---

{{ APIRef("CSSOM") }}

Das `CaretPosition`-Interface repräsentiert die Position des Cursors, ein Indikator für den Text-Einfügepunkt.
Sie können eine `CaretPosition` mittels der Methode [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint) erhalten.

## Instanz-Eigenschaften

_Dieses Interface erbt keine Eigenschaften._

- [`CaretPosition.offsetNode`](/de/docs/Web/API/CaretPosition/offsetNode) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der den gefundenen Knoten an der Position des Cursors enthält.
- [`CaretPosition.offset`](/de/docs/Web/API/CaretPosition/offset) {{ReadOnlyInline}}
  - : Gibt einen `long` zurück, der das Offset der Auswahl im Knoten der Cursorposition darstellt.
    Dies wird das Zeichen-Offset in einem Textknoten oder der Index des ausgewählten Kindknotens in einem Elementknoten sein.

## Instanz-Methoden

- [`CaretPosition.getClientRect`](/de/docs/Web/API/CaretPosition/getClientRect)
  - : Gibt das Client-Rechteck für den Cursorbereich zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
- [`Range`](/de/docs/Web/API/Range)
- [`Node`](/de/docs/Web/API/Node)
