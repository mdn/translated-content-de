---
title: "Selection: focusNode-Eigenschaft"
short-title: focusNode
slug: Web/API/Selection/focusNode
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Selection.focusNode`** gibt den
{{domxref("Node")}} zurück, in dem die Auswahl endet.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (entgegengesetzt zur Dokumentreihenfolge) vornehmen. Der Fokus ist der Punkt, an dem der Benutzer die Auswahl beendet hat. Dies kann veranschaulicht werden, indem Sie die <kbd>Shift</kbd>-Taste gedrückt halten und die Pfeiltasten auf Ihrer Tastatur verwenden, um die aktuelle Auswahl zu ändern. Der Fokus der Auswahl bewegt sich, aber der Anker der Auswahl, das andere Ende der Auswahl, bewegt sich nicht.

## Wert

Ein {{domxref("Node")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Selection")}}, das Interface, zu dem es gehört.
