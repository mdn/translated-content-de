---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: 96de3e876c96f644f3d9675024f992d5868b3ef1
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "enumerierte")}} Datentyp ist ein CSS-Bezeichner, der einen der vordefinierten benannten Zeitachsenbereiche innerhalb einer [View-Progress-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) und den folgenden Lang- und Kurzhand-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzhand

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Repräsentiert den gesamten Bereich einer View-Progress-Zeitachse, vom Punkt, an dem der Start-Rand des betreffenden Elements erstmals in den View-Progress-Sichtbarkeitsbereich des Scrollports eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem der End-Rand ihn vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Repräsentiert den Bereich einer View-Progress-Zeitachse, bei dem das betreffende Element vollständig vom Sichtbarkeitsbereich der View-Progress-Zeitachse innerhalb des {{Glossary("Scroll_container#scrollport", "Scrollports")}} umfasst wird oder diesen vollständig umfasst.
    - Wenn das betreffende Element kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das betreffende Element erstmals vollständig vom Scrollport umfasst wird (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport umfasst wird (`100%` Fortschritt).
    - Wenn das betreffende Element größer als der Scrollport ist, reicht es von dem Punkt, an dem das betreffende Element erstmals den Scrollport vollständig abdeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig abdeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer View-Progress-Zeitachse vom Punkt, an dem das betreffende Element erstmals in den Scrollport einzutreten beginnt, bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist. `0%` ist gleichbedeutend mit `0%` des `cover` Bereichs. `100%` ist gleichbedeutend mit `0%` des `contain` Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer View-Progress-Zeitachse vom Punkt, an dem das betreffende Element erstmals beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es den Scrollport vollständig verlassen hat. `0%` ist gleichbedeutend mit `100%` des `contain` Bereichs. `100%` ist gleichbedeutend mit `100%` des `cover` Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox den End-Rand kreuzt. Der Start (0% Fortschritt) des Bereichs tritt ein, wenn der Start-Rand der Hauptbox des Elements mit dem End-Rand seines Sichtbarkeitsbereichs der View-Progress-Zeitachse zusammenfällt. Das Ende (100%) des Bereichs ist der Punkt, an dem der End-Rand der Hauptbox des Elements mit dem End-Rand seines Sichtbarkeitsbereichs der View-Progress-Zeitachse zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in der Scrollrichtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox den Start-Rand kreuzt. Der Bereichsstart (0% Fortschritt) tritt ein, wenn der Start-Rand der Hauptbox des Elements mit dem Start-Rand seines Sichtbarkeitsbereichs der View-Progress-Zeitachse zusammenfällt. Das Ende des Bereichs (100% Fortschritt) ist der Punkt, an dem der End-Rand der Hauptbox des Elements mit dem Start-Rand seines Sichtbarkeitsbereichs der View-Progress-Zeitachse zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in der Scrollrichtung.

- `scroll`
  - : Repräsentiert den gesamten Bereich des {{Glossary("scroll_container", "Scrollcontainers")}}, auf dem die View-Progress-Zeitachse definiert ist. Der Bereichsstart (0% Fortschritt) und das Ende (100% Fortschritt) treten an den allerersten und letzten Positionen des Scrollcontainers auf, der der View-Progress-Zeitachse zugrunde liegt.

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing | scroll`)}}

## Beispiele

Siehe den [View-Timeline-Bereichsvisualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Verständnis von Zeitachsenbereichsnamen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names)
- [Scroll-gesteuerte Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View-Timeline-Bereichsvisualisierer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
