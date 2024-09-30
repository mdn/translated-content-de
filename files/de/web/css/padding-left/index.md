---
title: padding-left
slug: Web/CSS/padding-left
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding-left`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des [Abstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) links von einem Element fest.

{{EmbedInteractiveExample("pages/css/padding-left.html")}}

Der Abstand eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

> [!NOTE]
> Die Eigenschaft {{cssxref("padding")}} kann verwendet werden, um mit einer einzigen Deklaration Abstände auf allen vier Seiten eines Elements festzulegen.

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

Die `padding-left`-Eigenschaft wird als einzelner Wert aus der unten aufgeführten Liste angegeben. Im Gegensatz zu Margen sind negative Werte bei Abständen nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur inneren Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

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
.sidebox {
  padding-left: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und die Kurzform {{cssxref("padding")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} sowie die Kurzformen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}
