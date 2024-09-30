---
title: "PointerEvent: height-Eigenschaft"
short-title: height
slug: Web/API/PointerEvent/height
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`height`**-Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle repräsentiert die Höhe der Kontaktgeometrie des Zeigers entlang der y-Achse (in CSS-Pixeln). Abhängig von der Quelle des Zeigergeräts (zum Beispiel ein Finger) kann für einen bestimmten Zeiger jedes Ereignis einen anderen Wert erzeugen.

Falls die Eingabehardware die Kontaktgeometrie nicht an den Browser melden kann, ist die Höhe standardmäßig `1`.

## Wert

Die Höhe des Kontaktbereichs des Ereignisses (in CSS-Pixeln).

## Beispiele

Ein Beispiel für diese Eigenschaft ist im [PointerEvent.width Beispiel](/de/docs/Web/API/PointerEvent/width#examples) enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
