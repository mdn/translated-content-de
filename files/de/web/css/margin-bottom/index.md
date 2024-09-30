---
title: margin-bottom
slug: Web/CSS/margin-bottom
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{CSSRef}}

Die **`margin-bottom`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den [Abstandsbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) am unteren Rand eines Elements fest. Ein positiver Wert platziert es weiter von seinen Nachbarn entfernt, während ein negativer Wert es näher heran platziert.

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

![Der Effekt der CSS-Eigenschaft margin-bottom auf das Element-Boxmodell](margin-bottom.svg)

Diese Eigenschaft hat keinen Effekt auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-bottom: 10px; /* An absolute length */
margin-bottom: 1em; /* relative to the text size */
margin-bottom: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-bottom: auto;

/* Global values */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: revert;
margin-bottom: revert-layer;
margin-bottom: unset;
```

Die `margin-bottom`-Eigenschaft wird als das Schlüsselwort `auto`, oder eine `<length>`, oder eine `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert zur Verwendung. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von positiven und negativen unteren Abständen

#### HTML

```html
<div class="container">
  <div class="box0">Box 0</div>
  <div class="box1">Box 1</div>
  <div class="box2">Box one's negative margin pulls me up</div>
</div>
```

#### CSS

CSS für divs, um margin-bottom und Höhe zu setzen

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

Einige Definitionen für Container und divs, damit die Effekte der Abstände besser sichtbar sind

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
