---
title: grid-area
slug: Web/CSS/grid-area
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`grid-area`** CSS-[Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb eines {{Glossary("grid", "Gitters")}} fest, indem sie entweder eine Linie, eine Übergangslinie oder nichts (automatisch) zu seiner Platzierung im Gitter beiträgt und dadurch die Ränder seines {{Glossary("grid_areas", "Gitterbereichs")}} bestimmt.

{{InteractiveExample("CSS Demo: grid-area")}}

```css interactive-example-choice
grid-area: a;
```

```css interactive-example-choice
grid-area: b;
```

```css interactive-example-choice
grid-area: c;
```

```css interactive-example-choice
grid-area: 2 / 1 / 2 / 4;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Example</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-template-areas:
    "a a a"
    "b c c"
    "b c c";
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

Wenn vier `<grid-line>`-Werte angegeben sind, wird `grid-row-start` auf den ersten Wert gesetzt, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert.

Wenn `grid-column-end` weggelassen wird, wird, falls `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird, wird, falls `grid-row-start` ein `<custom-ident>` ist, `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird, werden, falls `grid-row-start` ein `<custom-ident>` ist, alle vier Langformen auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area`-Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich dient, der dann mit {{cssxref("grid-template-areas")}} platziert werden kann.

## Zusammengesetzte Eigenschaften

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatische Platzierung oder einen Standard-Übergang von `1` bedeutet.
- `<custom-ident>`
  - : Falls es eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Gitterbereiche erzeugen automatisch implizit benannte Linien dieser Form. Das heißt, wenn `grid-area: foo;` angegeben wird, werden die Start-/Endkanten dieses benannten Gitterbereichs gewählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird so behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird in umgekehrter Reihenfolge angefangen, von der Endkante des expliziten Gitters zu zählen.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird angenommen, dass alle impliziten Gitterlinien für diese Position diesen Namen haben.

    Ein {{cssxref("&lt;integer&gt;")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Gitterspanne zur Platzierung des Grid-Elements bei, sodass die entsprechende Kante des Gitterbereichs des Grid-Elements _n_ Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn der {{cssxref("&lt;integer&gt;")}} weggelassen wird, beträgt der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

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
- [Gittervorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Gittervorlagenbereiche](https://gridbyexample.com/video/grid-template-areas/)
