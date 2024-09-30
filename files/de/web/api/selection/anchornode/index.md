---
title: "Selection: anchorNode-Eigenschaft"
short-title: anchorNode
slug: Web/API/Selection/anchorNode
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die **`Selection.anchorNode`** schreibgeschützte Eigenschaft gibt den
[`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links
(entgegen der Dokumentreihenfolge) treffen. Der Anker ist dort, wo der Benutzer die Auswahl begonnen hat. Dies kann
veranschaulicht werden, indem Sie die Umschalttaste gedrückt halten und die Pfeiltasten auf Ihrer Tastatur drücken. Der
Anker der Auswahl bewegt sich nicht, aber der Fokus der Auswahl, das andere Ende der
Auswahl, bewegt sich.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
