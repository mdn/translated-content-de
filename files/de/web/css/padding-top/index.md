---
title: padding-top
slug: Web/CSS/padding-top
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`padding-top`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe des [Polsterbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) oben in einem Element fest.

{{EmbedInteractiveExample("pages/css/padding-top.html")}}

Der Polsterbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

![Die Wirkung der CSS-Eigenschaft padding-top auf das Elementkästchen](padding-top.svg)

> [!NOTE]
> Die Eigenschaft {{cssxref("padding")}} kann verwendet werden, um mit einer einzigen Deklaration die Abstände auf allen vier Seiten eines Elements festzulegen.

## Syntax

```css
/* <length> values */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> value */
padding-top: 10%;

/* Global values */
padding-top: inherit;
padding-top: initial;
padding-top: revert;
padding-top: revert-layer;
padding-top: unset;
```

Die `padding-top` Eigenschaft wird als einzelner Wert aus der untenstehenden Liste angegeben. Im Gegensatz zu Rändern sind negative Werte für Polsterungen nicht zulässig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe der Polsterung als fester Wert. Muss nichtnegativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe der Polsterung als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [einschließenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nichtnegativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Oberes Polster mithilfe von Pixeln und Prozentangaben festlegen

```css
.content {
  padding-top: 5%;
}
.side-box {
  padding-top: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
