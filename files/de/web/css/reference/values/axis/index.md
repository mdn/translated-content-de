---
title: <axis>
slug: Web/CSS/Reference/Values/axis
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<axis>`** {{Glossary("enumerated", "enumerierte")}} Datentyp gibt die Scrollrichtung des {{Glossary("scroll_container", "Scroll-Containers")}} an, der eine [Scroll-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) steuert.

Die `<axis>` Schlüsselwortwerte werden in den folgenden [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) und Eigenschaften verwendet:

- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline")}} Kurzform
- {{cssxref("animation-timeline/scroll", "scroll()")}}
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline")}} Kurzform
- {{cssxref("animation-timeline/view", "view()")}}

## Syntax

Gültige `<axis>` Werte:

- `block`
  - : Die Blockachse des Scroller-Elements, die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibrichtungen, wie Standard-Englisch, entspricht dies `y`, während es für vertikale Schreibrichtungen `x` entspricht.
- `inline`
  - : Die Inline-Achse des Scroller-Elements, die Achse in der Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibrichtungen entspricht dies `x`, während es für vertikale Schreibrichtungen `y` entspricht.
- `x`
  - : Die horizontale Achse des Scroller-Elements.
- `y`
  - : Die vertikale Achse des Scroller-Elements.

## Formale Syntax

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Leitfaden für scrollgetriebene Animations-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scrollgetriebene Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
