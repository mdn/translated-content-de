---
title: padding-top
slug: Web/CSS/padding-top
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding-top`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Höhe des [Abstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) oben in einem Element.

{{EmbedInteractiveExample("pages/css/padding-top.html")}}

Der Abstand eines Elements ist der Raum zwischen seinem Inhalt und seiner Grenze.

![Die Wirkung der CSS padding-top Eigenschaft auf das Elementfeld](padding-top.svg)

> [!NOTE]
> Die {{cssxref("padding")}} Eigenschaft kann verwendet werden, um die Abstände auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

## Syntax

```css
/* <length> Werte */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* <percentage> Wert */
padding-top: 10%;

/* Globale Werte */
padding-top: inherit;
padding-top: initial;
padding-top: revert;
padding-top: revert-layer;
padding-top: unset;
```

Die `padding-top` Eigenschaft wird als ein einzelner Wert aus der unten stehenden Liste angegeben. Im Gegensatz zu Rändern sind negative Werte für Abstände nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Oberen Abstand mit Pixeln und Prozent setzen

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

- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die {{cssxref("padding")}} Kurzform
- Die zugeordneten logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} und die Kurzformen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}