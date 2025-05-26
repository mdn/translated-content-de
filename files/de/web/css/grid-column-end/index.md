---
title: grid-column-end
slug: Web/CSS/grid-column-end
l10n:
  sourceCommit: 8697d1b0b7ace72cffe786933aae6c2f9b454b14
---

{{CSSRef}}

Die **`grid-column-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Endposition eines Grid-Elements innerhalb der Grid-Spalte fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und somit die Block-Endkante seines {{Glossary("grid_areas", "Grid-Bereichs")}} bestimmt.

{{InteractiveExample("CSS Demo: grid-column-end")}}

```css interactive-example-choice
grid-column-end: auto;
```

```css interactive-example-choice
grid-column-end: 3;
```

```css interactive-example-choice
grid-column-end: -1;
```

```css interactive-example-choice
grid-column-end: span 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}
```

## Syntax

```css
/* Keyword value */
grid-column-end: auto;

/* <custom-ident> values */
grid-column-end: some-grid-area;

/* <integer> + <custom-ident> values */
grid-column-end: 2;
grid-column-end: some-grid-area 4;

/* span + <integer> + <custom-ident> values */
grid-column-end: span 3;
grid-column-end: span some-grid-area;
grid-column-end: 5 some-grid-area span;

/* Global values */
grid-column-end: inherit;
grid-column-end: initial;
grid-column-end: revert;
grid-column-end: revert-layer;
grid-column-end: unset;
```

### Werte

- `auto`
  - : Trägt nichts zur Platzierung des Grid-Elements bei, was auf eine Auto-Platzierung, eine automatische Spanne oder eine StandardsPanne von `1` hinweist. Dies ist der Standardwert.
- `<custom-ident>`

  - : Trägt die erste Linie zur Platzierung des Grid-Elements bei, wenn es eine benannte Linie mit dem Namen `<custom-ident>-end` gibt.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-column-end: foo;` die Endkante dieses benannten Grid-Bereichs wählt (es sei denn, es wurde vorher eine andere Linie namens `foo-end` explizit festgelegt).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts, beginnend vom Endrand des expliziten Grids.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die Spaltenendkante des Grid-Elements n Linien von der Startkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die \<integer> weggelassen wird, beträgt sie standardmäßig `1`. Negative Ganzzahlen oder 0 sind ungültig.

    Der `<custom-ident>` kann nicht den Wert `span` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Endposition für ein Grid-Element festlegen

#### HTML

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

#### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_column_end_for_a_grid_item', '230', '420') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
