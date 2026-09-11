---
title: CSS-Typ `<timeline-range-name>`
short-title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: 5f3da7dfeb0b6938fcae8a08fc08f9b8aea1ff65
---

Der {{Glossary("enumerated", "aufgezählte")}} Datentyp **`<timeline-range-name>`** ist ein CSS-Identifier, der einen der vordefinierten benannten Timeline-Bereiche innerhalb einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die Schlüsselwortwerte von `<timeline-range-name>` werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) sowie in den folgenden Longhand- und Shorthand-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- Shorthand {{cssxref("animation-range")}}

## Syntax

Gültige Werte für `<timeline-range-name>`:

- `cover`
  - : Stellt den vollständigen Bereich einer View-Progress-Timeline dar: vom Punkt, an dem die Start-Rahmenkante des Subjektelements erstmals in den Sichtbarkeitsbereich des View-Fortschritts des Scrollports eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem die End-Rahmenkante ihn vollständig verlassen hat (`100%` Fortschritt). Dies ist der Standardbereich für [View-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines).

- `contain`
  - : Stellt den Bereich einer View-Progress-Timeline dar, in dem das Subjektelement vollständig innerhalb des Sichtbarkeitsbereichs des View-Fortschritts im {{Glossary("Scroll_container#scrollport", "Scrollport")}} enthalten ist oder diesen vollständig enthält.
    - Wenn das Subjektelement kleiner als der Scrollport ist, reicht der Bereich von dem Punkt, an dem das Subjektelement erstmals vollständig im Scrollport enthalten ist (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig im Scrollport enthalten ist (`100%` Fortschritt).
    - Wenn das Subjektelement größer als der Scrollport ist, reicht der Bereich von dem Punkt, an dem das Subjektelement den Scrollport erstmals vollständig überdeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig überdeckt (`100%` Fortschritt).

- `entry`
  - : Stellt den Bereich einer View-Progress-Timeline von dem Punkt dar, an dem das Subjektelement erstmals beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist. `0%` entspricht `0%` des Bereichs `cover`. `100%` entspricht `0%` des Bereichs `contain`.

- `exit`
  - : Stellt den Bereich einer View-Progress-Timeline von dem Punkt dar, an dem das Subjektelement erstmals beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es den Scrollport vollständig verlassen hat. `0%` entspricht `100%` des Bereichs `contain`. `100%` entspricht `100%` des Bereichs `cover`.

- `entry-crossing`
  - : Stellt den Bereich dar, während dessen die Hauptbox die End-Rahmenkante kreuzt. Der Anfang des Bereichs (`0%` Fortschritt) tritt ein, wenn die Start-Rahmenkante der Hauptbox des Elements mit der Endkante seines Sichtbarkeitsbereichs für den View-Fortschritt zusammenfällt. Das Ende des Bereichs (`100%`) ist der Punkt, an dem die End-Rahmenkante der Hauptbox des Elements mit der Endkante seines Sichtbarkeitsbereichs für den View-Fortschritt zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in Scrollrichtung.

- `exit-crossing`
  - : Stellt den Bereich dar, in dem die Hauptbox die Start-Rahmenkante kreuzt. Der Bereichsanfang (`0%` Fortschritt) tritt ein, wenn die Start-Rahmenkante der Hauptbox des Elements mit der Startkante seines Sichtbarkeitsbereichs für den View-Fortschritt zusammenfällt. Das Bereichsende (`100%` Fortschritt) ist der Punkt, an dem die End-Rahmenkante der Hauptbox des Elements mit der Startkante seines Sichtbarkeitsbereichs für den View-Fortschritt zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in Scrollrichtung.

- `scroll`
  - : Stellt den vollständigen Bereich des {{Glossary("scroll_container", "Scroll-Containers")}} dar, für den die View-Progress-Timeline definiert ist. Der Bereichsanfang (`0%` Fortschritt) und das Bereichsende (`100%` Fortschritt) befinden sich an den äußersten Start- und Endpositionen des Scroll-Containers, der der View-Progress-Timeline zugrunde liegt. Dies ist der Standardbereich für [Scroll-Progress-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing | scroll`)}}

## Beispiele

Siehe den [Visualisierer für View-Timeline-Bereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("animation-timeline/scroll", "scroll()")}}, {{cssxref("animation-timeline/view", "view()")}}
- [Benannte Timeline-Bereiche verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Scroll-gesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Modul [CSS Scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Visualisierer für View-Timeline-Bereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
