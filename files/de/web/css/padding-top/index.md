---
title: padding-top
slug: Web/CSS/padding-top
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding-top`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe des [Abstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) am oberen Rand eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-top.html")}}

Der Abstandbereich eines Elements ist der Platz zwischen seinem Inhalt und seinem Rand.

![Die Wirkung der CSS-Eigenschaft padding-top auf das Element-Box-Modell](padding-top.svg)

> [!NOTE]
> Die {{cssxref("padding")}} Eigenschaft kann verwendet werden, um mit einer einzigen Deklaration Abstände an allen vier Seiten eines Elements festzulegen.

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

Die `padding-top` Eigenschaft wird als ein einzelner Wert aus der unten aufgeführten Liste angegeben. Im Gegensatz zu Rändern sind negative Werte für Abstände nicht zulässig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss unnegativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block). Muss unnegativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des oberen Abstands mit Pixeln und Prozentsätzen

```css
.content {
  padding-top: 5%;
}
.sidebox {
  padding-top: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die {{cssxref("padding")}} Kurzform
- Die zugeordneten logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} und die Kurzformen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}
