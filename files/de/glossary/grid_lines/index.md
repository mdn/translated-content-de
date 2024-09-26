---
title: Gitternetzlinien
slug: Glossary/Grid_Lines
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

**Gitternetzlinien** entstehen, wenn Sie ein [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verwenden.

## Beispiel

Im folgenden Beispiel gibt es ein Raster mit drei Spalten und zwei Zeilen. Dies ergibt 4 Spaltenlinien und 3 Zeilenlinien.

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

Linien können über ihre Liniennummer angesprochen werden. In einer von links nach rechts verlaufenden Sprache wie Englisch befindet sich die Spaltenlinie 1 links im Raster, die Zeilenlinie 1 oben. Die Liniennummern respektieren den [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments, und so befindet sich in einer von rechts nach links verlaufenden Sprache beispielsweise die Spaltenlinie 1 rechts im Raster. Das Bild unten zeigt die Liniennummern des Rasters, vorausgesetzt, die Sprache ist von links nach rechts.

![Diagramm, das das Raster mit nummerierten Linien zeigt.](1_diagram_numbered_grid_lines.png)

Linien werden auch im _impliziten Raster_ erstellt, wenn implizite Spuren erstellt werden, um Inhalte außerhalb des _expliziten Rasters_ zu halten, jedoch können diese Linien nicht anhand einer Nummer angesprochen werden.

## Platzierung von Elementen im Raster anhand der Liniennummer

Nach der Erstellung eines Rasters können Sie Elemente anhand der Liniennummer im Raster platzieren. Im folgenden Beispiel wird das Element von Spaltenlinie 1 bis Spaltenlinie 3 und von Zeilenlinie 1 bis Zeilenlinie 3 positioniert.

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

Die im _expliziten Raster_ erstellten Linien können benannt werden, indem der Name in eckigen Klammern vor oder nach den Angaben zur Spurgröße hinzugefügt wird. Beim Platzieren eines Elements können Sie dann diese Namen anstelle der Liniennummer verwenden, wie unten gezeigt.

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

### Eigenschaftenreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}

### Weiterführende Literatur

- CSS-Grid-Layout-Leitfäden:
  - [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - [Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - [CSS-Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [Definition der Gitternetzlinien in der CSS-Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-line-concept)