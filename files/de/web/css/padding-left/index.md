---
title: padding-left
slug: Web/CSS/padding-left
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`padding-left`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des [Padding-Bereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) links eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-left.html")}}

Der Padding-Bereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um mit einer einzigen Deklaration Abstände auf allen vier Seiten eines Elements festzulegen.

## Syntax

```css
/* <length> values */
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/* <percentage> value */
padding-left: 10%;

/* Global values */
padding-left: inherit;
padding-left: initial;
padding-left: revert;
padding-left: revert-layer;
padding-left: unset;
```

Die `padding-left`-Eigenschaft wird als einzelner Wert aus der unten stehenden Liste festgelegt. Im Gegensatz zu Margen sind negative Werte für Abstände nicht zulässig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linken Abstand mit Pixeln und Prozentsätzen festlegen

```css
.content {
  padding-left: 5%;
}
.side-box {
  padding-left: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, und {{cssxref("padding-bottom")}}
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
