---
title: "Selection: focusNode-Eigenschaft"
short-title: focusNode
slug: Web/API/Selection/focusNode
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ ApiRef("DOM") }}

Die **`Selection.focusNode`** schreibgeschützte Eigenschaft gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Sie kann `null` zurückgeben, wenn im Dokument nie eine Auswahl existierte (z. B. ein iframe, auf das nie geklickt wurde, oder der Node gehört zu einem anderen Dokumentbaum).

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentenreihenfolge) oder von rechts nach links (entgegengesetzt der Dokumentenreihenfolge) vornehmen. Der Fokus ist der Punkt, an dem der Benutzer die Auswahl beendet hat. Dies kann durch Halten der <kbd>Umschalt</kbd>-Taste und Drücken der Pfeiltasten auf der Tastatur visualisiert werden. Der Fokus der Auswahl bewegt sich, aber der Anker der Auswahl, das andere Ende der Auswahl, bewegt sich nicht.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection)
- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode)
