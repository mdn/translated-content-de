---
title: "`<timeline-range-name>` CSS-Typ"
short-title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "aufgezählte")}} Datentyp ist ein CSS-Identifier, der einen der vordefinierten benannten Zeitachsenbereiche innerhalb einer [View-Progress-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) und den folgenden Kurz- und Langform-Eigenschaften verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzform

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Stellt den vollständigen Bereich einer View-Progress-Zeitachse dar, vom Punkt, an dem die Start-Kantenlinie des Ziel-Elements zum ersten Mal den View-Progress-Sichtbarkeitsbereich des Scrollports betritt (`0%` Fortschritt) bis zu dem Punkt, an dem die End-Kantenlinie ihn vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Stellt den Bereich einer View-Progress-Zeitachse dar, in dem das Ziel-Element vollständig vom View-Progress-Sichtbarkeitsbereich innerhalb des {{Glossary("Scroll_container#scrollport", "Scrollports")}} umfasst ist oder diesen vollständig umfasst.
    - Wenn das Ziel-Element kleiner ist als der Scrollport, reicht es vom Punkt, an dem das Ziel-Element zum ersten Mal vollständig vom Scrollport umfasst wird (`0%` Fortschritt), bis zum Punkt, an dem es nicht mehr vollständig umfasst wird (`100%` Fortschritt).
    - Wenn das Ziel-Element größer ist als der Scrollport, reicht es vom Punkt, an dem das Ziel-Element zum ersten Mal den Scrollport vollständig bedeckt (`0%` Fortschritt), bis zum Punkt, an dem es den Scrollport nicht mehr vollständig bedeckt (`100%` Fortschritt).

- `entry`
  - : Stellt den Bereich einer View-Progress-Zeitachse dar, von dem Punkt an, an dem das Ziel-Element beginnt, in den Scrollport einzutreten, bis zu dem Punkt, an dem es vollständig eingetreten ist. `0%` entspricht `0%` des `cover` Bereichs. `100%` entspricht `0%` des `contain` Bereichs.

- `exit`
  - : Stellt den Bereich einer View-Progress-Zeitachse dar, von dem Punkt an, an dem das Ziel-Element beginnt, den Scrollport zu verlassen, bis zu dem Punkt, an dem es ihn vollständig verlassen hat. `0%` entspricht `100%` des `contain` Bereichs. `100%` entspricht `100%` des `cover` Bereichs.

- `entry-crossing`
  - : Stellt den Bereich dar, während welchem die Hauptbox die End-Kantenlinie überschreitet. Der Beginn (0% Fortschritt) des Bereichs tritt ein, wenn die Start-Kantenlinie der Hauptbox des Elements mit dem Endrand ihres View-Progress-Sichtbarkeitsbereichs zusammenfällt. Das Ende (100%) des Bereichs ist der Punkt, an dem die End-Kantenlinie der Hauptbox des Elements mit dem Endrand ihres View-Progress-Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs ist die Größe der Hauptbox des Elements in Scroll-Richtung.

- `exit-crossing`
  - : Stellt den Bereich dar, in dem die Hauptbox die Start-Kantenlinie überschreitet. Der Beginn des Bereichs (0% Fortschritt) tritt ein, wenn die Start-Kantenlinie der Hauptbox des Elements mit dem Startrand ihres View-Progress-Sichtbarkeitsbereichs zusammenfällt. Das Ende des Bereichs (100% Fortschritt) ist der Punkt, an dem die End-Kantenlinie der Hauptbox des Elements mit dem Startrand ihres View-Progress-Sichtbarkeitsbereichs zusammenfällt. Die Größe des Bereichs ist die Größe der Hauptbox des Elements in Scroll-Richtung.

- `scroll`
  - : Stellt den vollständigen Bereich des {{Glossary("scroll_container", "Scroll-Containers")}} dar, auf dem die View-Progress-Zeitachse definiert ist. Der Beginn des Bereichs (0% Fortschritt) und das Ende (100% Fortschritt) treten an den allerersten und letzten Positionen des Scroll-Containers auf, der der View-Progress-Zeitachse zugrunde liegt.

## Formale Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing | scroll`)}}

## Beispiele

Sehen Sie sich den [Visualisierer für View-Zeitachsenbereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an.

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
- [Scrollgesteuerte Animations-Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Modul für CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Visualisierer für View-Zeitachsenbereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
