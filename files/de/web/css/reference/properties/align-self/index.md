---
title: "`align-self` CSS property"
short-title: align-self
slug: Web/CSS/Reference/Properties/align-self
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`align-self`** [CSS](/de/docs/Web/CSS)-Eigenschaft überschreibt den {{cssxref("align-items")}}-Wert eines Gitters oder Flex-Elements. In einem Gitter richtet sie das Element innerhalb des {{Glossary("Grid_Areas", "Gitterbereichs")}} aus. In Flexbox richtet sie das Element an der {{Glossary("cross_axis", "Querachse")}} aus.

Die Eigenschaft gilt nicht für Block-Level-Boxen oder Tabellenzellen. Wenn der Querachsenrand eines Flexbox-Elements `auto` ist, wird `align-self` ignoriert.

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

Diese Eigenschaft wird als eines oder zwei der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Wird zum {{cssxref("align-items")}}-Wert des Elternteils berechnet.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt von dem Layout-Modus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Gitter-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungsbehälters aus, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungsbehälters aus, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Querrand des Flex-Elements ist bündig mit dem Startkante der Linie.
- `flex-end`
  - : Der Querrand des Flex-Elements ist bündig mit dem Endkante der Linie.
- `center`
  - : Die Randbox des Flex-Elements wird in der Linie auf der Querachse zentriert. Wenn die Quergröße des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Grundlinienausrichtung an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundliniensatzes der Box mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundliniensatz aller Boxen in ihrer Grundliniengruppe aus.
    Die Rückfallausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die Quergröße des Elements `auto` ist, wird die verwendete Größe auf die Länge gesetzt, die erforderlich ist, um den Container so nah wie möglich auszufüllen, unter Berücksichtigung der Breiten- und Höhenbeschränkungen des Elements. Wenn das Element nicht automatisch skaliert wird, fällt dieser Wert auf `flex-start` zurück und auf `self-start` oder `self-end`, wenn das {{cssxref("align-content")}} des Containers `first baseline` (oder `baseline`) oder `last baseline` ist.
- `anchor-center`
  - : Im Falle von [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen wird das Element in Blockrichtung zum Zentrum des zugehörigen Ankerelements hin ausgerichtet. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungsbehälter überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungsbehälters wird der gegebene Ausrichtungswert berücksichtigt.

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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung in Gitter-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
