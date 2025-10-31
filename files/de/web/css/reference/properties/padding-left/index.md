---
title: padding-left
slug: Web/CSS/Reference/Properties/padding-left
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`padding-left`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Breite des [Innenabstands](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#padding_area) links von einem Element fest.

{{InteractiveExample("CSS Demo: padding-left")}}

```css interactive-example-choice
padding-left: 1.5em;
```

```css interactive-example-choice
padding-left: 10%;
```

```css interactive-example-choice
padding-left: 20px;
```

```css interactive-example-choice
padding-left: 1ch;
```

```css interactive-example-choice
padding-left: 0;
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

Der Innenabstand eines Elements ist der Raum zwischen seinem Inhalt und seinem Rahmen.

> [!NOTE]
> Die {{cssxref("padding")}} Eigenschaft kann verwendet werden, um den Innenabstand auf allen vier Seiten eines Elements mit einer einzigen Deklaration festzulegen.

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

Die `padding-left` Eigenschaft wird als ein einzelner Wert aus der unten aufgeführten Liste angegeben. Im Gegensatz zu Abständen sind negative Werte für den Innenabstand nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Innenabstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Innenabstands als Prozentsatz, relativ zur Breite (_width_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linken Innenabstand mit Pixeln und Prozentangaben setzen

```css
.content {
  padding-left: 5%;
}
.side-box {
  padding-left: 10px;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, und {{cssxref("padding-bottom")}}
- {{cssxref("padding")}} Kurzform
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzformen
- [Einführung in das grundlegende CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
