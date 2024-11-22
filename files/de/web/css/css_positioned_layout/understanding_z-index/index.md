---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

In den einfachsten Fällen können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden, da Text, Bilder und andere Elemente auf der Seite angeordnet sind, ohne sich zu überlappen. In diesem Fall gibt es einen einzigen Rendering-Fluss, und alle Elemente sind sich des von anderen eingenommenen Platzes bewusst. Das {{cssxref("z-index")}}-Attribut ermöglicht es Ihnen, die Reihenfolge der Schichtung von Objekten beim Rendern von Inhalten anzupassen.

> _In CSS 2.1 hat jede Box eine Position in drei Dimensionen. Neben ihrer horizontalen und vertikalen Position befinden sich Boxen entlang einer "z-Achse" und werden übereinander formatiert. Z-Achsen-Positionen sind besonders relevant, wenn Boxen sich visuell überlappen._

(aus [CSS 2.1 Abschnitt 9.9.1 - Geschichtete Präsentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

Das bedeutet, dass CSS-Stilregeln es Ihnen ermöglichen, Boxen auf Ebenen zusätzlich zur Standard-Ebene (Ebene 0) zu positionieren. Die Position auf einer imaginären z-Achse jeder Ebene wird als ganze Zahl ausgedrückt, die die Stapelreihenfolge für das Rendering darstellt. Größere Zahlen bedeuten näher zum Betrachter. Kontrollieren Sie die Position auf dieser z-Achse mit der CSS-Eigenschaft `z-index`.

Die Verwendung von `z-index` erscheint äußerst einfach: eine einzelne Eigenschaft, die mit einer einzigen ganzen Zahl zugewiesen wird und ein leicht verständliches Verhalten aufweist. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, kann sein Verhalten jedoch schwierig zu verstehen oder vorherzusagen sein. Dies liegt an komplexen Stapelregeln. Tatsächlich wurde ein eigener Abschnitt in der CSS-Spezifikation [CSS-2.1 Anhang E](https://www.w3.org/TR/CSS21/zindex.html) reserviert, um diese Regeln besser zu erklären.

Dieser Leitfaden versucht, diese Regeln zu erklären, mit einigen Vereinfachungen und mehreren Beispielen.

## Artikel

1. [Stapelung ohne die `z-index`-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
2. [Stapelnde schwebende Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Stapelung behandelt werden.
3. [Verwendung von `z-index`](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie `z-index` verwendet wird, um die Standard-Stapelung zu ändern.
4. [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.

## Beispiele

1. [Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
2. [Stapelkontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
3. [Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
