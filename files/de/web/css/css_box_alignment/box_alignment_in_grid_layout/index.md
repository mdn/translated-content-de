---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Das [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext von [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da dieser Leitfaden darauf abzielt, spezifische Dinge zu CSS-Grid-Layout und Box-Ausrichtung zu erläutern, sollte er zusammen mit dem [Überblick zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) gelesen werden, der allgemeine Funktionen der Box-Ausrichtung für verschiedene Layout-Methoden beschreibt.

## Einfaches Beispiel

In diesem Beispiel mit [grid layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) gibt es nach dem Anordnen der festen Breiten-Tracks auf der Inline-{{Glossary("main_axis", "Hauptachse")}} zusätzlichen Platz im {{Glossary("grid_container", "grid container")}}. Dieser Platz wird mit {{cssxref("justify-content")}} verteilt. Auf der Block-{{Glossary("cross_axis", "Querachse")}} wird die Ausrichtung der Elemente in ihren Rasterbereichen mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den auf die Gruppe gesetzten `align-items`-Wert, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Grid-Achsen

Als zweidimensionale Layout-Methode verfügt das Grid-Layout stets über zwei Achsen, auf denen die Elemente ausgerichtet werden können. Alle Box-Ausrichtungseigenschaften stehen zur Verfügung, um dies zu erleichtern.

Die Inline-Achse entspricht der Richtung, in der Wörter in einem Satz im verwendeten Schreibmodus verlaufen. In horizontalen Sprachen wie Englisch oder Arabisch verläuft die Inline-Richtung horizontal. In einem vertikalen Schreibmodus verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke auf der Seite dargestellt werden — beispielsweise stehen Paragraphen im Englischen vertikal übereinander. Dies ist die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie Eigenschaften, die mit `align-` beginnen: {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Selbstausrichtung

Diese Eigenschaften beschäftigen sich mit der Ausrichtung des Elements innerhalb des Bereichs, in dem es platziert wurde:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items`-Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und legen die Ausrichtung aller Grid-Elemente als Gruppe fest. Die `*-self`-Eigenschaften, `align-self` und `justify-self`, werden dagegen auf die Grid-Elemente angewendet. Dies bedeutet, dass Sie die Ausrichtung auf alle Grid-Elemente festlegen und dann jedes Element, das eine andere Ausrichtung benötigt, überschreiben können, indem Sie die Eigenschaften `align-self` oder `justify-self` in den Regeln für die einzelnen Grid-Elemente verwenden.

Der Anfangswert für `align-items` und `justify-items` ist `stretch`, und der Anfangswert für `align-self` und `justify-self` ist `auto`. Daher wird das Element über das gesamte Grid-Gebiet gestreckt. Eine Ausnahme davon besteht, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} besitzt, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, um zu verhindern, dass das Bild verzerrt wird.

## Inhaltsausrichtung

Diese Eigenschaften beschäftigen sich mit der Ausrichtung der Tracks des Grids, wenn zusätzlicher Platz zu verteilen ist:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt ein, wenn die von Ihnen definierten Tracks insgesamt weniger als die gesamte Breite des Grid-Containers ausmachen.

## Gap- und Legacy-Grid-Gap-Eigenschaften

Diese Eigenschaften definieren den Abstand zwischen Grid-Elementen innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die ursprüngliche Grid-Spezifikation enthielt die Definition der Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden inzwischen in die Box-Ausrichtspezifikation verschoben und als Alias für {{cssxref("row-gap")}}, {{cssxref("column-gap")}} und {{cssxref("gap")}} definiert. Dadurch können sie auch für andere Layout-Methoden verwendet werden, bei denen ein Abstand zwischen Elementen sinnvoll ist.

## Siehe auch

- [Überblick zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut platzierte und Tabellenlayouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
