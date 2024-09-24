---
title: margin-bottom
slug: Web/CSS/margin-bottom
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) an der Unterseite eines Elements. Ein positiver Wert platziert es weiter entfernt von seinen Nachbarn, während ein negativer Wert es näher platziert.

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

![Die Auswirkung der CSS-Eigenschaft margin-bottom auf das Element-Box](margin-bottom.svg)

Diese Eigenschaft hat keinen Effekt auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie zum Beispiel {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> Werte */
margin-bottom: 10px; /* Eine absolute Länge */
margin-bottom: 1em; /* relativ zur Schriftgröße */
margin-bottom: 5%; /* relativ zur Breite des nächstgelegenen Blockcontainers */

/* Schlüsselwortwerte */
margin-bottom: auto;

/* Globale Werte */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: revert-layer;
margin-bottom: unset;
```

Die `margin-bottom` Eigenschaft wird als das Schlüsselwort `auto`, oder als ein `<length>`, oder ein `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Randes als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inlinegröße (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert aus. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von positiven und negativen Unterrändern

#### HTML

```html
<div class="container">
  <div class="box0">Box 0</div>
  <div class="box1">Box 1</div>
  <div class="box2">Box one's negative margin pulls me up</div>
</div>
```

#### CSS

CSS für divs, um margin-bottom und Höhe festzulegen

```css
.box0 {
  margin-bottom: 1em;
  height: 3em;
}
.box1 {
  margin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  border: 1px dashed black;
  border-width: 1px 0;
  margin-bottom: 2em;
}
```

Einige Definitionen für Container und divs, um die Auswirkungen der Ränder klarer sichtbar zu machen

```css
.container {
  background-color: orange;
  width: 320px;
  border: 1px solid black;
}
div {
  width: 320px;
  background-color: gold;
}
```

#### Ergebnis

{{ EmbedLiveSample('Setting_positive_and_negative_bottom_margins',350,200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, und {{cssxref("margin-left")}} sowie die Kurzform {{cssxref("margin")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}} sowie die Kurzformen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
