---
title: "Auswahl: anchorOffset-Eigenschaft"
short-title: anchorOffset
slug: Web/API/Selection/anchorOffset
l10n:
  sourceCommit: e1663b9aa12ab98ad6d9b054f3e25835242ddfad
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.anchorOffset`** gibt die Anzahl der Zeichen zurück, um die der Anker der Auswahl innerhalb des [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) versetzt ist, wenn dieser Knoten vom Typ [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection) oder [`Comment`](/de/docs/Web/API/Comment) ist.

Falls [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) ein anderer Knotentyp ist, gibt **`Selection.anchorOffset`** die Anzahl der [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) zurück, um die der Anker der Auswahl innerhalb des [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) versetzt ist.

Diese Zahl basiert auf Null. Wenn die Auswahl mit dem ersten Zeichen im [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) beginnt, wird `0` zurückgegeben.

## Wert

Eine Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der sie gehört.
