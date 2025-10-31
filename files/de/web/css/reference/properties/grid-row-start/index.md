---
title: grid-row-start
slug: Web/CSS/Reference/Properties/grid-row-start
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`grid-row-start`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Startposition eines Grid-Elements innerhalb der Grid-Reihe fest, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt. Somit wird der inline-start Rand seines {{Glossary("grid_areas", "Grid-Bereichs")}} spezifiziert.

{{InteractiveExample("CSS Demo: grid-row-start")}}

```css interactive-example-choice
grid-row-start: auto;
```

```css interactive-example-choice
grid-row-start: 3;
```

```css interactive-example-choice
grid-row-start: -1;
```

```css interactive-example-choice
grid-row-start: span 2;
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
grid-row-start: auto;

/* <custom-ident> values */
grid-row-start: some-grid-area;

/* <integer> + <custom-ident> values */
grid-row-start: 2;
grid-row-start: some-grid-area 4;

/* span + <integer> + <custom-ident> values */
grid-row-start: span 3;
grid-row-start: span some-grid-area;
grid-row-start: 5 some-grid-area span;

/* Global values */
grid-row-start: inherit;
grid-row-start: initial;
grid-row-start: revert;
grid-row-start: revert-layer;
grid-row-start: unset;
```

Diese Eigenschaft wird als einzelner `<grid-line>` Wert angegeben. Ein `<grid-line>` Wert kann folgendermaßen angegeben werden:

- entweder mit dem `auto` Schlüsselwort
- oder mit einem `<custom-ident>` Wert
- oder mit einem `<integer>` Wert
- oder mit sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder mit dem Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatische Platzierung, eine automatische Spannweite oder eine Standardspannweite von `1` bedeutet.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-start' gibt, wird die erste solche Linie zur Platzierung des Grid-Elements beigetragen.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizite benannte Linien dieser Art, sodass die Angabe `grid-row-start: foo;` die Startkante dieses benannten Grid-Bereichs auswählt (es sei denn, eine andere Linie mit dem Namen `foo-start` wurde davor ausdrücklich angegeben).

    Andernfalls wird dies behandelt, als wäre der Integer `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`
  - : Trägt zur Platzierung des nth Grid-Linie des Grid-Elements bei. Wenn eine negative Zahl angegeben wird, wird stattdessen rückwärts gezählt, beginnend vom Endrand des expliziten Grids.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen tragen, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die Zeilen-Startkante des Grid-Bereichs des Grid-Elements n Linien vom Endrand entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, entsprechend der Suchrichtung, diesen Namen tragen, um diese Spannweite zu zählen.

    Wenn der \<integer> weggelassen wird, ist der Standardwert `1`. Negative Integer oder 0 sind ungültig.

    Das `<custom-ident>` kann die Werte `span` und `auto` nicht annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Startposition für ein Grid-Element festlegen

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

{{ EmbedLiveSample('Setting_row_start_for_a_grid_item', '230', '420') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
