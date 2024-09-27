---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} eines Grid- oder Flex-Elements. In einem Grid richtet es das Element innerhalb des [Gitterbereichs](/de/docs/Glossary/Grid_Areas) aus. Im Flexbox-Kontext richtet es das Element auf der [Querachse](/de/docs/Glossary/cross_axis) aus.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

Die Eigenschaft gilt nicht für Block-Level-Boxen oder Tabellenzellen. Wenn der Querachsenrand eines Flexbox-Elements auf `auto` gesetzt ist, wird `align-self` ignoriert.

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
  - : Berechnet sich zum Wert von {{cssxref("align-items")}} des übergeordneten Elements.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) oder intrinsischen Größen, wo es wie `start` wirkt.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Startmarginrand des Flex-Elements ist mit dem Startzeilenrand gespült.
- `flex-end`
  - : Der Endmarginrand des Flex-Elements ist mit dem Endzeilenrand gespült.
- `center`
  - : Die Marginbox des Flex-Elements ist auf der Querachse innerhalb der Zeile zentriert. Ist die Querausdehnung des Elements größer als der Flex-Container, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Grundlinienausrichtung an: richtet die Ausrichtungsgrundlinie der ersten oder letzten Grundliniensammlung der Box mit der entsprechenden Grundlinie in der gemeinsamen ersten oder letzten Grundliniensammlung aller Boxen in ihrer Grundliniensharing-Gruppe aus.
    Das Fallback-Ausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Ist die kombinierte Größe der Elemente entlang der Querachse kleiner als die Größe des Ausrichtungscontainers und ist das Element auf `auto`-Größe eingestellt, wird seine Größe gleichmäßig (nicht proportional) erhöht, während sie die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalität) auferlegten Beschränkungen respektiert, sodass die kombinierte Größe aller `auto`-größen Elemente genau den Ausrichtungscontainer entlang der Querachse füllt.
- `anchor-center`
  - : Im Falle von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element in der Blockrichtung zum Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker unter Verwendung von `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und Ausrichtungscontainers wird der gegebene Ausrichtungswert berücksichtigt.

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

- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Gitter-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- Die {{cssxref("align-items")}} Eigenschaft
