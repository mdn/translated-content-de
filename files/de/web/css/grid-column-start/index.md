---
title: grid-column-start
slug: Web/CSS/grid-column-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`grid-column-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Startposition eines Grid-Elements innerhalb der Grid-Spalte fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zum Grid-Layout beiträgt. Diese Startposition definiert die Block-Startkante des {{Glossary("grid_areas", "Grid-Bereichs")}}.

{{InteractiveExample("CSS Demo: grid-column-start")}}

```css interactive-example-choice
grid-column-start: auto;
```

```css interactive-example-choice
grid-column-start: 2;
```

```css interactive-example-choice
grid-column-start: -1;
```

```css interactive-example-choice
grid-column-start: span 2;
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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

## Syntax

```css
/* Keyword value */
grid-column-start: auto;

/* <custom-ident> value */
grid-column-start: some-grid-area;

/* <integer> + <custom-ident> values */
grid-column-start: 2;
grid-column-start: some-grid-area 4;

/* span + <integer> + <custom-ident> values */
grid-column-start: span 3;
grid-column-start: span some-grid-area;
grid-column-start: span some-grid-area 5;

/* Global values */
grid-column-start: inherit;
grid-column-start: initial;
grid-column-start: revert;
grid-column-start: revert-layer;
grid-column-start: unset;
```

Diese Eigenschaft wird als einzelner `<grid-line>`-Wert angegeben. Ein `<grid-line>`-Wert kann wie folgt angegeben werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspranne von `1` hindeutet.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizite benannte Linien dieser Form, sodass die Angabe von `grid-column-start: foo;` die Startkante dieses benannten Grid-Bereichs auswählt (es sei denn, eine andere Linie namens `foo-start` wurde zuvor explizit angegeben).

    Andernfalls wird dies so behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben wurde.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative ganze Zahl angegeben wird, wird sie rückwärts gezählt, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Falls nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen für den Zweck haben, diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die Startkante des Grid-Bereichs des Grid-Elements n Linien von der Endkante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen für den Zweck der Zählung dieser Spanne haben.

    Falls das \<integer> weggelassen wird, ist der Standardwert `1`. Negative ganze Zahlen und `0` sind ungültig.

    Das `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spaltenstart für ein Grid-Element festlegen

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

{{ EmbedLiveSample('Setting_column_start_for_a_grid_item', '230', '420') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}
- [Rasterplatzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
