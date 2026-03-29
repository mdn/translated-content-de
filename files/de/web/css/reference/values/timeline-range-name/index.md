---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: f94b7a0b06a0e32df81ec8197720d306fe50a4a0
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "aufgezählte")}} Datentyp ist ein CSS-Identifikator, der einen der vordefinierten benannten Timeline-Bereiche innerhalb einer [View Progress Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) sowie in den folgenden Lang- und Kurzschreibweise-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzschreibweise

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Repräsentiert den gesamten Bereich einer View Progress Timeline, von dem Punkt, an dem die Startkantenbegrenzung des Subjektelements erstmals in den Sichtbarkeitsbereich des Scrollports eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem die Endkantenbegrenzung ihn vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Repräsentiert den Bereich einer View Progress Timeline, in dem das Subjektelelement vollständig innerhalb des Sichtbarkeitsbereichs des Scrollports enthalten ist oder ihn vollständig enthält.
    - Wenn das Subjektelelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelelement erstmals vollständig vom Scrollport enthalten wird (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport enthalten wird (`100%` Fortschritt).
    - Wenn das Subjektelelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelelement erstmals den Scrollport vollständig abdeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig den Scrollport abdeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer View Progress Timeline von dem Punkt, an dem das Subjektelelement zuerst beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist. `0%` entspricht `0%` des `cover`-Bereichs. `100%` entspricht `0%` des `contain`-Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer View Progress Timeline von dem Punkt, an dem das Subjektelement zuerst beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es vollständig den Scrollport verlassen hat. `0%` entspricht `100%` des `contain`-Bereichs. `100%` entspricht `100%` des `cover`-Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, während dem die Hauptbox die Endkantenbegrenzung kreuzt. Der Anfang (0% Fortschritt) des Bereichs tritt ein, wenn die Startkantenbegrenzung der Hauptbox des Elements mit der Endkante seines Sichtbarkeitsbereichs zusammenfällt. Das Ende (100%) des Bereichs ist der Punkt, an dem die Endkantenbegrenzung der Hauptbox des Elements mit der Endkante seines Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in der Scrollrichtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die Startkantenbegrenzung kreuzt. Der Bereichsanfang (0% Fortschritt) tritt ein, wenn die Startkantenbegrenzung der Hauptbox des Elements mit der Startkante seines Sichtbarkeitsbereichs zusammenfällt. Das Ende des Bereichs (100% Fortschritt) ist der Punkt, an dem die Endkantenbegrenzung der Hauptbox des Elements mit der Startkante seines Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in der Scrollrichtung.

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Beispiele

Sehen Sie sich den [View Timeline Range Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Verständnis der Timeline-Bereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Scroll-getriebene Animationstimeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View Timeline Range Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
