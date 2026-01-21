---
title: <timeline-range-name>
slug: Web/CSS/Reference/Values/timeline-range-name
l10n:
  sourceCommit: 0cc0da86bf55acce9f83eca7bbed9508fda98375
---

Der **`<timeline-range-name>`** {{Glossary("enumerated", "aufgezählte")}} Datentyp ist ein CSS-Identifikator, der eine der vordefinierten benannten Timeline-Bereiche innerhalb einer [Ansichtsfortschritts-Timeline](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) darstellt.

Die `<timeline-range-name>` Schlüsselwortwerte werden in [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) und in den folgenden Lang- und Kurzschreibweisen verwendet:

- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range")}} Kurzschreibweise

## Syntax

Gültige `<timeline-range-name>` Werte:

- `cover`
  - : Repräsentiert den gesamten Bereich einer Ansichtsfortschritts-Timeline, vom Punkt, an dem die Startkantenlinie des Elementes zum ersten Mal in den Ansichtsfortschrittsbereich des Viewports eintritt (`0%` Fortschritt), bis zu dem Punkt, an dem die Endkantenlinie ihn vollständig verlassen hat (`100%` Fortschritt).

- `contain`
  - : Repräsentiert den Bereich einer Ansichtsfortschritts-Timeline, in dem das Element vollständig vom Ansichtsfortschrittsbereich des Viewports umfasst oder selbst vollkommen in ihm enthalten ist.
    - Wenn das Element kleiner ist als der Viewport, reicht der Bereich vom Punkt, an dem das Element vollständig im Viewport enthalten ist (`0%` Fortschritt), bis zu dem Punkt, an dem es nicht mehr vollständig enthalten ist (`100%` Fortschritt).
    - Wenn das Element größer ist als der Viewport, reicht der Bereich vom Punkt, an dem das Element den Viewport vollständig bedeckt (`0%` Fortschritt), bis zu dem Punkt, an dem es ihn nicht mehr vollständig abdeckt (`100%` Fortschritt).

- `entry`
  - : Repräsentiert den Bereich einer Ansichtsfortschritts-Timeline vom Punkt, an dem das Element beginnt, in den Viewport einzutreten, bis zu dem Punkt, an dem es vollständig eingetreten ist. `0%` entspricht `0%` des `cover`-Bereichs. `100%` entspricht `0%` des `contain`-Bereichs.

- `exit`
  - : Repräsentiert den Bereich einer Ansichtsfortschritts-Timeline vom Punkt, an dem das Element beginnt, den Viewport zu verlassen, bis zu dem Punkt, an dem es ihn vollständig verlassen hat. `0%` entspricht `100%` des `contain`-Bereichs. `100%` entspricht `100%` des `cover`-Bereichs.

- `entry-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die Endkantenlinie überschreitet. Der Beginn (0% Fortschritt) des Bereichs tritt ein, wenn die Startkantenlinie der Hauptbox des Elements mit der Endkante des Ansichtsfortschrittsbereichs übereinstimmt. Das Ende (100%) des Bereichs ist der Punkt, an dem die Endkantenlinie der Hauptbox des Elements mit der Endkante des Ansichtsfortschrittsbereichs übereinstimmt. Die Größe des Bereichs ist die Größe der Hauptbox des Elements in der Scrollrichtung.

- `exit-crossing`
  - : Repräsentiert den Bereich, in dem die Hauptbox die Startkantenlinie überschreitet. Der Beginn des Bereichs (0% Fortschritt) tritt ein, wenn die Startkantenlinie der Hauptbox des Elements mit der Startkante des Ansichtsfortschrittsbereichs übereinstimmt. Das Ende des Bereichs (100% Fortschritt) ist der Punkt, an dem die Endkantenlinie der Hauptbox des Elements mit der Startkante des Ansichtsfortschrittsbereichs übereinstimmt. Die Größe des Bereichs ist die Größe der Hauptbox des Elements in der Scrollrichtung.

## Förmliche Syntax

{{CSSSyntaxRaw(`<timeline-range-name> = cover | contain | entry | exit | entry-crossing | exit-crossing`)}}

## Beispiele

Sehen Sie sich den [Visualizer für Ansichts-Timeline-Bereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-range-start")}}, {{cssxref("animation-range-end")}}, {{cssxref("animation-range")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("view-timeline-inset")}}
- [Scrollgesteuerte Animationen Zeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS-scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
- [Visualizer für Ansichts-Timeline-Bereiche](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
