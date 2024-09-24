---
title: "Auswahl: Eigenschaft anchorNode"
short-title: anchorNode
slug: Web/API/Selection/anchorNode
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.anchorNode`** gibt den {{domxref("Node")}} zurück, in dem die Auswahl beginnt.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (umgekehrte Dokumentreihenfolge) vornehmen. Der Anker ist der Punkt, an dem der Benutzer die Auswahl begonnen hat. Dies kann veranschaulicht werden, indem die Umschalttaste gehalten und die Pfeiltasten auf Ihrer Tastatur gedrückt werden. Der Anker der Auswahl bewegt sich nicht, jedoch bewegt sich der Fokus der Auswahl, das andere Ende der Auswahl.

## Wert

Ein {{domxref("Node")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, die Schnittstelle, zu der es gehört.
