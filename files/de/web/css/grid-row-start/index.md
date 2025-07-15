---
title: grid-row-start
slug: Web/CSS/grid-row-start
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`grid-row-start`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Startposition eines Rasterelements innerhalb der Rasterreihe an, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Rasterplatzierung beiträgt. Dadurch wird die Anfangskante seines {{Glossary("grid_areas", "Rasterbereichs")}} festgelegt.

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

Diese Eigenschaft wird als einzelner `<grid-line>` Wert angegeben. Ein `<grid-line>` Wert kann wie folgt spezifiziert werden:

- entweder als `auto` Schlüsselwort
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Rasterelements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardskala von `1` hinweist.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-start' gibt, trägt sie die erste solche Linie zur Platzierung des Rasterelements bei.

    > [!NOTE]
    > Benannte Rasterbereiche erzeugen automatisch implizit benannte Linien dieser Form. Daher wird bei Angabe von `grid-row-start: foo;` die Anfangskante dieses benannten Rasterbereichs gewählt (es sei denn, eine andere Linie mit dem Namen `foo-start` wurde vorher explizit angegeben).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`
  - : Trägt zur Platzierung des n-ten Rasters bei. Wenn eine negative ganze Zahl angegeben wird, zählt sie stattdessen rückwärts, beginnend von der Endkante des expliziten Rasters.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien diesen Namen für das Auffinden dieser Position haben.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt zu einer Rasterspanne zur Platzierung des Rasterelements bei, sodass die Anfangskante der Rasterreihe des Rasterbereichs n Linien von der Endkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien auf der Seite des expliziten Rasters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das \<integer> weggelassen wird, ist der Standardwert `1`. Negative ganze Zahlen oder 0 sind ungültig.

    Der `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Start der Reihe für ein Rasterelement festlegen

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
