---
title: Verständnis von z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
l10n:
  sourceCommit: e1b6d7d2d02a07f7e86268c81678713fad4d9a5d
---

{{CSSRef}}

In den grundlegendsten Fällen können [HTML](/de/docs/Web/HTML)-Seiten als zweidimensional angesehen werden, da Text, Bilder und andere Elemente auf der Seite angeordnet sind, ohne sich zu überlappen. In diesem Fall gibt es einen einzigen Rendering-Fluss, und alle Elemente sind sich des von anderen eingenommenen Raumes bewusst. Mit dem {{cssxref("z-index")}} Attribut können Sie die Schichtungsreihenfolge von Objekten beim Rendern von Inhalten anpassen.

> _In CSS 2.1 hat jede Box eine Position in drei Dimensionen. Zusätzlich zu ihren horizontalen und vertikalen Positionen befinden sich Boxen entlang einer "z-Achse" und werden übereinander formatiert. Z-Achsen-Positionen sind besonders relevant, wenn sich Boxen visuell überlappen._

(aus [CSS 2.1 Abschnitt 9.9.1 - Geschichtete Präsentation](https://www.w3.org/TR/CSS21/visuren.html#z-index))

Das bedeutet, dass CSS-Stilregeln es Ihnen ermöglichen, Boxen auf Schichten zusätzlich zur Standard-Rendering-Schicht (Schicht 0) zu positionieren. Die Position auf einer imaginären z-Achse jeder Schicht wird als eine Ganzzahl ausgedrückt, die die Schachtelungsreihenfolge für das Rendering darstellt. Größere Zahlen bedeuten näher am Betrachter. Die Position auf dieser z-Achse steuern Sie mit der CSS-Eigenschaft `z-index`.

Die Verwendung des `z-index` erscheint äußerst einfach: eine einzelne Eigenschaft, die eine einzelne Ganzzahl mit einem leicht verständlichen Verhalten zugewiesen wird. Wenn `z-index` auf komplexe Hierarchien von HTML-Elementen angewendet wird, kann sein Verhalten schwer zu verstehen oder vorherzusagen sein. Dies liegt an komplexen Schachtelungsregeln. Tatsächlich wurde in der CSS-Spezifikation ein eigener Abschnitt [CSS-2.1 Anhang E](https://www.w3.org/TR/CSS21/zindex.html) reserviert, um diese Regeln besser zu erklären.

Dieser Leitfaden versucht, diese Regeln zu erklären, mit einigen Vereinfachungen und mehreren Beispielen.

## Artikel

1. [Schichtung ohne die z-index Eigenschaft](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): Die Schichtungsregeln, die gelten, wenn `z-index` nicht verwendet wird.
2. [Schichtung schwebender Elemente](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): Wie schwebende Elemente mit Schichtung behandelt werden.
3. [Verwendung von z-index](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index): Wie man `z-index` verwendet, um die Standard-Schichtung zu ändern.
4. [Schichtungs-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Hinweise zum Schichtungs-Kontext.

## Beispiele

1. [Schichtungs-Kontext Beispiel 1](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-stufige HTML-Hierarchie, `z-index` auf der letzten Ebene
2. [Schichtungs-Kontext Beispiel 2](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-stufige HTML-Hierarchie, `z-index` auf allen Ebenen
3. [Schichtungs-Kontext Beispiel 3](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-stufige HTML-Hierarchie, `z-index` auf der zweiten Ebene
