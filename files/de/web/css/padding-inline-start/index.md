---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`padding-inline-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert den logischen Inline-Anfangs-Abstand eines Elements, welcher in einen physischen `padding` umgewandelt wird, abhängig vom Schreibmodus, der Schreibrichtung und der Textausrichtung des Elements.

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

## Syntax

```css
/* <length> values */
padding-inline-start: 10px; /* An absolute length */
padding-inline-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des `padding` als fester Wert. Muss nicht-negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des `padding` als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [Containing-Block](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht-negativ sein.

## Beschreibung

Die Eigenschaft `padding-inline-start` akzeptiert dieselben Werte wie physische Eigenschaften wie {{cssxref("padding-top")}}. Allerdings kann sie äquivalent zu {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein, abhängig von den Werten, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} festgelegt wurden.

Sie steht in Bezug zu {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-end")}}, welche die anderen `padding`-Werte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Anfangs-Abstand für vertikalen Text festlegen

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
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
  writing-mode: vertical-lr;
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
