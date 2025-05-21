---
title: "Selection: anchorNode-Eigenschaft"
short-title: anchorNode
slug: Web/API/Selection/anchorNode
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.anchorNode`** gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Sie kann `null` zurückgeben, wenn nie eine Auswahl im Dokument existierte (z. B. ein iframe, das nie angeklickt wurde, oder der Knoten zu einem anderen Dokumentbaum gehört).

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (umgekehrte Dokumentreihenfolge) treffen. Der Anker ist der Punkt, an dem der Benutzer die Auswahl begonnen hat. Dies kann visualisiert werden, indem die <kbd>Umschalttaste</kbd> gehalten und die Pfeiltasten auf Ihrer Tastatur gedrückt werden. Der Anker der Auswahl bewegt sich nicht, aber der Fokus der Auswahl, das andere Ende der Auswahl, bewegt sich.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode)
