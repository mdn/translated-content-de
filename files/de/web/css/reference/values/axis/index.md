---
title: "`<axis>` CSS-Typ"
short-title: <axis>
slug: Web/CSS/Reference/Values/axis
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<axis>`** {{Glossary("enumerated", "enumerierte")}} Datentyp gibt die Scrollrichtung des {{Glossary("scroll_container", "Scrollcontainers")}} an, der eine [Scroll-Zeitleiste](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) steuert.

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
  - : Die Blockachse des Scrollelements, welche die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi, wie standardmäßig im Englischen, ist dies das gleiche wie `y`, während es bei vertikalen Schreibmodi `x` ist.
- `inline`
  - : Die Inline-Achse des Scrollelements, welche die Achse in der Richtung parallel zum Textfluss innerhalb einer Zeile ist. Für horizontale Schreibmodi ist dies das gleiche wie `x`, während es bei vertikalen Schreibmodi `y` ist.
- `x`
  - : Die horizontale Achse des Scrollelements.
- `y`
  - : Die vertikale Achse des Scrollelements.

## Formale Syntax

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Scrollgesteuerte Animations-Zeitleisten](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) Leitfaden
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
