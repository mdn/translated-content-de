---
title: padding-left
slug: Web/CSS/padding-left
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`padding-left`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite des [Innenabstands](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) links von einem Element fest.

{{EmbedInteractiveExample("pages/css/padding-left.html")}}

Der Innenabstand eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um die Innenabstände an allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

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

Die `padding-left`-Eigenschaft wird als ein einzelner Wert aus der unten aufgeführten Liste angegeben. Anders als bei Rändern sind negative Werte für Innenabstände nicht erlaubt.

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

### Linken Innenabstand mit Pixeln und Prozentsätzen festlegen

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

- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und die Abkürzung {{cssxref("padding")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}} sowie die Abkürzungen {{cssxref("padding-block")}} und {{cssxref("padding-inline")}}
