---
title: <axis>
slug: Web/CSS/Reference/Values/axis
l10n:
  sourceCommit: 82679bcf992aaae0688f98c83bbe205cbba92bb4
---

Der **`<axis>`** {{Glossary("enumerated", "enumerierte")}} Datentyp spezifiziert die Scrollrichtung des {{Glossary("scroll_container", "Scroll-Containers")}}, der eine [Scroll-Zeitachse](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines) steuert.

Die `<axis>` Schlüsselwortwerte werden in den folgenden [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) und Eigenschaften verwendet:

- {{cssxref("scroll-timeline-axis")}}
- {{cssxref("scroll-timeline")}} Kurzform
- [`scroll()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/scroll)
- {{cssxref("view-timeline-axis")}}
- {{cssxref("view-timeline")}} Kurzform
- [`view()`](/de/docs/Web/CSS/Reference/Properties/animation-timeline/view)

## Syntax

Gültige `<axis>` Werte:

- `block`
  - : Die Block-Achse des Scroll-Elements, die Achse in der Richtung senkrecht zum Textfluss innerhalb einer Zeile. Für horizontale Schreibmodi, wie im Standard-Englisch, entspricht dies `y`, während es bei vertikalen Schreibmodi `x` entspricht.
- `inline`
  - : Die Inline-Achse des Scroll-Elements, die Achse in der Richtung parallel zum Textfluss in einer Zeile. Für horizontale Schreibmodi entspricht dies `x`, während es bei vertikalen Schreibmodi `y` entspricht.
- `x`
  - : Die horizontale Achse des Scroll-Elements.
- `y`
  - : Die vertikale Achse des Scroll-Elements.

## Formale Syntax

{{CSSSyntaxRaw(`<axis> = block | inline | x | y`)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("animation-timeline")}}
- [Leitfaden zu scrollgesteuerten Animationszeitachsen](/de/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS scrollgesteuerte Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
