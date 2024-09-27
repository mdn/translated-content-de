---
title: "PointerEvent: Höhe Eigenschaft"
short-title: height
slug: Web/API/PointerEvent/height
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("Pointer Events") }}

Die **`height`** schreibgeschützte Eigenschaft der
[`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle repräsentiert die Höhe der Kontaktgeometrie des Zeigers entlang der y-Achse (in CSS-Pixeln). Je nach Quelle des Zeigereingabegeräts (zum Beispiel ein Finger) kann für einen gegebenen Zeiger jedes Ereignis einen anderen Wert ergeben.

Wenn die Eingabegeräte-Hardware die Kontaktgeometrie nicht an den Browser melden kann, beträgt die standardmäßige Höhe `1`.

## Wert

Die Höhe des Kontaktbereichs des Ereignisses (in CSS-Pixeln).

## Beispiele

Ein Beispiel für diese Eigenschaft ist im [PointerEvent.width Beispiel](/de/docs/Web/API/PointerEvent/width#examples) enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
