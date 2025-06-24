---
title: grid-row-start
slug: Web/CSS/grid-row-start
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`grid-row-start`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Startposition eines Grid-Elements innerhalb der Gitterzeile fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt und damit die Inline-Startkante seines {{Glossary("grid_areas", "Gitters Bereichs")}} angibt.

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

Diese Eigenschaft wird als einzelner `<grid-line>` Wert angegeben. Ein `<grid-line>` Wert kann folgendermaßen spezifiziert werden:

- entweder das `auto` Schlüsselwort
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Positionierung des Grid-Elements beiträgt und automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` angibt.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-start' gibt, trägt sie die erste dieser Linien zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Gitterbereiche generieren automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-row-start: foo;` die Startkante dieses benannten Gitterbereichs auswählt (es sei denn, eine andere Linie namens `foo-start` wurde zuvor explizit angegeben).

    Andernfalls wird dies so behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative ganze Zahl angegeben wird, zählt sie stattdessen rückwärts, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspanne zur Platzierung des Grid-Elements bei; sodass die Startkante der Reihe des Gitterbereichs des Grid-Elements n Linien von der Endkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen zum Zweck des Zählens dieser Spanne haben.

    Wenn der \<integer> weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

    Das `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zeilenstart für ein Gitterelement festlegen

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
