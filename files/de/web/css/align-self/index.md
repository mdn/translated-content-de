---
title: align-self
slug: Web/CSS/align-self
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die **`align-self`** [CSS](/de/docs/Web/CSS)-Eigenschaft überschreibt den Wert von {{cssxref("align-items")}} für ein Gitter- oder Flex-Element. Im Gitter richtet sie das Element innerhalb des {{Glossary("Grid_Areas", "Gitterbereichs")}} aus. In Flexbox richtet sie das Element entlang der {{Glossary("cross_axis", "Querachse")}} aus.

{{EmbedInteractiveExample("pages/css/align-self.html")}}

Diese Eigenschaft gilt nicht für Block-Level-Boxen oder für Tabellenzellen. Wenn der Querachsenabstand eines Flexbox-Elements `auto` ist, wird `align-self` ignoriert.

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
  - : Berechnet zum Wert von {{cssxref("align-items")}} des übergeordneten Elements.
- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - Bei der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Gitter-Elemente führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Diese Eigenschaft gilt nicht für Block-Level-Boxen oder Tabellenzellen.

- `self-start`
  - : Richtet die Elemente bündig mit der Kante des Ausrichtungscontainers aus, die der Startseite des Elements auf der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit der Kante des Ausrichtungscontainers aus, die der Endseite des Elements auf der Querachse entspricht.
- `flex-start`
  - : Die Querstartabstandskante des Flex-Elements wird mit der Querstartkante der Linie bündig ausgerichtet.
- `flex-end`
  - : Die Querendabstandskante des Flex-Elements wird mit der Querendkante der Linie bündig ausgerichtet.
- `center`
  - : Die Abstandskante des Flex-Elements wird innerhalb der Linie auf der Querachse zentriert. Wenn die Querausdehnung des Elements größer als der Flex-Container ist, wird es gleichmäßig in beide Richtungen überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der Ausrichtung der ersten oder letzten Grundlinie an: richtet die Ausrichtungsgrundlinie des ersten oder letzten Grundliniensatzes der Box mit der entsprechenden Grundlinie im gemeinsamen ersten oder letzten Grundliniensatz aller Boxen in ihrer Grundlinienfreigabegruppe aus.
    Das Fallback der Ausrichtung für `first baseline` ist `start`, für `last baseline` ist es `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element `auto`-groß bemessen ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, wobei die Einschränkungen, die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalität) auferlegt werden, weiterhin respektiert werden, sodass die kombinierte Größe aller `auto`-großen Elemente die Ausrichtungscontainergröße entlang der Querachse genau ausfüllt.
- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet sich das Element im Blockverlauf auf die Mitte des zugehörigen Ankerelements aus. Siehe [Zentrieren auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).
- `safe`
  - : Wenn die Größe des Elements den Ausrichtungscontainer überschreitet, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.
- `unsafe`
  - : Unabhängig von den relativen Größen von Element und Ausrichtungscontainer wird der angegebene Ausrichtungswert beachtet.

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
- [Box-Ausgleich im Gitter-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
- {{cssxref("align-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-self")}}
