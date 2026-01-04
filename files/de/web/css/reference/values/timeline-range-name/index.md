---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: cebb8b4816e292f9ca6f449cb95f45798058fb10
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "enumerated")}} Datentyp ist ein CSS-Bezeichner, der einen der vordefinierten benannten Zeitachsenbereiche innerhalb einer [View-Progress-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in den folgenden Lang- und Kurzform-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzform

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Repräsentiert den gesamten Bereich einer View-Progress-Timeline, vom Punkt, an dem der Start-Rand des Subjektelements zuerst den Sichtbarkeitsbereich der Scrollport-Ansichtsfortschritts-Timeline betritt (`0%` Fortschritt), bis zu dem Punkt, an dem der Endrand ihn vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Repräsentiert den Bereich einer View-Progress-Timeline, in dem das Subjektelement vollständig vom Sichtbarkeitsbereich der View-Progress-Timeline im {{Glossary("Scroll_container#scrollport", "Scrollport")}} enthalten ist oder ihn vollständig enthält.
    - Wenn das Subjektelement kleiner als der Scrollport ist, erstreckt sich der Bereich von dem Punkt, an dem das Subjektelement erstmals vollständig vom Scrollport enthalten ist (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig vom Scrollport enthalten ist (`100%` Fortschritt).
    - Wenn das Subjektelement größer als der Scrollport ist, erstreckt sich der Bereich von dem Punkt, an dem das Subjektelement erstmals den Scrollport vollständig bedeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es den Scrollport nicht mehr vollständig bedeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer View-Progress-Timeline von dem Punkt, an dem das Subjektelement beginnt, den Scrollport zu betreten, bis zu dem Punkt, an dem es vollständig in den Scrollport eingetreten ist. `0%` entspricht `0%` des `cover` Bereichs. `100%` entspricht `0%` des `contain` Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer View-Progress-Timeline von dem Punkt, an dem das Subjektelement beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es den Scrollport vollständig verlassen hat. `0%` entspricht `100%` des `contain` Bereichs. `100%` entspricht `100%` des `cover` Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, während dessen die Hauptbox den Endrand überschreitet. Der Anfang (0% Fortschritt) des Bereichs tritt ein, wenn der Startrand der Hauptbox des Elements mit dem Endrand seines Sichtbarkeitsbereichs zusammenfällt. Das Ende (100%) des Bereichs ist der Punkt, an dem der Endrand der Hauptbox des Elements mit dem Endrand seines Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in Scrollrichtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox den Startrand überschreitet. Der Beginn des Bereichs (0% Fortschritt) tritt ein, wenn der Startrand der Hauptbox des Elements mit dem Startrand seines Sichtbarkeitsbereichs übereinstimmt. Das Ende des Bereichs (100% Fortschritt) ist der Punkt, an dem der Endrand der Hauptbox des Elements mit dem Startrand seines Sichtbarkeitsbereichs übereinstimmt. Die Größe des Bereichs entspricht der Größe der Hauptbox des Elements in Scrollrichtung.

## Formal syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Beispiele

Siehe den [View Timeline Range Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Scroll-gesteuerte Animations-Timelines](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [View Timeline Range Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
