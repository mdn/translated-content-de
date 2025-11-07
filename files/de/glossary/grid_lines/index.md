---
title: Gitterlinien
slug: Glossary/Grid_Lines
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Gitterlinien** werden erstellt, wann immer Sie ein [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) verwenden.

## Beispiel

Im folgenden Beispiel gibt es ein Gitter mit drei Spuren in der Spalte und zwei Spuren in der Zeile. Dies ergibt 4 Spaltenlinien und 3 Zeilenlinien.

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

Linien können anhand ihrer Liniennummer angesprochen werden. In einer von links nach rechts verlaufenden Sprache wie Englisch befindet sich die Spaltenlinie 1 links vom Gitter, die Zeilenlinie 1 oben. Die Liniennummern folgen dem [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) des Dokuments, und daher befindet sich in einer von rechts nach links verlaufenden Sprache zum Beispiel die Spaltenlinie 1 rechts vom Gitter. Das unten stehende Bild zeigt die Liniennummern des Gitters, wobei davon ausgegangen wird, dass die Sprache von links nach rechts verläuft.

![Diagramm, das das Gitter mit nummerierten Linien zeigt.](1_diagram_numbered_grid_lines.png)

Linien werden auch im _impliziten Gitter_ erstellt, wenn implizite Spuren erstellt werden, um Inhalte zu halten, die außerhalb des _expliziten Gitters_ positioniert sind. Diese Linien können jedoch nicht durch eine Nummer angesprochen werden.

## Platzieren von Elementen auf dem Gitter basierend auf der Liniennummer

Nach der Erstellung eines Gitters können Sie Elemente durch Liniennummern auf das Gitter platzieren. Im folgenden Beispiel ist das Element von der Spaltenlinie 1 bis zur Spaltenlinie 3 und von der Zeilenlinie 1 bis zur Zeilenlinie 3 positioniert.

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

## Linien benennen

Die im _expliziten Gitter_ erstellten Linien können benannt werden, indem der Name in eckige Klammern vor oder nach den Information zur Spurgröße hinzugefügt wird. Wenn Sie ein Element platzieren, können Sie dann diese Namen anstelle der Liniennummer verwenden, wie unten demonstriert.

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
  - [Grundkonzepte des Grid Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - [Layout mithilfe benannter Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - [CSS Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- [Definition von Gitterlinien in der CSS Grid Layout Spezifikation](https://drafts.csswg.org/css-grid/#grid-line-concept)
