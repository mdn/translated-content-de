---
title: Verstehen des z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

In den einfachsten Fällen können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional betrachtet werden, da Text, Bilder und andere Elemente auf der Seite angeordnet sind, ohne sich zu überlappen. In diesem Fall gibt es einen einzigen Darstellungsfluss, und alle Elemente sind sich des Platzes bewusst, den andere einnehmen. Mit dem {{cssxref("z-index")}}-Attribut können Sie die Anordnung der Schichtung von Objekten beim Rendern von Inhalten anpassen.

> _In CSS 2.1 hat jede Box eine Position in drei Dimensionen. Zusätzlich zu ihren horizontalen und vertikalen Positionen liegen Boxen entlang einer „z-Achse“ und werden übereinander formatiert. Z-Achsen-Positionen sind besonders relevant, wenn Boxen sich visuell überlappen._

(aus [CSS 2.1 Abschnitt 9.9.1 - Geschichtetes Präsentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

Dies bedeutet, dass CSS-Stilregeln es Ihnen ermöglichen, Boxen auf Schichten zusätzlich zur Standard-Darstellungsschicht (Schicht 0) zu positionieren. Die Position auf einer imaginären z-Achse jeder Schicht wird als ganzzahliger Wert ausgedrückt, der die Stapelreihenfolge für das Rendern darstellt. Größere Zahlen bedeuten näher beim Betrachter. Kontrollieren Sie die Position auf dieser z-Achse mit der CSS-Eigenschaft `z-index`.

Die Verwendung von `z-index` erscheint äußerst einfach: eine einzelne Eigenschaft, die eine einzelne ganze Zahl mit einem leicht verständlichen Verhalten zugewiesen bekommt. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, kann sein Verhalten jedoch schwer zu verstehen oder vorherzusagen sein. Dies liegt an komplexen Stapelregeln. Tatsächlich wurde in der CSS-Spezifikation [CSS-2.1 Anhang E](https://www.w3.org/TR/CSS21/zindex.html) ein eigener Abschnitt dafür reserviert, um diese Regeln besser zu erklären.

Dieser Leitfaden wird versuchen, diese Regeln zu erklären, mit einigen Vereinfachungen und mehreren Beispielen.

## Artikel

1. [Stapeln ohne die z-index-Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Stapelregeln, die gelten, wenn `z-index` nicht verwendet wird.
2. [Stapeln von schwebenden Elementen](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente beim Stapeln behandelt werden.
3. [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um die Standardstapelung zu ändern.
4. [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Stapelkontext.

## Beispiele

1. [Stapelkontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-Ebenen-HTML-Hierarchie, `z-index` auf der letzten Ebene
2. [Stapelkontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-Ebenen-HTML-Hierarchie, `z-index` auf allen Ebenen
3. [Stapelkontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-Ebenen-HTML-Hierarchie, `z-index` auf der zweiten Ebene
