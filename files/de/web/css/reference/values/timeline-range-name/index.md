---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: f6b253c16e6b1b9fe568c082a6f9f9bbd18a1c5d
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "enumerierte")}} Datentyp ist ein CSS-Bezeichner, der eine der vordefinierten benannten Timeline-Bereiche in einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzschreibweiseigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzschreibweise

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Repräsentiert den gesamten Bereich einer View-Progress-Timeline, vom Punkt, an dem die Start-Kantenlinie des Subjektelements zuerst den Sichtbarkeitsbereich des Scrollports betritt (`0%` Fortschritt), bis zu dem Punkt, an dem die End-Kantenlinie ihn vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Repräsentiert den Bereich einer View-Progress-Timeline, in dem das Subjektelement vollständig vom Sichtbarkeitsbereich des Scrollports umschlossen wird oder diesen vollständig umschließt
    - Wenn das Subjektelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement zuerst vollständig vom Scrollport umschlossen wird (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig umschlossen wird (`100%` Fortschritt).
    - Wenn das Subjektelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement zuerst den Scrollport vollständig bedeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig bedeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer View-Progress-Timeline von dem Punkt, an dem das Subjektelement beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig eingetreten ist. `0%` entspricht `0%` des `cover` Bereichs. `100%` entspricht `0%` des `contain` Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer View-Progress-Timeline von dem Punkt, an dem das Subjektelement beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es vollständig verlassen hat. `0%` entspricht `0%` des `contain` Bereichs. `100%` entspricht `0%` des `cover` Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, während dessen die Hauptbox die End-Kantenlinie überschreitet. Der Start (0% Fortschritt) des Bereichs tritt ein, wenn die Start-Kantenlinie der Hauptbox des Elements mit der Endlinie seines Sichtbarkeitsbereichs übereinstimmt. Das Ende (100%) des Bereichs ist der Punkt, an dem die End-Kantenlinie der Hauptbox des Elements mit der Endlinie seines Sichtbarkeitsbereichs übereinstimmt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in Scroll-Richtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die Start-Kantenlinie überschreitet. Der Bereichsstart (0% Fortschritt) tritt ein, wenn die Start-Kantenlinie der Hauptbox des Elements mit der Startlinie seines Sichtbarkeitsbereichs übereinstimmt. Das Bereichsende (100% Fortschritt) ist der Punkt, an dem die End-Kantenlinie der Hauptbox des Elements mit der Startlinie seines Sichtbarkeitsbereichs übereinstimmt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in Scroll-Richtung.

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Beispiele

Siehe den [View Timeline Bereichs-Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Scroll-gesteuerte Animationstimelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View Timeline Bereichs-Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
