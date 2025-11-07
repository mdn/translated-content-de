---
title: Box-Alignment im Grid-Layout
short-title: Im Grid-Layout
slug: Web/CSS/Guides/Box_alignment/In_grid_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Modul beschreibt, wie das Alignment in verschiedenen Layoutmethoden funktioniert. Auf dieser Seite wird erläutert, wie das Box-Alignment im Kontext des [CSS-Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) funktioniert.

Da dieser Leitfaden darauf abzielt, Dinge zu beschreiben, die spezifisch für das CSS-Grid-Layout und das Box-Alignment sind, sollte er in Verbindung mit dem Leitfaden [Box-Alignment-Übersicht](/de/docs/Web/CSS/Guides/Box_alignment/Overview) gelesen werden, der die gemeinsamen Merkmale des Box-Alignments über die Layoutmethoden hinweg erklärt.

## Einfaches Beispiel

In diesem Beispiel mit [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) gibt es nach dem Anordnen der Festbreiten-Tracks auf der Inline-{{Glossary("main_axis", "Hauptachse")}} zusätzlichen Platz im {{Glossary("grid_container", "Grid-Container")}}. Dieser Platz wird mit {{cssxref("justify-content")}} verteilt. Auf der Block-{{Glossary("cross_axis", "Querachse")}} wird das Alignment der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element setzt den `align-items`-Wert der Gruppe außer Kraft, indem es {{cssxref("align-self")}} auf `center` setzt.

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

Als zweidimensionale Layoutmethode haben wir beim Arbeiten mit Grid-Layout immer zwei Achsen, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Box-Alignment-Eigenschaften, um dies zu erreichen.

Die Inline-Achse entspricht der Richtung, in die die Wörter in einem Satz im verwendeten Schreibmodus laufen würden. In einer horizontalen Sprache wie Englisch oder Arabisch verläuft die Inline-Richtung horizontal. Sollte man sich in einem vertikalen Schreibmodus befinden, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen: {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Blockachse kreuzt die Inline-Achse in der Richtung, in die Blöcke auf der Seite angezeigt werden — zum Beispiel werden Absätze in Englisch vertikal einer unter dem anderen angezeigt. Dies ist die Blockdimension.

Um Dinge auf der Blockachse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen, {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Blockachsen sind vertikal.](block_axis.png)

## Self-Alignment

Diese Eigenschaften befassen sich mit der Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem es platziert ist:

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Die `*-items`-Eigenschaften, `align-items` und `justify-items`, werden auf den Grid-Container angewendet und setzen die Ausrichtung für alle Grid-Elemente als Gruppe fest. Die `*-self`-Eigenschaften, `align-self` und `justify-self`, werden stattdessen auf Grid-Elemente gesetzt. Dies bedeutet, dass Sie die Ausrichtung auf alle Grid-Elemente setzen können und dann bei Bedarf einzelne Elemente, die eine andere Ausrichtung erfordern, außer Kraft setzen können, indem Sie die Eigenschaft `align-self` oder `justify-self` auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-items` und `justify-items` ist `stretch`, und der Anfangswert für `align-self` und `justify-self` ist `auto`, sodass das Element sich über den gesamten Grid-Bereich erstreckt. Die Ausnahme von dieser Regel ist, wenn das Element ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} hat, zum Beispiel ein Bild. In diesem Fall wird das Element in beiden Dimensionen auf `start` ausgerichtet, damit das Bild nicht verzerrt wird.

## Content-Alignment

Diese Eigenschaften befassen sich mit der Ausrichtung der Tracks des Grids, wenn zusätzlicher Raum zum Verteilen vorhanden ist:

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Dieses Szenario tritt auf, wenn die von Ihnen definierten Tracks insgesamt weniger als die Gesamtbreite des Grid-Containers betragen.

## Abstand und Legacy-Grid-Gap-Eigenschaften

Diese Eigenschaften definieren den Abstand zwischen Grid-Elementen innerhalb eines Grid-Containers:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden inzwischen in die Box-Alignment-Spezifikation verschoben und auf {{cssxref("row-gap")}}, {{cssxref("column-gap")}} und {{cssxref("gap")}} aliased. Dies ermöglicht es, sie für andere Layoutmethoden zu verwenden, bei denen ein Abstand zwischen Elementen sinnvoll ist.

## Siehe auch

- [Box-Alignment-Übersicht](/de/docs/Web/CSS/Guides/Box_alignment/Overview)
- [Box-Alignment im Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Alignment im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Alignment für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
