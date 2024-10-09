---
title: padding-bottom
slug: Web/CSS/padding-bottom
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`padding-bottom`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe des [Polsterbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) am unteren Rand eines Elements fest.

{{EmbedInteractiveExample("pages/css/padding-bottom.html")}}

Der Polsterbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

![Die Wirkung der CSS-Eigenschaft padding-bottom auf das Elementfeld](padding-bottom.svg)

> [!NOTE]
> Die {{cssxref("padding")}} Eigenschaft kann verwendet werden, um Polsterungen an allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

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

Die `padding-bottom` Eigenschaft wird als einzelner Wert aus der unten aufgeführten Liste angegeben. Im Gegensatz zu Abständen sind negative Werte für Polsterungen nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe der Polsterung als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe der Polsterung als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umfassenden Blockes](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der unteren Polsterung mit Pixeln und Prozentsätzen

```css
.content {
  padding-bottom: 5%;
}
.side-box {
  padding-bottom: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, und {{cssxref("padding-left")}}
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
