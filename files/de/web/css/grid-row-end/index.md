---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`grid-row-end`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Endposition eines Grid-Items innerhalb der Grid-Reihe, indem sie eine Linie, einen Bereich oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und somit die inline-end Kante seines {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

{{InteractiveExample("CSS Demo: grid-row-end")}}

```css interactive-example-choice
grid-row-end: auto;
```

```css interactive-example-choice
grid-row-end: 3;
```

```css interactive-example-choice
grid-row-end: -1;
```

```css interactive-example-choice
grid-row-end: span 3;
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
grid-row-end: auto;

/* <custom-ident> values */
grid-row-end: some-grid-area;

/* <integer> + <custom-ident> values */
grid-row-end: 2;
grid-row-end: some-grid-area 4;

/* span + <integer> + <custom-ident> values */
grid-row-end: span 3;
grid-row-end: span some-grid-area;
grid-row-end: 5 some-grid-area span;

/* Global values */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: revert;
grid-row-end: revert-layer;
grid-row-end: unset;
```

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Items beiträgt, was eine automatische Platzierung, einen automatischen Bereich oder einen Standardbereich von `1` anzeigt.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-end' gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Items bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass `grid-row-end: foo;` die Endkante dieses benannten Grid-Bereichs wählt (es sei denn, eine andere Linie mit dem Namen `foo-end` wurde vorher ausdrücklich spezifiziert).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

    Das `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Items bei. Wenn eine negative ganze Zahl angegeben ist, wird stattdessen in umgekehrter Reihenfolge gezählt, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Existieren nicht genug Linien mit diesem Namen, wird angenommen, dass alle impliziten Grid-Linien diesen Namen für den Zweck dieser Positionsbestimmung haben.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt einen Grid-Bereich zur Platzierung des Grid-Items bei, sodass die Endkante der Zeile des Grid-Items n Linien von der Startkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Existieren nicht genug Linien mit diesem Namen, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entsprechen, diesen Namen für den Zweck des Zählens dieses Bereichs haben.

    Wenn das \<integer> weggelassen wird, ist der Standardwert `1`. Negative ganze Zahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Endes der Zeile für ein Grid-Item

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

{{ EmbedLiveSample('Setting_row_end_for_a_grid_item', '230', '420') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-column")}}
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
