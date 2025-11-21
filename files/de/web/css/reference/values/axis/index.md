---
title: <axis>
slug: Web/CSS/Reference/Values/axis
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

Der **`<axis>`** {{Glossary("enumerated", "außerhalb von MDN festgelegte")}} Datentyp spezifiziert die Scrollrichtung des {{Glossary("scroll_container", "Scroll-Containers")}}, der eine [Scroll-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) steuert.

Die `<axis>`-Schlüsselwortwerte werden in den folgenden [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) und Eigenschaften verwendet:

- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline")}} Kurzschrift
- [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline")}} Kurzschrift
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)

## Syntax

Gültige `<axis>`-Werte:

- `block`
  - : Die Block-Achse des Scrolling-Elementes, die Achse, die senkrecht zum Textfluss innerhalb einer Zeile verläuft. Für horizontale Schreibrichtungen, wie z. B. im Standard-Englisch, ist dies dieselbe wie `y`, während es für vertikale Schreibrichtungen dieselbe wie `x` ist.
- `inline`
  - : Die Inline-Achse des Scrolling-Elementes, die Achse, die parallel zum Textfluss in einer Zeile verläuft. Für horizontale Schreibrichtungen ist dies dieselbe wie `x`, während es für vertikale Schreibrichtungen dieselbe wie `y` ist.
- `x`
  - : Die horizontale Achse des Scrolling-Elementes.
- `y`
  - : Die vertikale Achse des Scrolling-Elementes.

## Formale Syntax

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Scroll-gesteuerte Animations-Zeitpläne](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) Leitfaden
- [CSS scroll-gesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
