---
title: grid-row
slug: Web/CSS/Reference/Properties/grid-row
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`grid-row`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_row", "Grid-Zeile")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu ihrer Grid-Positionierung beiträgt. Dadurch wird die inline-start und inline-end Kante ihres {{Glossary("grid_areas", "Grid-Bereichs")}} angegeben.

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

## Zu den Eigenschaften gehörende

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

Wenn zwei `<grid-line>` Werte angegeben werden, sind sie durch `/` getrennt. Die Langform `grid-row-start` wird auf den Wert vor dem Schrägstrich und `grid-row-end` auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>` Wert kann wie folgt angegeben werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Positionierung des Grid-Elements beiträgt und automatische Platzierung, eine automatische Spanne oder eine Standardsstandardwert von `1` angibt.
- `<custom-ident>`
  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` existiert, trägt sie zur Positionierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-row: foo;` die Start-/Endekante dieses benannten Grid-Bereichs auswählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies so behandelt, als wäre die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`
  - : Trägt zur n-ten Grid-Linie zur Positionierung des Grid-Elements bei. Wenn eine negative ganze Zahl angegeben wird, zählt sie stattdessen rückwärts, beginnend von der Endekante des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Grid-Spanne zur Positionierung des Grid-Elements bei, sodass die entsprechende Kante des Grid-Bereichs des Grid-Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das `<integer>` weggelassen wird, ist der Standardwert `1`. Negative ganze Zahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Grid-Reihengröße und Position

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
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
