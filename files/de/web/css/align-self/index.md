---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den {{cssxref("align-items")}} Wert eines Grid- oder Flex-Items. In Grids richtet sie das Item innerhalb des {{glossary("Grid Areas", "grid area")}} aus. Im Flexbox-Layout richtet sie das Item auf der {{glossary("cross axis")}} aus.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

Die Eigenschaft gilt nicht für Block-Level-Boxen oder Tabellenelemente. Wenn der Abstand eines Flexbox-Items entlang der Querachse `auto` ist, wird `align-self` ignoriert.

## Syntax

```css
/* Schlüsselwort-Werte */
align-self: auto;
align-self: normal;

/* Positionale Ausrichtung */
/* align-self nimmt keine Werte für links und rechts an */
align-self: center; /* Platzieren Sie das Element in der Mitte */
align-self: start; /* Platzieren Sie das Element am Anfang */
align-self: end; /* Platzieren Sie das Element am Ende */
align-self: self-start; /* Richten Sie das Element bündig am Anfang aus */
align-self: self-end; /* Richten Sie das Element bündig am Ende aus */
align-self: flex-start; /* Platzieren Sie das Flex-Element am Anfang */
align-self: flex-end; /* Platzieren Sie das Flex-Element am Ende */
align-self: anchor-center;

/* Baseline Ausrichtung */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Dehnen Sie 'auto'-Größe-Elemente, um den Container zu füllen */

/* Überlauf-Ausrichtung */
align-self: safe center;
align-self: unsafe center;

/* Globale Werte */
align-self: inherit;
align-self: initial;
align-self: revert;
align-self: revert-layer;
align-self: unset;
```

### Werte

- `auto`
  - : Berechnet sich zum Wert von {{cssxref("align-items")}} des Elternteils.
- `normal`

  - : Die Wirkung dieses Schlüsselworts ist abhängig vom Layoutmodus, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält es sich wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position absolut positionierter Layouts verhält es sich wie `stretch`.
    - Für Flex-Items verhält es sich wie `stretch`.
    - Für Grid-Items führt dieses Schlüsselwort zu einem Verhalten ähnlich wie `stretch`, außer bei Boxen mit einem {{glossary("aspect ratio")}} oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenelemente.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements auf der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements auf der Querachse entspricht.
- `flex-start`
  - : Der Quer-Start-Abstandsrand des Flex-Items ist bündig mit dem Quer-Start-Rand der Zeile.
- `flex-end`
  - : Der Quer-Ende-Abstandsrand des Flex-Items ist bündig mit dem Quer-Ende-Rand der Zeile.
- `center`
  - : Die Margenbox des Flex-Items wird innerhalb der Zeile auf der Querachse zentriert. Ist die Quergröße des Elements größer als der Flex-Container, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Baseline an: richtet die Ausrichtungsbasisline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in ihrer Baseline-Teilegruppe aus.
    Die Ersatz-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auf `auto`-Größe festgelegt ist, wird seine Größe gleichmäßig (nicht proportional) vergrößert, während die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegten Einschränkungen eingehalten werden, sodass die kombinierte Größe aller `auto`-Größe-Elemente genau den Ausrichtungscontainer entlang der Querachse füllt.
- `anchor-center`
  - : Im Fall von [anker-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet es das Element auf der Block-Richtung zum Zentrum des zugehörigen Anker-Elements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überläuft, wird das Element stattdessen ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
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

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- Die {{cssxref("align-items")}} Eigenschaft
