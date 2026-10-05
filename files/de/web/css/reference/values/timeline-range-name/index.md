---
title: CSS-Datentyp `<timeline-range-name>`
short-title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: 4aba58b4ad2745a73054f60b6d649d8e29b7b44d
---

Der **`<timeline-range-name>`**-Datentyp ist ein {{Glossary("enumerated", "Aufzählungstyp")}} und bezeichnet einen CSS-Bezeichner, der einen der vordefinierten benannten Zeitachsenbereiche innerhalb einer [Ansichtsfortschritts-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) repräsentiert.

Die Schlüsselwortwerte von `<timeline-range-name>` werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) sowie in den folgenden Lang- und Kurzschreibweise-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} (Kurzschreibweise)
- {{cssxref("timeline-trigger-activation-range-end")}}
- {{cssxref("timeline-trigger-activation-range-start")}}
- {{cssxref("timeline-trigger-activation-range")}} (Kurzschreibweise)
- {{cssxref("timeline-trigger-active-range-end")}}
- {{cssxref("timeline-trigger-active-range-start")}}
- {{cssxref("timeline-trigger-active-range")}} (Kurzschreibweise)

## Syntax

Gültige Werte für `<timeline-range-name>`:

- `cover`
  - : Repräsentiert den gesamten Bereich einer Ansichtsfortschritts-Zeitachse: vom Punkt, an dem die vordere Rahmenkante des Bezugselements erstmals in den Sichtbarkeitsbereich für den Ansichtsfortschritt des Scrollports eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem die hintere Rahmenkante diesen vollständig verlassen hat (`100%` Fortschritt). Dies ist der Standardbereich für [Ansichtsfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines).

- `contain`
  - : Repräsentiert den Bereich einer Ansichtsfortschritts-Zeitachse, in dem das Bezugselement vollständig im Sichtbarkeitsbereich für den Ansichtsfortschritt innerhalb des {{Glossary("Scroll_container#scrollport", "Scrollports")}} enthalten ist oder diesen vollständig umfasst.
    - Ist das Bezugselement kleiner als der Scrollport, reicht der Bereich von dem Punkt, an dem das Bezugselement erstmals vollständig im Scrollport enthalten ist (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig darin enthalten ist (`100%` Fortschritt).
    - Ist das Bezugselement größer als der Scrollport, reicht der Bereich von dem Punkt, an dem das Bezugselement den Scrollport erstmals vollständig bedeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es ihn nicht mehr vollständig bedeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer Ansichtsfortschritts-Zeitachse von dem Punkt, an dem das Bezugselement beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig eingetreten ist. `0%` entspricht `0%` des `cover`-Bereichs. `100%` entspricht `0%` des `contain`-Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer Ansichtsfortschritts-Zeitachse von dem Punkt, an dem das Bezugselement beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es ihn vollständig verlassen hat. `0%` entspricht `100%` des `contain`-Bereichs. `100%` entspricht `100%` des `cover`-Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die hintere Rahmenkante überquert. Der Beginn des Bereichs (`0%` Fortschritt) liegt an dem Punkt, an dem die vordere Rahmenkante der Hauptbox des Elements mit der hinteren Kante seines Sichtbarkeitsbereichs für den Ansichtsfortschritt zusammenfällt. Das Ende des Bereichs (`100%`) liegt an dem Punkt, an dem die hintere Rahmenkante der Hauptbox des Elements mit der hinteren Kante dieses Sichtbarkeitsbereichs zusammenfällt. Die Länge des Bereichs entspricht der Größe der Hauptbox des Elements in Scrollrichtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die vordere Rahmenkante überquert. Der Beginn des Bereichs (`0%` Fortschritt) liegt an dem Punkt, an dem die vordere Rahmenkante der Hauptbox des Elements mit der vorderen Kante seines Sichtbarkeitsbereichs für den Ansichtsfortschritt zusammenfällt. Das Ende des Bereichs (`100%` Fortschritt) liegt an dem Punkt, an dem die hintere Rahmenkante der Hauptbox des Elements mit der vorderen Kante dieses Sichtbarkeitsbereichs zusammenfällt. Die Länge des Bereichs entspricht der Größe der Hauptbox des Elements in Scrollrichtung.

- `scroll`
  - : Repräsentiert den gesamten Bereich des {{Glossary("scroll_container", "Scroll-Containers")}}, für den die Ansichtsfortschritts-Zeitachse definiert ist. Der Beginn (`0%` Fortschritt) und das Ende (`100%` Fortschritt) des Bereichs liegen an der Anfangs- bzw. Endposition des Scroll-Containers, der der Ansichtsfortschritts-Zeitachse zugrunde liegt. Dies ist der Standardbereich für [Scrollfortschritts-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing | scroll`)}}

## Beispiele

Siehe die [Visualisierung der Bereiche einer Ansichts-Zeitachse](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

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
- [Zeitachsenbereichsnamen verstehen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Zeitachsen für scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Modul [Scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- Modul [CSS-Animationstrigger](/de/docs/Web/CSS/Guides/Animation_triggers)
- [Visualisierung der Bereiche einer Ansichts-Zeitachse](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
