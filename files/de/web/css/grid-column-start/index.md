---
title: grid-column-start
slug: Web/CSS/grid-column-start
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-column-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die Startposition eines Grid-Elements innerhalb der Gitterspalte, indem sie zu dessen Platzierung eine Linie, eine Spanne oder nichts (automatisch) beiträgt. Diese Startposition definiert die Block-Startkante des {{Glossary("grid_areas", "Grid-Bereichs")}}.

{{EmbedInteractiveExample("pages/css/grid-column-start.html")}}

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

Diese Eigenschaft wird als einzelner `<grid-line>`-Wert angegeben. Ein `<grid-line>`-Wert kann spezifiziert werden als:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` anzeigt.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizite benannte Linien dieser Form, sodass die Angabe von `grid-column-start: foo;` den Start der benannten Grid-Bereichskante auswählt, es sei denn, eine andere Linie mit dem Namen `foo-start` wurde zuvor explizit angegeben.

    Andernfalls wird dies so behandelt, als wäre die ganze Zahl `1` zusammen mit dem `<custom-ident>` spezifiziert worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Zahl angegeben ist, wird sie rückwärts ab der Endkante des expliziten Gitters gezählt.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Gitterlinien für den Zweck, diese Position zu finden, diesen Namen haben.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gittersanne zur Platzierung des Grid-Elements bei, sodass die Spaltenanfangskante des Gitternetzbereichs des Gitternetz-Elements n Linien von der Endkante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen für den Zweck der Zählung dieser Spanne haben.

    Wenn der \<integer> weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen und `0` sind ungültig.

    Der `<custom-ident>` kann nicht den `span`-Wert annehmen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spaltenstart für ein Grid-Element festlegen

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
