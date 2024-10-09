---
title: margin-bottom
slug: Web/CSS/margin-bottom
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`margin-bottom`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) am unteren Rand eines Elements fest. Ein positiver Wert vergrößert den Abstand zu seinen Nachbarn, während ein negativer Wert ihn verringert.

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

![Die Auswirkung der CSS-Eigenschaft margin-bottom auf das Elementbox](margin-bottom.svg)

Diese Eigenschaft hat keine Auswirkung auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

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

Die `margin-bottom`-Eigenschaft wird als Schlüsselwort `auto`, oder eine `<length>`, oder eine `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Randes als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Randes als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert aus. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von positiven und negativen unteren Rändern

#### HTML

```html
<div class="container">
  <div class="box0">Box 0</div>
  <div class="box1">Box 1</div>
  <div class="box2">Box one's negative margin pulls me up</div>
</div>
```

#### CSS

CSS für Divs, um margin-bottom und Höhe festzulegen

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

Einige Definitionen für Container und Divs, damit die Wirkung der Ränder klarer ersichtlich ist

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

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin")}} Kurzbefehl
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzbefehle
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
