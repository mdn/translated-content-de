---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} eines Grid- oder Flex-Items. In Grids richtet sie das Item innerhalb des {{Glossary("Grid_Areas", "Grid-Bereichs")}} aus. In Flexbox richtet sie das Item auf der {{Glossary("cross_axis", "Kreuzachse")}} aus.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

Die Eigenschaft gilt nicht für Block-Level-Boxen oder für Tabellenzellen. Wenn der Kreuzachsenrand eines Flexbox-Items `auto` ist, wird `align-self` ignoriert.

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

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzen_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In statischer Position absolut positionierter Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Items verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Items führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `self-start`

  - : Richtet die Items so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Startseite des Items in der Kreuzachse entspricht.

- `self-end`

  - : Richtet die Items so aus, dass sie bündig mit dem Rand des Ausrichtungscontainers sind, der der Endseite des Items in der Kreuzachse entspricht.

- `flex-start`

  - : Der Kreuz-Start-Rand des Flex-Items ist mit dem Kreuz-Start-Rand der Linie bündig.

- `flex-end`

  - : Der Kreuz-End-Rand des Flex-Items ist mit dem Kreuz-End-Rand der Linie bündig.

- `center`

  - : Die Margin-Box des Flex-Items wird innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße des Items größer als der Flex-Container ist, wird sie gleichmäßig in beide Richtungen überlaufen.

- `baseline`, `first baseline`, `last baseline`

  - : Gibt die Teilnahme an der ersten oder letzten Baseline-Ausrichtung an: richtet die Ausrichtungs-Baseline des ersten oder letzten Baseline-Sets der Box mit der entsprechenden Baseline im gemeinsamen ersten oder letzten Baseline-Set aller Boxen in ihrer Baseline-Sharing-Gruppe aus.
    Das Fallback für `first baseline` ist `start`, das für `last baseline` ist `end`.

- `stretch`

  - : Wenn die kombinierte Größe der Items entlang der Kreuzachse kleiner als die Größe des Ausrichtungscontainers ist und das Item `auto`-größenmäßig ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, unter Beachtung der durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionalität) auferlegten Beschränkungen, sodass die kombinierte Größe aller `auto`-größenmäßigen Items genau den Ausrichtungscontainer entlang der Kreuzachse ausfüllt.

- `anchor-center`

  - : Im Fall von [verankerungs-positionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen, richtet das Item in der Blockrichtung auf das Zentrum des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`

  - : Wenn die Größe des Items den Ausrichtungscontainer überläuft, wird das Item stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`
  - : Unabhängig von den relativen Größen des Items und des Ausrichtungscontainers wird der angegebene Ausrichtungswert beachtet.

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
- [Ausrichten von Items in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
