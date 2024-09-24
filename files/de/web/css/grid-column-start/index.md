---
title: grid-column-start
slug: Web/CSS/grid-column-start
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-column-start`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Startposition eines Grid-Elements innerhalb der Gitterspalte fest, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt. Diese Startposition definiert die Block-Startkante des {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-column-start.html")}}

## Syntax

```css
/* Schlüsselwortwert */
grid-column-start: auto;

/* <custom-ident> Wert */
grid-column-start: somegridarea;

/* <integer> + <custom-ident> Werte */
grid-column-start: 2;
grid-column-start: somegridarea 4;

/* span + <integer> + <custom-ident> Werte */
grid-column-start: span 3;
grid-column-start: span somegridarea;
grid-column-start: span somegridarea 5;

/* Globale Werte */
grid-column-start: inherit;
grid-column-start: initial;
grid-column-start: revert;
grid-column-start: revert-layer;
grid-column-start: unset;
```

Diese Eigenschaft wird als einzelner `<grid-line>` Wert angegeben. Ein `<grid-line>` Wert kann angegeben werden als:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spannweite oder eine Standardspannweite von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` gibt, trägt diese die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Gitternetzbereiche generieren automatisch implizit benannte Linien dieser Form, daher wird bei der Angabe von `grid-column-start: foo;` die Startkante dieses benannten Gitternetzbereichs gewählt (sofern nicht bereits vorher explizit eine andere Linie namens `foo-start` angegeben wurde).

    Ansonsten wird dies so behandelt, als wäre die Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitternetzlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Zahl angegeben ist, wird rückwärts gezählt, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Gitternetzlinien diesen Namen zu Zwecken der Positionsbestimmung haben.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspanne zur Platzierung des Grid-Elements bei, sodass die Spaltenstartkante des Gitterbereichs des Grid-Elements n Linien von der Endkante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Gitternetzlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen zu Zählungszwecken haben.

    Wenn das \<integer> weggelassen wird, ist der Standardwert `1`. Negative Zahlen und `0` sind ungültig.

    Der `<custom-ident>` kann nicht den `span` Wert annehmen.

## Formalde Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Spaltenbeginns für ein Grid-Element

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
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
