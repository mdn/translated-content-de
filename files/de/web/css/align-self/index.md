---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: e90d157fe5f9994f550d0b16be61e848ada5d8ea
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS) Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} eines Grid- oder Flex-Items. Im Grid richtet sie das Item innerhalb des {{Glossary("Grid_Areas", "Grid-Bereichs")}} aus. Im Flexbox wird das Item auf der {{Glossary("cross_axis", "Querachse")}} ausgerichtet.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

Die Eigenschaft gilt nicht für Boxen auf Block-Niveau oder für Tabellenzellen. Wenn der Quermargin eines Flexbox-Items auf `auto` gesetzt ist, wird `align-self` ignoriert.

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
  - : Wird auf den Wert des übergeordneten Elements von {{cssxref("align-items")}} berechnet.
- `normal`

  - : Die Wirkung dieses Schlüsselwortes hängt vom Layoutmodus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position absoluter Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Items verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Items führt dieses Schlüsselwort zu einem Verhalten ähnlich wie `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei der es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Boxen auf Block-Niveau und für Tabellenzellen.

- `self-start`
  - : Richtet die Items bündig mit dem Rand des Ausrichtungscontainers aus, der der Anfangsseite des Items auf der Querachse entspricht.
- `self-end`
  - : Richtet die Items bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Items auf der Querachse entspricht.
- `flex-start`
  - : Der Cross-Start-Margin-Rand des Flex-Items ist bündig mit dem Cross-Start-Rand der Linie.
- `flex-end`
  - : Der Cross-End-Margin-Rand des Flex-Items ist bündig mit dem Cross-End-Rand der Linie.
- `center`
  - : Die Margin-Box des Flex-Items ist auf der Querachse innerhalb der Linie zentriert. Wenn die Querschnittsgröße des Items größer ist als der Flex-Container, wird es in beide Richtungen gleichmäßig überstanden.
- `baseline`, `first baseline`, `last baseline`
  - : Bestimmt die Teilnahme an der Ausrichtung der ersten oder letzten Baseline: richtet die Ausrichtungs-Baseline des ersten oder letzten Baseline-Sets der Box am entsprechenden Baseline-Set in der gemeinsamen ersten oder letzten Baseline-Gruppe aller Boxen in seiner Baseline-Teilungsgruppe aus.
    Das Fallback-Alignment für `first baseline` ist `start`, das für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Items entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Item `auto`-groß ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während weiterhin die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder vergleichbare Funktionalität) auferlegten Beschränkungen beachtet werden, sodass die kombinierte Größe aller `auto`-großen Items den Ausrichtungscontainer entlang der Querachse genau füllt.
- `anchor-center`
  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet das Item in Blockrichtung auf die Mitte des zugeordneten Ankerelements aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Items den Ausrichtungscontainer übersteigt, wird das Item stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen des Items und des Ausrichtungscontainers wird der angegebene Ausrichtungswert eingehalten.

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
- [Ausrichtung von Items in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
