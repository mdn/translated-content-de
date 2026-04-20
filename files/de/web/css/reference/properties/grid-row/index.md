---
title: "`grid-row` CSS-Eigenschaft"
short-title: grid-row
slug: Web/CSS/Reference/Properties/grid-row
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`grid-row`** [CSS](/de/docs/Web/CSS) [Kurzschreibeigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_row", "Grid-Zeile")}} fest, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt. Dadurch wird die inline-start und inline-end Begrenzung seines {{Glossary("grid_areas", "Grid-Bereichs")}} festgelegt.

{{InteractiveExample("CSS Demo: grid-row")}}

```css interactive-example-choice
grid-row: 1;
```

```css interactive-example-choice
grid-row: 1 / 3;
```

```css interactive-example-choice
grid-row: 2 / -1;
```

```css interactive-example-choice
grid-row: 1 / span 2;
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

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("grid-row-end")}}
- {{cssxref("grid-row-start")}}

## Syntax

```css
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: some-grid-area;
grid-row: some-grid-area / some-other-grid-area;

/* <integer> + <custom-ident> values */
grid-row: some-grid-area 4;
grid-row: 4 some-grid-area / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span some-grid-area;
grid-row: 5 some-grid-area span;
grid-row: span 3 / 6;
grid-row: span some-grid-area / span some-other-grid-area;
grid-row: 5 some-grid-area span / 2 span;

/* Global values */
grid-row: inherit;
grid-row: initial;
grid-row: revert;
grid-row: revert-layer;
grid-row: unset;
```

Diese Eigenschaft wird als ein oder zwei `<grid-line>` Werte angegeben.

Wenn zwei `<grid-line>` Werte angegeben sind, werden diese durch `/` getrennt. Die Langform `grid-row-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-row-end` wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>` Wert kann wie folgt angegeben werden:

- entweder das `auto` Schlüsselwort
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und Auto-Platzierung, eine automatische Spannweite oder eine Standardspannenweite von `1` anzeigt.
- `<custom-ident>`
  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` existiert, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-row: foo;` die start/ende Begrenzung dieses benannten Grid-Bereichs wählt (es sei denn, eine andere Linie namens `foo-start`/`foo-end` wurde vorher ausdrücklich angegeben).

    Andernfalls wird dies behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben wurde.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird in umgekehrter Richtung gezählt, beginnend von der Endbegrenzung des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen zu diesem Zweck haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die entsprechende Begrenzung des Grid-Bereichs des Grid-Elements n Linien von der gegenüberliegenden Begrenzung entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen zum Zweck der Zählung dieser Spannweite haben.

    Wenn das `<integer>` weggelassen wird, beträgt es standardmäßig `1`. Negative Ganzzahlen oder `0` sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Grid-Zeilengröße und -position

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-row: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-row: span 2 / 7;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_row_size_and_location", "200px", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- [Zeilenbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Video: [Zeilenbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
