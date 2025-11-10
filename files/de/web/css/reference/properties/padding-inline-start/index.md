---
title: padding-inline-start
slug: Web/CSS/Reference/Properties/padding-inline-start
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`padding-inline-start`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die logische Startauffüllung einer Zeile eines Elements, die abhängig vom Schreibmodus, der Richtung und der Textorientierung des Elements zu einer physischen Auffüllung wird.

{{InteractiveExample("CSS Demo: padding-inline-start")}}

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline-start: 5em;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

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
  - : Die Größe der Auffüllung als fester Wert. Muss nicht-negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe der Auffüllung als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht-negativ sein.

## Beschreibung

Die `padding-inline-start`-Eigenschaft nimmt die gleichen Werte wie physische Eigenschaften wie {{cssxref("padding-top")}} an. Sie kann jedoch je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} gesetzten Werten äquivalent zu {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, `padding-top` oder {{cssxref("padding-bottom")}} sein.

Sie steht in Bezug zu {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-end")}}, welche die anderen Auffüllungswerte des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Startauffüllung für vertikalen Text

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

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
