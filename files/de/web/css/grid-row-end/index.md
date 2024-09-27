---
title: grid-row-end
slug: Web/CSS/grid-row-end
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-row-end`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt die Endposition eines Grid-Elements innerhalb der Grid-Reihe an, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu ihrer Gitterplatzierung beiträgt. Dabei wird die inline-end Begrenzung ihrer [Gitterfläche](/de/docs/Glossary/grid_areas) spezifiziert.

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
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und auf Auto-Platzierung, eine automatische Spannweite oder eine Standardsprungweite von `1` hinweist.
- `<custom-ident>`

  - : Gibt es eine benannte Linie mit dem Namen '\<custom-ident>-end', trägt sie die erste solcher Linien zur Grid-Platzierung des Elements bei.

    > [!NOTE]
    > Benannte Gitterflächen erzeugen automatisch implizite benannte Linien dieser Form, sodass die Angabe von `grid-row-end: foo;` die Endbegrenzung dieser benannten Gitterfläche wählt (es sei denn, eine andere Linie namens `foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies so behandelt, als ob der Integer `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

    Der `<custom-ident>` kann nicht den `span`-Wert annehmen.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wird eine negative Zahl angegeben, wird in umgekehrter Richtung gezählt, beginnend von der Endbegrenzung des expliziten Gitters.

    Wird ein Name als \<custom-ident> angegeben, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird angenommen, dass alle impliziten Gitterlinien diesen Namen für den Zweck haben, diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspannweite zur Platzierung des Grid-Elements bei, sodass die Reihe an der Endbegrenzung der Gitterfläche des Grid-Elements n Linien von der Startbegrenzung entfernt ist.

    Wird ein Name als \<custom-ident> angegeben, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die mit der Suchrichtung übereinstimmt, diesen Namen haben für das Zählen dieser Spannweite.

    Ist der \<integer> weggelassen, wird dieser standardmäßig als `1` betrachtet. Negative Ganzzahlen oder 0 sind ungültig.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Zeilenendpunktes für ein Grid-Element

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
