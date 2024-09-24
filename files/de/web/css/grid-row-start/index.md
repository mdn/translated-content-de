---
title: grid-row-start
slug: Web/CSS/grid-row-start
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-row-start`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Startposition eines Gitterelements innerhalb der Gitterzeile fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt. Damit wird die inline-start Kante seines {{glossary("grid areas", "Gitterbereichs")}} festgelegt.

{{EmbedInteractiveExample("pages/css/grid-row-start.html")}}

## Syntax

```css
/* Keyword-Wert */
grid-row-start: auto;

/* <custom-ident> Werte */
grid-row-start: somegridarea;

/* <integer> + <custom-ident> Werte */
grid-row-start: 2;
grid-row-start: somegridarea 4;

/* span + <integer> + <custom-ident> Werte */
grid-row-start: span 3;
grid-row-start: span somegridarea;
grid-row-start: 5 somegridarea span;

/* Globale Werte */
grid-row-start: inherit;
grid-row-start: initial;
grid-row-start: revert;
grid-row-start: revert-layer;
grid-row-start: unset;
```

Diese Eigenschaft wird als einzelner `<grid-line>` Wert spezifiziert. Ein `<grid-line>` Wert kann folgendermaßen angegeben werden:

- entweder das `auto`-Schlüsselwort,
- oder ein `<custom-ident>` Wert,
- oder ein `<integer>` Wert,
- oder sowohl `<custom-ident>` als auch `<integer>`, durch ein Leerzeichen getrennt,
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Gitterelements beiträgt und damit auf automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '\<custom-ident>-start' gibt, trägt es die erste solche Linie zur Platzierung des Gitterelements bei.

    > [!NOTE]
    > Benannte Gitterbereiche generieren automatisch implizite benannte Linien dieser Form, sodass die Angabe `grid-row-start: foo;` die Startkante dieses benannten Gitterbereichs auswählt (es sei denn, eine andere Linie mit dem Namen `foo-start` wurde vorher explizit angegeben).

    Andernfalls wird dies so behandelt, als wäre die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Gitterelements bei. Wenn eine negative ganze Zahl angegeben ist, wird sie stattdessen rückwärts gezählt, beginnend vom Rand der expliziten Gitter.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien diesen Namen für das Finden dieser Position haben.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspanne zur Platzierung des Gitterelements bei; sodass die Zeilenanfangskante des Gitterbereichs des Gitterelements n Linien vom Endrand entfernt ist.

    Wenn ein Name als \<custom-ident> angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen für das Zählen dieser Spanne haben.

    Wenn der \<integer> weggelassen wird, ist der Standardwert `1`. Negative ganze Zahlen oder 0 sind ungültig.

    Der `<custom-ident>` Wert kann nicht den `span` Wert annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Start der Reihe für ein Gitterelement festlegen

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
- [Linienplatzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienplatzierung](https://gridbyexample.com/video/series-line-based-placement/)
