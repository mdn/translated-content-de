---
title: align-self
slug: Web/CSS/Reference/Properties/align-self
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den {{cssxref("align-items")}} Wert eines Grid- oder Flex-Elements. Im Grid richtet sie das Element innerhalb des {{Glossary("Grid_Areas", "Grid-Bereichs")}} aus. Im Flexbox-Modell richtet sie das Element auf der {{Glossary("cross_axis", "Querachse")}} aus.

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

Die Eigenschaft gilt nicht für Block-Level-Boxen oder Tabellenelemente. Wenn der Querachsenrand eines Flexbox-Elements auf `auto` gesetzt ist, wird `align-self` ignoriert.

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
  - : Berechnet den Wert des übergeordneten Elements von {{cssxref("align-items")}}.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom Layout-Modus ab, in dem wir uns befinden:
    - In absolut-positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut-positionierten Boxen und wie `stretch` bei _allen anderen_ absolut-positionierten Boxen.
    - In der statischen Position von absolut-positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenelemente.

- `self-start`
  - : Richtet die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers übereinstimmen, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente so aus, dass sie mit dem Rand des Ausrichtungscontainers übereinstimmen, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Querstart-Rand des Flex-Elements ist mit dem Querstart-Rand der Linie bündig.
- `flex-end`
  - : Der Querend-Rand des Flex-Elements ist mit dem Querend-Rand der Linie bündig.
- `center`
  - : Die Randbox des Flex-Elements ist innerhalb der Linie auf der Querachse zentriert. Wenn die Quersumme des Elements größer ist als die des Flex-Containers, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basisliniensatzes der Box mit der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basisliniensatz aller Boxen in ihrer Basislinien-Freigabegruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die Quersumme des Elements `auto` ist, wird die verwendete Größe auf die Länge gesetzt, die erforderlich ist, um den Container so gut wie möglich auszufüllen, wobei die Breiten- und Höhenbeschränkungen des Elements respektiert werden. Wenn das Element nicht automatisch dimensioniert ist, fällt dieser Wert auf `flex-start` zurück, und auf `self-start` oder `self-end`, wenn der Container's {{cssxref("align-content")}} auf `first baseline` (oder `baseline`) oder `last baseline` gesetzt ist.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet es das Element in der Blockrichtung auf die Mitte des zugehörigen Ankerelements aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements die des Ausrichtungscontainers überschreitet, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beachtet.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
