---
title: grid-area
slug: Web/CSS/grid-area
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die CSS **`grid-area`** [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Gitterelements innerhalb eines {{Glossary("grid", "Grids")}} fest, indem sie eine Linie, einen Spann oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt und dadurch die Ränder seines {{Glossary("grid_areas", "Gitterbereichs")}} bestimmt.

{{EmbedInteractiveExample("pages/css/grid-area.html")}}

Wenn vier `<grid-line>` Werte angegeben werden, wird `grid-row-start` auf den ersten Wert gesetzt, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert.

Wenn `grid-column-end` weggelassen wird, wird, falls `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, `grid-column-end` auf diesen `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird, wird, falls `grid-row-start` ein `<custom-ident>` ist, `grid-row-end` auf diesen `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird, werden, falls `grid-row-start` ein `<custom-ident>` ist, alle vier Langformen auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area`-Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich fungiert und dann mit {{cssxref("grid-template-areas")}} platziert werden kann.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`grid-row-start`](/de/docs/Web/CSS/grid-row-start)
- [`grid-column-start`](/de/docs/Web/CSS/grid-column-start)
- [`grid-row-end`](/de/docs/Web/CSS/grid-row-end)
- [`grid-column-end`](/de/docs/Web/CSS/grid-column-end)

## Syntax

```css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area: 4 some-grid-area;
grid-area: 4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: revert;
grid-area: revert-layer;
grid-area: unset;
```

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Gitterelements beiträgt, was eine automatische Platzierung oder eine Standardsperre von `1` angibt.
- `<custom-ident>`

  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` vorhanden ist, trägt diese die erste solche Linie zur Platzierung des Gitterelements bei.

    > [!NOTE]
    > Benannte Gitterbereiche erzeugen automatisch implizite benannte Linien dieser Form, daher wird bei der Angabe von `grid-area: foo;` die Start-/Endkante dieses benannten Gitterbereichs gewählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt zur Platzierung die n-te Gitterlinie des Gitterelements bei. Wenn eine negative Zahl angegeben ist, wird sie stattdessen rückwärts gezählt, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("&lt;integer&gt;")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt einen Gitterspann zur Platzierung des Gitterelements bei, so dass die entsprechende Kante des Gitterbereichs des Gitterelements _n_ Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diesen Spann zu zählen.

    Wenn das {{cssxref("&lt;integer&gt;")}} weggelassen wird, ist der Standard `1`. Negative Zahlen oder `0` sind ungültig.

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Gitterbereichen

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_areas", "100%", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-template-areas")}}
- [Grid-Vorlage-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid-Vorlage-Bereiche](https://gridbyexample.com/video/grid-template-areas/)
