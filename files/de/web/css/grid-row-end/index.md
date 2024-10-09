---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-row-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Endposition eines Grid-Elements in der Grid-Reihe fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt. Dadurch wird die Endkante des {{Glossary("grid_areas", "Grid-Bereichs")}} angegeben.

{{EmbedInteractiveExample("pages/css/grid-row-end.html")}}

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
  - : Ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspranne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-end' gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass `grid-row-end: foo;` die Endkante dieses benannten Grid-Bereichs wählt (es sei denn, eine andere Linie mit dem Namen `foo-end` wurde zuvor ausdrücklich angegeben).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

    Das `<custom-ident>` kann nicht den Wert `span` annehmen.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative ganze Zahl angegeben wird, erfolgt die Zählung stattdessen rückwärts, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Span zur Platzierung des Grid-Elements bei, sodass die Endkante der Reihe des Grid-Bereichs des Grid-Elements n Linien von der Anfangskante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das \<integer> weggelassen wird, gilt es standardmäßig `1`. Negative ganze Zahlen oder 0 sind ungültig.

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
- [Line-based placement with CSS grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
