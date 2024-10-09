---
title: margin-top
slug: Web/CSS/margin-top
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`margin-top`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Randbereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) oben an einem Element fest. Ein positiver Wert platziert es weiter weg von seinen Nachbarn, während ein negativer Wert es näher platziert.

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

Diese Eigenschaft hat keine Auswirkung auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie z.B. {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* relative to the text size */
margin-top: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

Die `margin-top` Eigenschaft wird als das Schlüsselwort `auto`, oder eine `<length>`, oder ein `<percentage>` angegeben. Der Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Außenabstands als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Außenabstands als Prozentangabe, bezogen auf die Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert aus. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positive und negative obere Abstände setzen

```css
.content {
  margin-top: 5%;
}
.side-box {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}}
- {{cssxref("margin")}} Kurzschreibweise
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} Kurzschreibweisen
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
