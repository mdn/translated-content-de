---
title: margin-top
slug: Web/CSS/margin-top
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`margin-top`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den [Außenabstand](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) oberhalb eines Elements fest. Ein positiver Wert vergrößert den Abstand zu benachbarten Elementen, während ein negativer Wert ihn verringert.

{{EmbedInteractiveExample("pages/css/margin-top.html")}}

Diese Eigenschaft hat keine Wirkung auf _nicht-[ersetzte](/de/docs/Web/CSS/Replaced_element)_ Inline-Elemente, wie {{HTMLElement("span")}} oder {{HTMLElement("code")}}.

## Syntax

```css
/* <length> values */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* relative to the text size */
margin-top: 5%; /* relative to the nearest block container's width */
margin-top: anchor-size(height);
margin-top: calc(anchor-size(--myAnchor self-inline, 25px) / 4);

/* Keyword values */
margin-top: auto;

/* Global values */
margin-top: inherit;
margin-top: initial;
margin-top: revert;
margin-top: revert-layer;
margin-top: unset;
```

Die `margin-top`-Eigenschaft wird als Schlüsselwort `auto`, oder als `<length>`, bzw. `<percentage>` angegeben. Der Wert kann positiv, null oder negativ sein.

### Werte

- {{cssxref("&lt;length&gt;")}}

  - : Die Größe des Außenabstands als fester Wert.

    - Für _ankerpositionierte Elemente_ wird die Funktion {{cssxref("anchor-size()")}} zu einem {{cssxref("&lt;length&gt;")}}-Wert relativ zur Breite oder Höhe des zugehörigen _Ankerelements_ aufgelöst (siehe [Festlegen des Außenabstands eines Elements basierend auf der Ankergröße](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Außenabstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ bei einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser wählt einen geeigneten Wert. Siehe {{cssxref("margin")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Positive und negative obere Außenabstände festlegen

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
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
