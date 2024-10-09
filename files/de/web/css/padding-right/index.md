---
title: padding-right
slug: Web/CSS/padding-right
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`padding-right`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Padding-Bereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) auf der rechten Seite eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-right.html")}}

Der Padding-Bereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

> [!NOTE]
> Die {{cssxref("padding")}} Eigenschaft kann verwendet werden, um den Padding auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

## Syntax

```css
/* <length> values */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> value */
padding-right: 10%;

/* Global values */
padding-right: inherit;
padding-right: initial;
padding-right: revert;
padding-right: revert-layer;
padding-right: unset;
```

Die `padding-right` Eigenschaft wird als ein Einzelwert angegeben, der aus der untenstehenden Liste ausgewählt wird. Im Gegensatz zu Rändern sind negative Werte für Padding nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rechtspadding mit Pixel und Prozentsätzen festlegen

```css
.content {
  padding-right: 5%;
}
.side-box {
  padding-right: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("padding")}} Kurzschreibweise
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzschreibweisen
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
