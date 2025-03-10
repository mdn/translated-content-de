---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: 9b9086cf753e2d5721fe1229ff6f767ccf512f97
---

{{CSSRef}}

In den einfachsten Fällen können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden, da Text, Bilder und andere Elemente auf der Seite angeordnet werden, ohne sich zu überlappen. In diesem Fall gibt es einen einzigen Renderingfluss, und alle Elemente sind sich des von anderen eingenommenen Raums bewusst. Das {{cssxref("z-index")}}-Attribut ermöglicht es Ihnen, die Reihenfolge der Schichtung von Objekten beim Rendern von Inhalten anzupassen.

> _In CSS 2.1 hat jede Box eine Position in drei Dimensionen. Zusätzlich zu ihren horizontalen und vertikalen Positionen liegen Boxen entlang einer "z-Achse" und werden übereinander formatiert. Z-Achsen-Positionen sind besonders relevant, wenn sich Boxen visuell überlappen._

(aus [CSS 2.1 Abschnitt 9.9.1 - Geschichtete Präsentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

Das bedeutet, dass CSS-Stilregeln es ermöglichen, Boxen zusätzlich zur Standard-Rendering-Ebene (Ebene 0) in Schichten zu positionieren. Die Position auf einer imaginären z-Achse jeder Schicht wird als ganze Zahl ausgedrückt, die die Stapelreihenfolge für das Rendering angibt. Größere Zahlen bedeuten näher am Betrachter. Die Position auf dieser z-Achse steuern Sie mit der CSS-Eigenschaft `z-index`.

Die Verwendung von `z-index` erscheint äußerst einfach: eine einzige Eigenschaft, die einer einzigen ganzen Zahl mit einem leicht verständlichen Verhalten zugewiesen wird. Wenn `z-index` jedoch auf komplexe Hierarchien von HTML-Elementen angewendet wird, kann sein Verhalten schwer zu verstehen oder vorherzusagen sein. Dies liegt an komplexen Stapelregeln. Tatsächlich wurde in der CSS-Spezifikation eigens ein Abschnitt reserviert [CSS-2.1 Anhang E](https://www.w3.org/TR/CSS21/zindex.html), um diese Regeln besser zu erklären.

Dieser Leitfaden wird versuchen, diese Regeln zu erklären, mit einigen Vereinfachungen und mehreren Beispielen.

## Artikel

1. [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
2. [Stapelung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung gehandhabt werden.
3. [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Using_z-index): Wie `z-index` verwendet wird, um die Standardstapelung zu ändern.
4. [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context): Anmerkungen zum Stapelkontext.

## Beispiele

1. [Stapelkontext-Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_1): 2-Ebenen-HTML-Hierarchie, `z-index` auf der letzten Ebene
2. [Stapelkontext-Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_2): 2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen
3. [Stapelkontext-Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context/Stacking_context_example_3): 3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene
