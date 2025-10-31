---
title: align-self
slug: Web/CSS/Reference/Properties/align-self
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} eines Gitters oder Flex-Elements. Im Gitter richtet es das Element innerhalb des {{Glossary("Grid_Areas", "Gitterbereichs")}} aus. Im Flexbox-Kontext richtet es das Element entlang der {{Glossary("cross_axis", "Cross-Achse")}} aus.

{{InteractiveExample("CSS Demo: align-self")}}

```css interactive-example-choice
align-self: stretch;
```

```css interactive-example-choice
align-self: center;
```

```css interactive-example-choice
align-self: start;
```

```css interactive-example-choice
align-self: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Diese Eigenschaft gilt nicht für Block-Level-Boxen oder für Tabellenzellen. Wenn der Kreuzachsenrand eines Flexbox-Elements `auto` ist, wird `align-self` ignoriert.

## Syntax

```css
/* Keyword values */
align-self: auto;
align-self: normal;

/* Positional alignment */
/* align-self does not take left and right values */
align-self: center; /* Put the item around the center */
align-self: start; /* Put the item at the start */
align-self: end; /* Put the item at the end */
align-self: self-start; /* Align the item flush at the start */
align-self: self-end; /* Align the item flush at the end */
align-self: flex-start; /* Put the flex item at the start */
align-self: flex-end; /* Put the flex item at the end */
align-self: anchor-center;

/* Baseline alignment */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Stretch 'auto'-sized items to fit the container */

/* Overflow alignment */
align-self: safe center;
align-self: unsafe center;

/* Global values */
align-self: inherit;
align-self: initial;
align-self: revert;
align-self: revert-layer;
align-self: unset;
```

### Werte

- `auto`
  - : Berechnet sich zum {{cssxref("align-items")}} Wert des übergeordneten Elements.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` auf _ersetzten_ absolut positionierten Boxen und wie `stretch` auf _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Gitterelementen führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements auf der Kreuzachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements auf der Kreuzachse entspricht.
- `flex-start`
  - : Der Kreuzstart-Rand des Flex-Elements ist bündig mit dem Kreuzstart-Rand der Linie.
- `flex-end`
  - : Der Kreuzend-Rand des Flex-Elements ist bündig mit dem Kreuzend-Rand der Linie.
- `center`
  - : Die Randbox des Flex-Elements ist innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überfließen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: richtet die Basislinie der Ausrichtung der Box's ersten oder letzten Basislinie mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in ihrer Basislinien-Gruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die Kreuzgröße des Elements `auto` ist, wird die verwendete Größe auf die Länge gesetzt, die erforderlich ist, um den Container so weit wie möglich zu füllen, wobei die Größenbeschränkungen des Elements respektiert werden. Wenn das Element nicht automatisch dimensioniert ist, fällt dieser Wert auf `flex-start` zurück, und auf `self-start` oder `self-end`, wenn das Container's {{cssxref("align-content")}} `first baseline` (oder `baseline`) oder `last baseline` ist.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen, richtet das Element zum Zentrum des zugehörigen Ankerelements in der Blockrichtung aus. Siehe [Zentrieren auf den Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert beibehalten.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### HTML

```html
<section>
  <div>Item #1</div>
  <div>Item #2</div>
  <div>Item #3</div>
</section>
```

### CSS

```css
section {
  display: flex;
  align-items: center;
  height: 120px;
  background: beige;
}

div {
  height: 60px;
  background: cyan;
  margin: 5px;
}

div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Gitter-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
