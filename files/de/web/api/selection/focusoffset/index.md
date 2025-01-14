---
title: "Selection: focusOffset Property"
short-title: focusOffset
slug: Web/API/Selection/focusOffset
l10n:
  sourceCommit: eea0f3e4950c73b3f648e86a96ab245f4bc958e7
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.focusOffset`** gibt die Anzahl der Zeichen zurück, um die der Fokus der Auswahl innerhalb des [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) versetzt ist, wenn der betreffende Knoten vom Typ [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection) oder [`Comment`](/de/docs/Web/API/Comment) ist.

Wenn [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) ein anderer Knotentyp ist, gibt **`Selection.focusOffset`** die Anzahl der [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) zurück, um die der Fokus der Auswahl innerhalb des [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) versetzt ist.

Diese Zahl ist nullbasiert. Wenn die Auswahl mit dem ersten Zeichen im [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) endet, wird `0` zurückgegeben.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
