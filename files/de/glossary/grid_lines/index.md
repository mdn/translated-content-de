---
title: Grid Lines
slug: Glossary/Grid_Lines
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

**Grid lines** werden erstellt, sobald Sie ein [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) verwenden.

## Beispiel

Im folgenden Beispiel gibt es ein Grid mit drei Spaltenstrecken und zwei Zeilenstrecken. Dies ergibt 4 Spaltenlinien und 3 Zeilenlinien.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
```

{{ EmbedLiveSample('Example', '500', '250') }}

Linien können mittels ihrer Liniennummer adressiert werden. In einer von links nach rechts geschriebenen Sprache wie Englisch befindet sich die Spaltenlinie 1 auf der linken Seite des Grids und die Zeilenlinie 1 oben. Die Liniennummern entsprechen dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments, weshalb sich in einer von rechts nach links geschriebenen Sprache beispielsweise die Spaltenlinie 1 auf der rechten Seite des Grids befindet. Das untenstehende Bild zeigt die Liniennummern des Grids, dabei wird von einer von links nach rechts geschriebenen Sprache ausgegangen.

![Diagramm, das das Grid mit nummerierten Linien zeigt.](1_diagram_numbered_grid_lines.png)

Linien werden auch im _impliziten Grid_ erstellt, wenn implizite Strecken generiert werden, um Inhalte aufzunehmen, die außerhalb des _expliziten Grids_ positioniert sind, allerdings können diese Linien nicht durch eine Nummer adressiert werden.

## Platzierung von Elementen auf dem Grid nach Liniennummer

Nach der Erstellung eines Grids können Sie Elemente nach Liniennummer auf dem Grid platzieren. Im folgenden Beispiel wird das Element von der Spaltenlinie 1 bis zur Spaltenlinie 3 und von der Zeilenlinie 1 bis zur Zeilenlinie 3 positioniert.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}
.item {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
```

{{ EmbedLiveSample('Placing_items_onto_the_grid_by_line_number', '500', '250') }}

## Benennung von Linien

Die Linien, die im _expliziten Grid_ erstellt werden, können benannt werden, indem der Name in eckigen Klammern vor oder nach den Größenangaben der Strecke hinzugefügt wird. Beim Platzieren eines Elements können Sie dann diese Namen anstelle der Liniennummer verwenden, wie unten demonstriert.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 100px);
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="item">Item</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col3-start] 1fr [cols-end];
  grid-template-rows: [row1-start] 100px [row2-start] 100px [rows-end];
}
.item {
  grid-column-start: col1-start;
  grid-column-end: col3-start;
  grid-row-start: row1-start;
  grid-row-end: rows-end;
}
```

{{ EmbedLiveSample('Naming_lines', '500', '250') }}

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### Weiterführende Literatur

- CSS Grid Layout Leitfäden:
  - [Grundkonzepte des Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [Platzierung basierend auf Linien mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - [Layout unter Verwendung benannter Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - [CSS Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [Definition von Grid-Linien in der CSS Grid Layout Spezifikation](https://drafts.csswg.org/css-grid/#grid-line-concept)
