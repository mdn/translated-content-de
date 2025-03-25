---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: baecb2c4e933300dd39baf7d13d4d7b7f7d5f814
---

{{CSSRef}}

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da dieser Leitfaden darauf abzielt, Dinge zu erläutern, die spezifisch für das CSS-Grid-Layout und die Box-Ausrichtung sind, sollte er zusammen mit dem [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über verschiedene Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel mit [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) gibt es nach dem Anordnen der Festbreiten-Spuren auf der Inline-{{Glossary("main_axis", "Hauptachse")}} zusätzlichen Platz im {{Glossary("grid_container", "Grid-Container")}}. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block-{{Glossary("cross_axis", "Querachse")}} wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert, der für die Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

```html live-sample___grid-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font-family: sans-serif;
}
.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", , 200)}}

## Grid-Achsen

Als zweidimensionale Layout-Methode stehen uns beim Arbeiten mit Grid-Layout immer zwei Achsen zur Verfügung, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Eigenschaften der Box-Ausrichtung, um dies zu erreichen.

Die Inline-Achse entspricht der Richtung, in der Wörter in einem Satz im verwendeten Schreibmodus laufen würden. Daher verläuft in einer horizontalen Sprache wie Englisch oder Arabisch die Inline-Richtung horizontal. Sollten Sie sich in einem vertikalen Schreibmodus befinden, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke auf der Seite angezeigt werden — beispielsweise werden Absätze im Englischen vertikal untereinander dargestellt. Dies ist die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen, {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Selbst-Ausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert wird:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items`-Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und setzen die Ausrichtung für alle Grid-Elemente als Gruppe. Die `*-self`-Eigenschaften, `align-self` und `justify-self`, werden stattdessen auf die Grid-Elemente gesetzt. Dies bedeutet, dass Sie die Ausrichtung auf alle Grid-Elemente festlegen und dann einzelne Elemente überschreiben können, die eine andere Ausrichtung benötigen, indem Sie die `align-self`- oder `justify-self`-Eigenschaft auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-items` und `justify-items` ist `stretch`, und der Anfangswert für `align-self` und `justify-self` ist `auto`, sodass das Element sich über den gesamten Grid-Bereich erstrecken wird. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, z.B. ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, um zu verhindern, dass das Bild verzerrt wird.

## Inhaltsausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung der Grid-Spuren, wenn zusätzlicher Platz zu verteilen ist:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt ein, wenn die von Ihnen definierten Spuren insgesamt weniger als die Gesamtbreite des Grid-Containers ausmachen.

## Abstand und veraltete Grid-Abstandseigenschaften

Diese Eigenschaften definieren den Abstand zwischen Grid-Elementen innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition der Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden inzwischen in die Box-Ausrichtungspezifikation verschoben und zu {{cssxref("row-gap")}}, {{cssxref("column-gap")}} und {{cssxref("gap")}} aliasiert. Dies ermöglicht es ihnen, in anderen Layout-Methoden verwendet zu werden, wo ein Abstand zwischen Elementen sinnvoll ist.

## Siehe auch

- [Übersicht zur Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

- [Ausrichtung von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
