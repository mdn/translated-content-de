---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: ea22b9b023727cf602c6f563689942a96d187459
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "enumerierte")}} Datentyp ist ein CSS-Identifier, der einen der vordefinierten benannten Timeline-Bereiche innerhalb einer [View Progress Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in den folgenden Longhand- und Shorthand-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} shorthand

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Stellt den gesamten Bereich einer View Progress Timeline dar, von dem Punkt, an dem die Start-Kante des Randes des Zielelements erstmals in den Sichtbarkeitsbereich des Scrollports eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem die End-Kante den Bereich vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Stellt den Bereich einer View Progress Timeline dar, in dem das Zielelement vollständig vom Sichtbarkeitsbereich innerhalb des {{Glossary("Scroll_container#scrollport", "Scrollports")}} enthalten oder vollständig eingeschlossen ist.
    - Wenn das Zielelement kleiner als der Scrollport ist, reicht es von dem Punkt, an dem das Zielelement erstmals vollständig vom Scrollport enthalten ist (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig enthalten ist (`100%` Fortschritt).
    - Wenn das Zielelement größer als der Scrollport ist, reicht es von dem Punkt, an dem das Zielelement erstmals den Scrollport vollständig bedeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig bedeckt (`100%` Fortschritt).

- `entry`
  - : Stellt den Bereich einer View Progress Timeline dar, vom Punkt, an dem das Zielelement erstmals beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist. `0%` ist gleichbedeutend mit `0%` des `cover` Bereichs. `100%` ist gleichbedeutend mit `0%` des `contain` Bereichs.

- `exit`
  - : Stellt den Bereich einer View Progress Timeline dar, vom Punkt, an dem das Zielelement erstmals beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es den Scrollport vollständig verlassen hat. `0%` ist gleichbedeutend mit `0%` des `contain` Bereichs. `100%` ist gleichbedeutend mit `0%` des `cover` Bereichs.

- `entry-crossing`
  - : Stellt den Bereich dar, während dessen das Hauptblock die End-Kante des Randes kreuzt. Der Anfang (0% Fortschritt) des Bereichs erfolgt, wenn die Start-Kante des Randes des Hauptelements mit der End-Kante seines Sichtbarkeitsbereichs zusammenfällt. Das Ende (100%) des Bereichs ist der Punkt, an dem die End-Kante des Randes des Hauptelements mit der End-Kante seines Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs entspricht der Größe des Hauptelements in der Scrollrichtung.

- `exit-crossing`
  - : Stellt den Bereich dar, in dem das Hauptblock die Start-Kante des Randes kreuzt. Der Bereichsstart (0% Fortschritt) erfolgt, wenn die Start-Kante des Randes des Hauptelements mit der Start-Kante seines Sichtbarkeitsbereichs zusammenfällt. Das Bereichsende (100% Fortschritt) ist der Punkt, an dem die End-Kante des Randes des Hauptelements mit der Start-Kante seines Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs entspricht der Größe des Hauptelements in der Scrollrichtung.

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Beispiele

Sehen Sie den [View Timeline Range Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Scroll-getriebene Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-getriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View Timeline Range Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
