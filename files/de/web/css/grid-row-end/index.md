---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-row-end`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Endposition eines Grid-Elements innerhalb der Gitterreihe fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt und so die inline-end-Randseite seines [Grid-Bereichs](/de/docs/Glossary/grid_areas) bestimmt.

{{EmbedInteractiveExample("pages/css/grid-row-end.html")}}

## Syntax

```css
/* Keyword value */
grid-row-end: auto;

/* <custom-ident> values */
grid-row-end: somegridarea;

/* <integer> + <custom-ident> values */
grid-row-end: 2;
grid-row-end: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-row-end: span 3;
grid-row-end: span somegridarea;
grid-row-end: 5 somegridarea span;

/* Global values */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: revert;
grid-row-end: revert-layer;
grid-row-end: unset;
```

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und somit eine automatische Platzierung, eine automatische Spanne oder eine Standardsparte von `1` festlegt.
- `<custom-ident>`

  - : Wenn eine benannte Linie mit dem Namen '\<custom-ident>-end' existiert, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizite benannte Linien dieser Form. Das heißt, wenn `grid-row-end: foo;` angegeben wird, wird die Endkante dieses benannten Grid-Bereichs gewählt (es sei denn, eine andere Linie mit dem Namen `foo-end` wurde vorher ausdrücklich festgelegt).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

    Der `<custom-ident>` kann nicht den `span`-Wert annehmen.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts, beginnend vom Endrand des expliziten Gitters aus.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspanne zur Platzierung des Grid-Elements bei, sodass die row end-Kante des Grid-Bereichs des Grid-Elements n Linien von der start edge entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die \<integer> weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Zeilenendes für ein Grid-Element

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
- [Zeilenbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
