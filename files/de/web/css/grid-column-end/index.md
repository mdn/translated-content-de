---
title: grid-column-end
slug: Web/CSS/grid-column-end
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-column-end`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Endposition eines Grid-Elements innerhalb der Grid-Spalte, indem sie zu ihrer Gitterplatzierung eine Linie, eine Spannweite oder nichts (automatisch) beiträgt und dabei die Block-Endkante ihres {{Glossary("grid_areas", "Gitterbereichs")}} bestimmt.

{{EmbedInteractiveExample("pages/css/grid-column-end.html")}}

## Syntax

```css
/* Keyword value */
grid-column-end: auto;

/* <custom-ident> values */
grid-column-end: somegridarea;

/* <integer> + <custom-ident> values */
grid-column-end: 2;
grid-column-end: somegridarea 4;

/* span + <integer> + <custom-ident> values */
grid-column-end: span 3;
grid-column-end: span somegridarea;
grid-column-end: 5 somegridarea span;

/* Global values */
grid-column-end: inherit;
grid-column-end: initial;
grid-column-end: revert;
grid-column-end: revert-layer;
grid-column-end: unset;
```

### Werte

- `auto`
  - : Ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spannweite oder eine Standartspannweite von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-end' gibt, trägt sie zur Gitterplatzierung des ersten solchen Elements bei.

    > [!NOTE]
    > Benannte Gitterbereiche erzeugen automatisch implizite benannte Linien dieser Form. Daher wird bei der Angabe von `grid-column-end: foo;` die Endkante des benannten Gitterbereichs gewählt (es sei denn, eine andere Linie mit dem Namen `foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit der `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben ist, wird stattdessen rückwärts gezählt, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als \<custom-ident> gegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspannweite zur Platzierung des Grid-Elements bei, so dass die Spalten-Endkante des Grid-Bereichs des Elements n Linien von der Startkante entfernt ist.

    Wenn ein Name als \<custom-ident> gegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannweite zu zählen.

    Wenn der \<integer> ausgelassen wird, wird er standardmäßig auf `1` gesetzt. Negative Ganzzahlen oder 0 sind ungültig.

    Die `<custom-ident>` kann nicht den Wert `span` haben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Spaltenendes für ein Grid-Element

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
