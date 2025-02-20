---
title: padding-top
slug: Web/CSS/padding-top
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`padding-top`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Höhe des [Padding-Bereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) am oberen Rand eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-top.html")}}

Der Padding-Bereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

![Die Wirkung der CSS-Eigenschaft padding-top auf das Element-Box-Modell](padding-top.svg)

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um mit einer einzigen Deklaration Padding auf allen vier Seiten eines Elements festzulegen.

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

Die `padding-top`-Eigenschaft wird als einzelner Wert aus der unten aufgeführten Liste angegeben. Im Gegensatz zu Margins sind negative Werte für Padding nicht zulässig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur Breite (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Obere Padding-Einstellung mit Pixeln und Prozentsätzen

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
- {{cssxref("padding")}} Kurzschreibweise
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzschreibweisen
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
