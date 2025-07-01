---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die CSS-Eigenschaft **`grid-row-end`** bestimmt die Endposition eines Grid-Elementes innerhalb der Grid-Reihe, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu seiner Rasterplatzierung beiträgt und somit die inline-Endkante seines {{Glossary("grid_areas", "Rasterbereichs")}} festlegt.

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
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elementes beiträgt und automatische Platzierung, eine automatische Spannweite oder eine Standardspannenweite von `1` anzeigt.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-end' gibt, trägt diese Linie zur Platzierung des Grid-Elementes bei.

    > [!NOTE]
    > Benannte Rasterbereiche generieren automatisch implizit benannte Linien in dieser Form, sodass die Angabe `grid-row-end: foo;` die Endkante dieses benannten Rasterbereichs wählt (es sei denn, eine andere Linie mit dem Namen `foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

    Das `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Rasterlinie zur Platzierung des Grid-Elementes bei. Wenn eine negative Ganzzahl angegeben wird, wird sie stattdessen rückwärts gezählt, beginnend von der Endkante des expliziten Rasters.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Rasterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Rasterspannweite zur Platzierung des Grid-Elementes bei, sodass die Reihenendkante des Rasterbereichs des Grid-Elementes n Linien von der Startkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Rasterlinien auf der Seite des expliziten Rasters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannweite zu zählen.

    Wenn die \<integer> weggelassen wird, wird sie auf `1` standardmäßig gesetzt. Negative Ganzzahlen oder `0` sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Reihenendes für ein Grid-Element

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
- [Rasterplatzierung auf Basis von Linien mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
