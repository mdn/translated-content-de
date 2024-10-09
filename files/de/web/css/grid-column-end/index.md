---
title: grid-column-end
slug: Web/CSS/grid-column-end
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-column-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Endposition eines Grid-Elements innerhalb der Grid-Spalte fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt, und damit die Block-Endkante seines {{Glossary("grid_areas", "Grid-Bereichs")}} spezifiziert.

{{EmbedInteractiveExample("pages/css/grid-column-end.html")}}

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-end' gibt, wird die erste solche Linie zur Platzierung des Grid-Elements beigetragen.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass `grid-column-end: foo;` die Endkante jenes benannten Grid-Bereichs auswählen wird (es sei denn, eine andere Linie mit dem Namen `foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird dies behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben wurde.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird rückwärts gezählt, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien für das Auffinden dieser Position diesen Namen haben.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die Spaltenendkante des Grid-Bereichs des Grid-Elements n Linien von der Startkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen zum Zweck der Zählung dieser Spanne haben.

    Wenn die \<integer> weggelassen wird, beträgt der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

    Der `<custom-ident>` kann nicht den Wert `span` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Spaltenendes für ein Grid-Element

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
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
