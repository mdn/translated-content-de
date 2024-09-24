---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-row-end`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Endposition eines Grid-Elements innerhalb der Grid-Zeile an, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu ihrer Grid-Platzierung beiträgt und damit die Inline-Endkante ihres {{glossary("grid areas", "Grid-Bereichs")}} festlegt.

{{EmbedInteractiveExample("pages/css/grid-row-end.html")}}

## Syntax

```css
/* Schlüsselwortwert */
grid-row-end: auto;

/* <custom-ident> Werte */
grid-row-end: somegridarea;

/* <integer> + <custom-ident> Werte */
grid-row-end: 2;
grid-row-end: somegridarea 4;

/* span + <integer> + <custom-ident> Werte */
grid-row-end: span 3;
grid-row-end: span somegridarea;
grid-row-end: 5 somegridarea span;

/* Globale Werte */
grid-row-end: inherit;
grid-row-end: initial;
grid-row-end: revert;
grid-row-end: revert-layer;
grid-row-end: unset;
```

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatische Platzierung, eine automatische Spanne oder eine Standardsparne von `1` bedeutet.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-end' gibt, trägt sie die erste derartige Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizite benannte Linien dieser Form, sodass die Angabe von `grid-row-end: foo;` die Endkante des benannten Grid-Bereichs wählt (es sei denn, eine andere Linie namens `foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird dies behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

    Das `<custom-ident>` kann nicht den Wert `span` annehmen.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitternetzlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird stattdessen rückwärts gezählt, beginnend mit der Endkante des expliziten Gitters.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitternetzlinien diesen Namen haben, um diese Position zu bestimmen.

    Ein {{cssxref("Ganzzahl")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitternetzspanne zur Platzierung des Grid-Elements bei, sodass die Endkante der Reihe des Grid-Bereichs des Grid-Elements n Linien von der Startkante entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitternetzlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die \<integer> weggelassen wird, wird standardmäßig `1` angenommen. Negative Ganzzahlen oder 0 sind ungültig.

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
- Video: [Zeilenbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
