---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie Box-Ausrichtung im Kontext von [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da dieser Leitfaden darauf abzielt, Dinge im Zusammenhang mit CSS Grid Layout und Box-Ausrichtung zu detaillieren, sollte er in Verbindung mit dem [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment) Leitfaden gelesen werden, der die gemeinsamen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel unter Verwendung des [Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout) gibt es zusätzlichen Raum im {{Glossary("grid_container", "Grid-Container")}}, nachdem die Festbreitentracks auf der inline {{Glossary("main_axis", "Hauptachse")}} angelegt wurden. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der block {{Glossary("cross_axis", "Querachse")}} wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert, der auf die Gruppe gesetzt wurde, indem es {{cssxref("align-self")}} auf `center` setzt.

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

Als zweidimensionales Layout-Verfahren haben wir beim Arbeiten mit Grid-Layout immer zwei Achsen, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Box-Ausrichtungseigenschaften, um dies zu erreichen.

Die Inline-Achse entspricht der Richtung, in der Wörter in einem Satz im verwendeten Schreibmodus laufen würden. In einer horizontalen Sprache wie Englisch oder Arabisch verläuft die Inline-Richtung horizontal. Sollten Sie sich in einem vertikalen Schreibmodus befinden, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke auf der Seite angezeigt werden — zum Beispiel werden Absätze im Englischen nacheinander vertikal angezeigt. Dies ist die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen: {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Eigen-Ausrichtung

Diese Eigenschaften behandeln die Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert wird:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items`-Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und legen die Ausrichtung für alle Grid-Elemente als Gruppe fest. Die `*-self`-Eigenschaften, `align-self` und `justify-self`, werden stattdessen auf Grid-Elemente selbst gesetzt. Dies bedeutet, dass Sie die Ausrichtung auf alle Grid-Elemente einstellen können und dann einzelne Elemente, die eine andere Ausrichtung benötigen, überschreiben können, indem Sie die `align-self` oder `justify-self` Eigenschaft auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-items` und `justify-items` ist `stretch`, und der Anfangswert für `align-self` und `justify-self` ist `auto`, sodass das Element sich über den gesamten Grid-Bereich erstreckt. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, damit das Bild nicht verzerrt wird.

## Inhaltsausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung der Tracks des Grids, wenn es zusätzlichen Platz zu verteilen gibt:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt auf, wenn die von Ihnen definierten Tracks weniger ausmachen als die Gesamtbreite des Grid-Containers.

## Lücke und Legacy-Grid-Lücke Eigenschaften

Diese Eigenschaften definieren den Abstand zwischen den Gitterelementen innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden seitdem in die Box-Alignment-Spezifikation verschoben und zu {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, und {{cssxref("gap")}} umbenannt. Dies ermöglicht ihre Verwendung für andere Layout-Methoden, bei denen ein Abstand zwischen Elementen sinnvoll ist.

## Siehe auch

- [Box-Ausrichtungsüberblick](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment)
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

- [Ausrichtung von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
