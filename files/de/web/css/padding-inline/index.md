---
title: padding-inline
slug: Web/CSS/padding-inline
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-inline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) definiert den logischen Inline-Anfang und -Ende des Innenabstands eines Elements, der je nach Schriftsystem, Richtung und Textorientierung des Elements auf physische Padding-Eigenschaften abgebildet wird.

{{EmbedInteractiveExample("pages/css/padding-inline.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`padding-inline-end`](/de/docs/Web/CSS/padding-inline-end)
- [`padding-inline-start`](/de/docs/Web/CSS/padding-inline-start)

## Syntax

```css
/* <length> Werte */
padding-inline: 10px 20px; /* Eine absolute Länge */
padding-inline: 1em 2em; /* Relativ zur Textgröße */
padding-inline: 10px; /* Setzt sowohl Anfangs- als auch Endwerte */

/* <percentage> Werte */
padding-inline: 5% 2%; /* Relativ zur Breite des nächstgelegenen Block-Containers enthalten */

/* Globale Werte */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: revert-layer;
padding-inline: unset;
```

Die `padding-inline`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, wird er sowohl als Wert für {{cssxref("padding-inline-start")}} als auch für {{cssxref("padding-inline-end")}} verwendet. Wenn zwei Werte angegeben werden, wird der erste für {{cssxref("padding-inline-start")}} und der zweite für {{cssxref("padding-inline-end")}} verwendet.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Innenabstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Innenabstands als Prozentwert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die Werte für diese Eigenschaft entsprechen der Eigenschaft {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}}, oder {{cssxref("padding-right")}}, und {{cssxref("padding-left")}}, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Inline-Innenabstands für vertikalen Text

#### HTML

```html
<div>
  <p class="exampleText">Beispieltext</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
