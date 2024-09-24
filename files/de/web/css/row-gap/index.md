---
title: row-gap
slug: Web/CSS/row-gap
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die **`row-gap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Größe der Lücke ({{glossary("gutters","gutter")}}) zwischen den Zeilen eines Elements fest.

Frühe Versionen der Spezifikation bezeichneten diese Eigenschaft als `grid-row-gap`, und um die Kompatibilität mit älteren Websites zu gewährleisten, akzeptieren Browser weiterhin `grid-row-gap` als Alias für `row-gap`.

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

## Syntax

```css
/* <length> Werte */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> Wert */
row-gap: 10%;

/* Globale Werte */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Werte

- `<length-percentage>`
  - : Ist die Breite der Lücke, die die Zeilen trennt. {{CSSxRef("&lt;percentage&gt;")}} Werte sind relativ zur Dimension des Elements.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Layout

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Ergebnis

{{EmbedLiveSample('Flex_layout', "auto", "120px")}}

### Grid-Layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Ergebnis

{{EmbedLiveSample('Grid_layout', 'auto', 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- [Grundlegende Konzepte des Grid-Layouts: Gutters](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
