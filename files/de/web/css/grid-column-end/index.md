---
title: grid-column-end
slug: Web/CSS/grid-column-end
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`grid-column-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Endposition eines Grid-Items innerhalb der Grid-Spalte an, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und dadurch die Block-Endkante seines {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

{{InteractiveExample("CSS Demo: grid-column-end")}}

```css interactive-example-choice
grid-column-end: auto;
```

```css interactive-example-choice
grid-column-end: 3;
```

```css interactive-example-choice
grid-column-end: -1;
```

```css interactive-example-choice
grid-column-end: span 3;
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
  - : Trägt nichts zur Platzierung des Grid-Items bei und zeigt eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` an. Dies ist der Standardwert.
- `<custom-ident>`
  - : Trägt die erste Linie zur Platzierung des Grid-Items bei, wenn eine benannte Linie mit dem Namen `<custom-ident>-end` existiert.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizite benannte Linien dieser Form. Wenn Sie `grid-column-end: foo;` angeben, wird die Endkante dieses benannten Grid-Bereichs gewählt (es sei denn, eine andere Linie namens `foo-end` wurde vorher ausdrücklich spezifiziert).

    Andernfalls wird dies so behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Items bei. Bei einer negativen Ganzzahl wird rückwärts gezählt, beginnend vom Endrand des expliziten Gitters.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Existieren nicht genügend Linien mit diesem Namen, wird davon ausgegangen, dass alle impliziten Grid-Linien diesen Namen tragen, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Items bei, sodass die Spalten-Endkante des Grid-Bereichs des Grid-Items n Linien vom Startpunkt entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Existieren nicht genügend Linien mit diesem Namen, wird davon ausgegangen, dass alle impliziten Grid-Linien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen tragen, um diese Spanne zu zählen.

    Wird die \<integer> weggelassen, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

    Der `<custom-ident>` kann nicht die Werte `span` und `auto` annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spaltenende für ein Grid-Item festlegen

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
