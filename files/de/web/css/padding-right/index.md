---
title: padding-right
slug: Web/CSS/padding-right
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding-right`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt die Breite des [Innenabstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) auf der rechten Seite eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-right.html")}}

Der Innenabstandsbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um die Innenabstände auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

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

Die `padding-right`-Eigenschaft wird als einzelner Wert aus der untenstehenden Liste festgelegt. Anders als bei den Rändern sind negative Werte für den Innenabstand nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Innenabstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Innenabstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rechten Innenabstand mit Pixeln und Prozentsätzen festlegen

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}} und die {{cssxref("padding")}}-Kurzform
- Die zugehörigen logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} und die Kurzformen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}
