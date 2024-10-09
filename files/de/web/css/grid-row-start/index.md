---
title: grid-row-start
slug: Web/CSS/grid-row-start
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-row-start`**-[CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die Startposition eines Grid-Elements innerhalb der Rasterreihe, indem sie zu seiner Rasterplatzierung eine Linie, eine Spanne oder nichts (automatisch) beiträgt und somit die Inline-Startkante seines {{Glossary("grid_areas", "Grid-Bereichs")}} angibt.

{{EmbedInteractiveExample("pages/css/grid-row-start.html")}}

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

Diese Eigenschaft wird als einzelner `<grid-line>`-Wert angegeben. Ein `<grid-line>`-Wert kann folgendermaßen spezifiziert werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-start' gibt, trägt sie zur Platzierung des Grid-Elements die erste solche Linie bei.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-row-start: foo;` die Startkante dieses benannten Grid-Bereichs wählt (es sei denn, es wurde vorher explizit eine andere Linie namens `foo-start` angegeben).

    Andernfalls wird dies behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Rasterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts, beginnend am Endrand des expliziten Rasters.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Rasterlinien diesen Namen haben, um diese Position zu bestimmen.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Rasterspannweite zur Platzierung des Grid-Elements bei; so dass die Zeilenstartkante des Grid-Bereichs des Grid-Elements n Linien vom Endrand entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Rasterlinien auf der Seite des expliziten Rasters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die \<integer> weggelassen wird, ist sie standardmäßig `1`. Negative Ganzzahlen oder 0 sind ungültig.

    Das `<custom-ident>` kann nicht den Wert `span` annehmen.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Einstellung des Startpunkts einer Zeile für ein Grid-Element

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
