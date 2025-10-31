---
title: padding-right
slug: Web/CSS/Reference/Properties/padding-right
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`padding-right`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite des [Abstandsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) auf der rechten Seite eines Elements fest.

{{InteractiveExample("CSS Demo: padding-right")}}

```css interactive-example-choice
padding-right: 1.5em;
```

```css interactive-example-choice
padding-right: 10%;
```

```css interactive-example-choice
padding-right: 20px;
```

```css interactive-example-choice
padding-right: 1ch;
```

```css interactive-example-choice
padding-right: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

Der Abstandbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rand.

> [!NOTE]
> Die Eigenschaft {{cssxref("padding")}} kann verwendet werden, um die Abstände auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

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

Die Eigenschaft `padding-right` wird als ein einzelner Wert angegeben, der aus der unten stehenden Liste ausgewählt wird. Im Gegensatz zu Rändern sind negative Werte für Abstände nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rechten Abstand mit Pixeln und Prozentsätzen festlegen

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
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
