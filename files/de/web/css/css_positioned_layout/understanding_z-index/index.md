---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

In den einfachsten Fällen können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden, da Text, Bilder und andere Elemente auf der Seite angeordnet sind, ohne sich zu überlappen. In diesem Fall gibt es einen einzigen Rendering-Fluss, und alle Elemente sind sich des von anderen eingenommenen Raumes bewusst. Das {{cssxref("z-index")}}-Attribut erlaubt es Ihnen, die Reihenfolge der Schichtung von Objekten beim Rendern des Inhalts anzupassen.

> _In CSS 2.1 hat jede Box eine Position in drei Dimensionen. Zusätzlich zu ihren horizontalen und vertikalen Positionen liegen Boxen entlang einer "z-Achse" und sind eine über der anderen formatiert. Z-Achsen-Positionen sind besonders relevant, wenn Boxen sich visuell überlappen._

(aus [CSS 2.1 Abschnitt 9.9.1 - Geschichtete Präsentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

Dies bedeutet, dass CSS-Stilregeln es Ihnen erlauben, Boxen auf Schichten zusätzlich zur Standard-Rendering-Schicht (Schicht 0) zu positionieren. Die Position auf einer imaginären z-Achse jeder Schicht wird als Ganzzahl ausgedrückt, die die Stapelreihenfolge zum Rendern darstellt. Größere Zahlen bedeuten näher zum Betrachter. Die Position auf dieser z-Achse wird mit der CSS-Eigenschaft `z-index` gesteuert.

Die Verwendung von `z-index` erscheint extrem einfach: Eine einzige Eigenschaft, die mit einer einzigen ganzen Zahl versehen ist, mit einem leicht verständlichen Verhalten. Wenn `z-index` jedoch auf komplexe Hierarchien von HTML-Elementen angewendet wird, kann sein Verhalten schwer zu verstehen oder vorherzusagen sein. Dies liegt an den komplexen Stapelregeln. Tatsächlich wurde ein eigener Abschnitt in der CSS-Spezifikation [CSS-2.1 Anhang E](https://www.w3.org/TR/CSS21/zindex.html) reserviert, um diese Regeln besser zu erklären.

Dieser Leitfaden wird versuchen, diese Regeln zu erklären, mit einigen Vereinfachungen und mehreren Beispielen.

## Artikel

1. [Stapelung ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
2. [Stapelung von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
3. [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um die Standardstapelreihenfolge zu ändern.
4. [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.

## Beispiele

1. [Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
2. [Stapelkontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
3. [Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
