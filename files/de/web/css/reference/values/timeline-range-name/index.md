---
title: "`<timeline-range-name>` CSS-Typ"
short-title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: ddd76a60b6f33cf077f9fdc5d1377ff94acd5aa4
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "aufzählbare")}} Datentyp ist ein CSS-Identifikator, der einen der vordefinierten benannten Zeitachsenbereiche innerhalb einer [View-Progress-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) und den folgenden Lang- und Kurzschrift-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzschrift

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Repräsentiert den vollständigen Bereich einer View-Progress-Zeitleiste, von dem Punkt, an dem die Startgrenze des Subjektelements erstmals in den Sichtbarkeitsbereich der Scrollport-Ansichtsfortschritte eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem die Endgrenze ihn vollständig verlassen hat (`100%` Fortschritt). Dies ist der Standardbereich für [View-Progress-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#view_progress_timelines).

- `contain`
  - : Repräsentiert den Bereich einer View-Progress-Zeitleiste, in dem das Subjektelement vollständig vom Sichtbarkeitsbereich des Ansichtsfortschritts innerhalb des {{Glossary("Scroll_container#scrollport", "Scrollports")}} enthalten ist oder diesen vollständig enthält.
    - Wenn das Subjektelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement erstmals vollständig vom Scrollport enthalten ist (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport enthalten ist (`100%` Fortschritt).
    - Wenn das Subjektelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Subjektelement erstmals den Scrollport vollständig überdeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig überdeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer View-Progress-Zeitleiste von dem Punkt, an dem das Subjektelement erstmals beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig den Scrollport betreten hat. `0%` entspricht `0%` des `cover`-Bereichs. `100%` entspricht `0%` des `contain`-Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer View-Progress-Zeitleiste von dem Punkt, an dem das Subjektelement erstmals beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es vollständig aus dem Scrollport heraus ist. `0%` entspricht `100%` des `contain`-Bereichs. `100%` entspricht `100%` des `cover`-Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, währenddessen die Hauptbox die Endgrenze überschreitet. Der Anfang (`0%` Fortschritt) des Bereichs tritt ein, wenn die Anfangsgrenze der Hauptbox des Elements mit der Endgrenze seines Sichtbarkeitsbereichs übereinstimmt. Das Ende (`100%`) des Bereichs ist der Punkt, an dem die Endgrenze der Hauptbox des Elements mit der Endgrenze seines Sichtbarkeitsbereichs übereinstimmt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in der Scrollrichtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die Startgrenze überschreitet. Der Bereichsanfang (`0%` Fortschritt) tritt ein, wenn die Anfangsgrenze der Hauptbox des Elements mit der Startgrenze seines Sichtbarkeitsbereichs übereinstimmt. Das Bereichsende (`100%` Fortschritt) ist der Punkt, an dem die Endgrenze der Hauptbox des Elements mit der Startgrenze seines Sichtbarkeitsbereichs übereinstimmt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in der Scrollrichtung.

- `scroll`
  - : Repräsentiert den vollständigen Bereich des {{Glossary("scroll_container", "Scroll-Containers")}}, auf dem die View-Progress-Zeitleiste definiert ist. Der Bereichsanfang (`0%` Fortschritt) und das Ende (`100%` Fortschritt) treten an den allerersten und letzten Positionen des Scroll-Containers, der der View-Progress-Zeitleiste zugrunde liegt, auf. Dies ist der Standardbereich für [Scroll-Progress-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines).

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing | scroll`)}}

## Beispiele

Sehen Sie sich den [Visualisierer für View-Zeitleistenbereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an.

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
- [Verstehen von Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Scroll-gesteuerte Animations-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Visualisierer für View-Zeitleistenbereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
