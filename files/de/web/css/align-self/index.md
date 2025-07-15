---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den {{cssxref("align-items")}}-Wert eines Grid- oder Flex-Items. Im Grid richtet sie das Element innerhalb des {{Glossary("Grid_Areas", "Grid-Bereichs")}} aus. Im Flexbox-Modell richtet sie das Element auf der {{Glossary("cross_axis", "Querachse")}} aus.

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

Die Eigenschaft gilt nicht für Block-Elemente oder Tabellenzellen. Wenn der Querachsenrand eines Flexbox-Items auf `auto` gesetzt ist, wird `align-self` ignoriert.

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
  - : Überein mit dem {{cssxref("align-items")}}-Wert des übergeordneten Elements.
- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Elemente und Tabellenzellen.

- `self-start`
  - : Richten Sie die Elemente so aus, dass sie mit der Kante des Ausrichtungscontainers bündig sind, die der Startseite des Elements auf der Querachse entspricht.
- `self-end`
  - : Richten Sie die Elemente so aus, dass sie mit der Kante des Ausrichtungscontainers bündig sind, die der Endseite des Elements auf der Querachse entspricht.
- `flex-start`
  - : Der Querstart-Rand der Flexbox ist mit der Querstart-Kante der Zeile bündig.
- `flex-end`
  - : Der Querend-Rand der Flexbox ist mit der Querend-Kante der Zeile bündig.
- `center`
  - : Die Randbox des Flex-Elements ist innerhalb der Zeile auf der Querachse zentriert. Wenn die Querausdehnung des Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der Ausrichtung der ersten oder letzten Basislinie: richtet die Ausrichtungsbasislinie der ersten oder letzten Basissatz des Kastens mit der entsprechenden Basislinie im geteilten ersten oder letzten Basissatz aller Kästen in seiner Basislinien-Gruppe aus.
    Die Ausweichausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auf `auto` skaliert ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe aller auf `auto` skalierten Elemente genau den Ausrichtungscontainer entlang der Querachse ausfüllt.
- `anchor-center`
  - : Bei [anchor-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element in der Blockrichtung auf die Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen ausgerichtet, als wäre der Ausrichtungsmodus `start`.
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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
