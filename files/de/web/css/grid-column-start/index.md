---
title: grid-column-start
slug: Web/CSS/grid-column-start
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`grid-column-start`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Startposition eines Grid-Elementes innerhalb der Grid-Spalte an, indem sie zu seiner Grid-Platzierung eine Linie, eine Spanne oder nichts (automatisch) beiträgt. Diese Startposition definiert die Block-Anfangskante der {{Glossary("grid_areas", "Grid Area")}}.

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

Diese Eigenschaft wird als einzelner `<grid-line>` Wert angegeben. Ein `<grid-line>` Wert kann angegeben werden als:

- entweder das `auto` Schlüsselwort
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beides.

### Werte

- `auto`
  - : Ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zu der Platzierung des Grid-Elementes beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hindeutet.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elementes bei.

    > [!NOTE]
    > Benannte Grid Areas erzeugen automatisch implizite benannte Linien dieser Form, daher wird bei Angabe von `grid-column-start: foo;` die Anfangskante jener benannten Grid Area gewählt (es sei denn, es wurde vorher explizit eine andere Linie mit dem Namen `foo-start` angegeben).

    Andernfalls wird dies behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elementes bei. Wenn eine negative Ganzzahl angegeben wird, wird rückwärts gezählt, beginnend mit der Endkante des expliziten Grids.

    Wird ein Name als `<custom-ident>` angegeben, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen zum Zwecke der Bestimmung dieser Position haben.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Span zur Platzierung des Grid-Elementes bei, sodass die Spaltenanfangskante der Grid Area des Grid-Elementes n Linien von der Endkante entfernt ist.

    Wird ein Name als `<custom-ident>` angegeben, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen zum Zwecke des Zählens dieser Spanne haben.

    Wenn das \<integer> weggelassen wird, wird es standardmäßig auf `1` gesetzt. Negative Ganzzahlen und `0` sind ungültig.

    Das `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spaltenstart für ein Grid-Element einstellen

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
