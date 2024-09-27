---
title: padding-bottom
slug: Web/CSS/padding-bottom
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding-bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe des [Abstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) am unteren Rand eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-bottom.html")}}

Der Abstandbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

![Die Wirkung der CSS-Eigenschaft padding-bottom auf das Elementfeld](padding-bottom.svg)

> [!NOTE]
> Die Eigenschaft {{cssxref("padding")}} kann verwendet werden, um die Abstände auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

## Syntax

```css
/* <length> values */
padding-bottom: 0.5em;
padding-bottom: 0;
padding-bottom: 2cm;

/* <percentage> value */
padding-bottom: 10%;

/* Global values */
padding-bottom: inherit;
padding-bottom: initial;
padding-bottom: revert;
padding-bottom: revert-layer;
padding-bottom: unset;
```

Die `padding-bottom` Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben. Im Gegensatz zu Rändern sind negative Werte für den Abstand nicht zulässig.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentwert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstand unten mit Pixeln und Prozentangaben festlegen

```css
.content {
  padding-bottom: 5%;
}
.sidebox {
  padding-bottom: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-left")}} und die Kurzschreibweise {{cssxref("padding")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} und die Kurzschreibweisen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}
