---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS)-Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} eines Grid- oder Flex-Items. Im Grid richtet sie das Element innerhalb des [Grid-Bereichs](/de/docs/Glossary/Grid_Areas) aus. Im Flexbox-Layout richtet sie das Element auf der [Querachse](/de/docs/Glossary/cross_axis) aus.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

Die Eigenschaft gilt nicht für Block-Level-Boxen oder Tabellenzellen. Wenn der Querachsenrand eines Flexbox-Items `auto` ist, wird `align-self` ignoriert.

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
  - : Berechnet sich zum Wert der übergeordneten {{cssxref("align-items")}}.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - Im statischen Zustand absolut positionierter Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Items verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Items führt dieses Schlüsselwort zu einem Verhalten ähnlich `stretch`, außer bei Boxen mit einem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements auf der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements auf der Querachse entspricht.
- `flex-start`
  - : Der Start-Randabstand der Querachse des Flex-Items ist mit dem Start-Rand der Linie bündig.
- `flex-end`
  - : Der End-Randabstand der Querachse des Flex-Items ist mit dem End-Rand der Linie bündig.
- `center`
  - : Die Randbox des Flex-Items ist innerhalb der Linie auf der Querachse zentriert. Wenn die Querausrichtung des Elements größer als der Flex-Container ist, wird sie in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basissatzes der Box mit der entsprechenden Basislinie in der gemeinsamen ersten oder letzten Basislinensatz aller Boxen in ihrer Basisausrichtungsgruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner als die des Ausrichtungscontainers ist und das Element `auto`-sized ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, unter Wahrung der durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder äquivalente Funktionalität) auferlegten Beschränkungen, so dass die kombinierte Größe aller `auto`-sized Items genau den Ausrichtungscontainer entlang der Querachse füllt.
- `anchor-center`
  - : Bei [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element im Blockrichtung auf die Mitte des zugehörigen Ankerelements aus. Siehe [Zentrierung am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element so ausgerichtet, als wäre der Ausrichtungsmodus `start`.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der gegebene Ausrichtungswert beachtet.

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

- [Grundkonzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- Die {{cssxref("align-items")}}-Eigenschaft
