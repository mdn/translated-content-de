---
title: "`padding-top` CSS property"
short-title: padding-top
slug: Web/CSS/Reference/Properties/padding-top
l10n:
  sourceCommit: 0c62b082755017d0773ecaaee7e74efd5e066d0b
---

Die **`padding-top`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Höhe des [Polsterbereichs](/de/docs/Web/CSS/Guides/Box_model/Introduction#padding_area) oben an einem Element fest.

{{InteractiveExample("CSS Demo: padding-top")}}

```css interactive-example-choice
padding-top: 1em;
```

```css interactive-example-choice
padding-top: 10%;
```

```css interactive-example-choice
padding-top: 20px;
```

```css interactive-example-choice
padding-top: 1ch;
```

```css interactive-example-choice
padding-top: 0;
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

Der Polsterbereich eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

![Die Auswirkung der CSS-Eigenschaft padding-top auf das Element-Box](padding-top.svg)

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um die Abstände auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

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

Die `padding-top`-Eigenschaft wird als ein einzelner Wert aus der unten stehenden Liste angegeben. Im Gegensatz zu Rändern sind negative Werte für das Polstern nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Polsterns als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Polsterns als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältlichen Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Obere Polsterung mit Pixeln und Prozentsätzen festlegen

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
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model) Modul
