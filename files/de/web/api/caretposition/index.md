---
title: CaretPosition
slug: Web/API/CaretPosition
l10n:
  sourceCommit: 8b920a5e7567dcc9d642dfbd704b0ddbe2005d30
---

{{ APIRef("CSSOM") }}

Die Schnittstelle `CaretPosition` repräsentiert die Textposition des Cursors, einen Indikator für die Einfügestelle im Text. Sie können eine `CaretPosition` mit der Methode {{domxref("Document.caretPositionFromPoint()")}} abrufen.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- {{domxref("CaretPosition.offsetNode")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Node")}} zurück, das den gefundenen Knoten an der Position des Cursors enthält.
- {{domxref("CaretPosition.offset")}} {{ReadOnlyInline}}
  - : Gibt einen `long` zurück, der den Zeichenoffset im Knoten der Cursorposition darstellt.

## Instanz-Methoden

- {{domxref("CaretPosition.getClientRect")}}
  - : Gibt das Client-Rechteck für den Cursorbereich zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.caretPositionFromPoint()")}}
- {{domxref("Range")}}
- {{domxref("Node")}}
