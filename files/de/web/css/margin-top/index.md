---
title: margin-top
slug: Web/CSS/margin-top
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`margin-top`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den [Margin-Bereich](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) oben an einem Element fest. Ein positiver Wert platziert es weiter von seinen Nachbarn entfernt, während ein negativer Wert es näher heranrückt.

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

Diese Eigenschaft hat keine Auswirkung auf _nicht-[replaced](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length>-Werte */
margin-top: 10px; /* Eine absolute Länge */
margin-top: 1em; /* Relativ zur Textgröße */
margin-top: 5%; /* Relativ zur Breite des nächstgelegenen Blockcontainers */

/* Schlüsselwortwerte */
margin-top: auto;

/* Globale Werte */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

Die `margin-top`-Eigenschaft wird als das Schlüsselwort `auto`, oder als `<length>` oder `<percentage>` angegeben. Ihr Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Margins als fester Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Margins als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten zu verwendenden Wert. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positives und negatives oberes Margin setzen

```css
.content {
  margin-top: 5%;
}
.sidebox {
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

- {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, und {{cssxref("margin-left")}} sowie die Abkürzung {{cssxref("margin")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, und {{cssxref("margin-inline-end")}} und die Abkürzungen {{cssxref("margin-block")}} und {{cssxref("margin-inline")}}
