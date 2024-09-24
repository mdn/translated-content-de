---
title: "PointerEvent: height Eigenschaft"
short-title: height
slug: Web/API/PointerEvent/height
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("Pointer Events") }}

Die **`height`**-Eigenschaft des schreibgeschützten {{domxref("PointerEvent")}}-Interfaces gibt die Höhe der Kontaktgeometrie des Zeigers entlang der y-Achse (in CSS-Pixeln) an. Abhängig von der Quelle des Zeigereingabegeräts (z. B. einem Finger) kann jeder Ereignis für einen bestimmten Zeiger einen unterschiedlichen Wert erzeugen.

Wenn die Eingabehardware die Geometrie des Kontakts nicht an den Browser melden kann, ist die Höhe standardmäßig auf `1` gesetzt.

## Wert

Die Höhe des Kontaktbereichs des Ereignisses (in CSS-Pixeln).

## Beispiele

Ein Beispiel für diese Eigenschaft finden Sie im [PointerEvent.width Beispiel](/de/docs/Web/API/PointerEvent/width#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
