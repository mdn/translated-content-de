---
title: Box-Alignment im Grid-Layout
short-title: Im Grid-Layout
slug: Web/CSS/Guides/Box_alignment/In_grid_layout
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das [CSS Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite erkunden wir, wie Box-Alignment im Kontext vom [CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) funktioniert.

Da dieser Leitfaden darauf abzielt, Dinge zu detaillieren, die spezifisch für CSS Grid-Layout und Box-Alignment sind, sollte er zusammen mit dem [Box-Alignment Überblick](/de/docs/Web/CSS/Guides/Box_alignment/Overview) Leitfaden gelesen werden, der die gemeinsamen Merkmale des Box-Alignments über Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel mit [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) gibt es zusätzlichen Raum im {{Glossary("grid_container", "Grid-Container")}}, nachdem die Spuren mit fester Breite auf der Inline {{Glossary("main_axis", "Hauptachse")}} ausgelegt wurden. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block {{Glossary("cross_axis", "Querachse")}} wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} kontrolliert. Das erste Element überschreibt den `align-items` Wert, der für die Gruppe gesetzt wurde, indem es {{cssxref("align-self")}} auf `center` setzt.

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

Als zweidimensionale Layout-Methode haben wir beim Arbeiten mit Grid-Layout immer zwei Achsen, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Box-Alignment-Eigenschaften, um dies zu erreichen.

Die Inline-Achse ist die Achse, die der Richtung entspricht, in der Wörter in einem Satz im verwendeten Schreibmodus verlaufen würden. Daher verläuft in einer horizontalen Sprache wie Englisch oder Arabisch die Inline-Richtung horizontal. Sollte sich der Schreibmodus zu einem vertikalen ändern, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke die Seite abwärts angezeigt werden — zum Beispiel, Absätze in Englisch werden einer unter dem anderen vertikal angezeigt. Dies ist die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen, {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Selbst-Ausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in den es platziert wurde:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items` Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und setzen die Ausrichtung für alle Grid-Items als Gruppe. Die `*-self` Eigenschaften, `align-self` und `justify-self`, werden stattdessen auf Grid-Items gesetzt. Dies bedeutet, dass Sie die Ausrichtung auf alle Grid-Items setzen können und dann einzelne Items, die eine andere Ausrichtung benötigen, durch Anwenden der `align-self` oder `justify-self` Eigenschaft auf die Regeln für die einzelnen Grid-Items überschreiben können.

Der anfängliche Wert für `align-items` und `justify-items` ist `stretch`, und der anfängliche Wert für `align-self` und `justify-self` ist `auto`, sodass das Element sich über den gesamten Grid-Bereich erstreckt. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, wie zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, um zu verhindern, dass das Bild verzerrt wird.

## Inhalts-Ausrichtung

Diese Eigenschaften befassen sich mit der Ausrichtung der Spuren des Grids, wenn es zusätzlichen Raum zur Verteilung gibt:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt auf, wenn die von Ihnen definierten Spuren insgesamt weniger als die Gesamtbreite des Grid-Containers betragen.

## Abstand und Legacy grid-gap Eigenschaften

Diese Eigenschaften definieren den Abstand zwischen Grid-Items innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden seitdem in die Box-Alignment-Spezifikation verschoben und zu {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, und {{cssxref("gap")}} aliasiert. Dies erlaubt es, sie für andere Layout-Methoden zu verwenden, bei denen ein Abstand zwischen Items sinnvoll ist.

## Siehe auch

- [CSS Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [Box-Alignment Überblick](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Alignment in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Alignment im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Alignment für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)
- [Ausrichtung von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
