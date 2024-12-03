---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: d35f4ae5143418c3b64d4f4f2c7e79419b9d434c
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} eines Grid- oder Flex-Elements. Im Grid richtet sie das Element innerhalb des {{Glossary("Grid_Areas", "Grid-Bereichs")}} aus. Im Flexbox richtet sie das Element auf der {{Glossary("cross_axis", "Querachse")}} aus.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

Die Eigenschaft gilt nicht für Block-Level-Boxen oder für Tabellenzellen. Wenn der Querachsenabstand eines Flexbox-Elements auf `auto` gesetzt ist, wird `align-self` ignoriert.

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
  - : Wird zum Wert des übergeordneten {{cssxref("align-items")}} berechnet.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom aktuellen Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder intrinsischen Größen, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit der Kante des Ausrichtungscontainers aus, die der Startseite des Elements auf der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit der Kante des Ausrichtungscontainers aus, die der Endseite des Elements auf der Querachse entspricht.
- `flex-start`
  - : Die Querstartkante des Flex-Elements ist bündig mit der Querstartkante der Linie.
- `flex-end`
  - : Die Querendkante des Flex-Elements ist bündig mit der Querendkante der Linie.
- `center`
  - : Die Randbox des Flex-Elements wird innerhalb der Linie auf der Querachse zentriert. Wenn die Querausdehnung des Elements größer als der Flex-Container ist, kommt es zu gleichmäßigem Überlaufen in beide Richtungen.
- `baseline`, `first baseline`, `last baseline`
  - : Spezifiziert die Teilnahme an der Erst- oder Letzt-Baseline-Ausrichtung: richtet die Ausrichtungs-Baseline der ersten oder letzten Baseline-Gruppe des Boxen-Set mit der entsprechenden Baseline in der geteilten ersten oder letzten Baseline-Gruppe aller Boxen in ihrer Baseline-Sharing-Gruppe aus.
    Die Reserveausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-sized ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Beschränkungen respektiert werden, so dass die kombinierte Größe aller `auto`-sized Elemente den Ausrichtungscontainer entlang der Querachse genau ausfüllt.
- `anchor-center`
  - : Bei [Verankerungs-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) von Elementen richtet das Element in der Blockrichtung in der Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers wird der angegebene Ausrichtungswert eingehalten.

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
