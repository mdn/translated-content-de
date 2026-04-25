---
title: "`padding-top` CSS property"
short-title: padding-top
slug: Web/CSS/Reference/Properties/padding-top
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`padding-top`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Höhe des [Abstandsbereichs (Padding)](/de/docs/Web/CSS/Guides/Box_model/Introduction#padding_area) an der Oberseite eines Elements fest.

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

Der Padding-Bereich eines Elements ist der Raum zwischen dessen Inhalt und dessen Rahmen.

![Die Wirkung der CSS-Eigenschaft padding-top auf das Elementfeld](padding-top.svg)

> [!NOTE]
> Die {{cssxref("padding")}}-Eigenschaft kann verwendet werden, um mit einer einzigen Deklaration Paddings auf allen vier Seiten eines Elements festzulegen.

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

Die `padding-top`-Eigenschaft wird als einzelner Wert angegeben, der aus der unten stehenden Liste ausgewählt wird. Im Gegensatz zu Rändern sind negative Werte für Padding nicht erlaubt.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentwert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht negativ sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von oberem Padding mit Pixeln und Prozentsätzen

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
- {{cssxref("padding")}} Kurzschreibweise
- {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}}, und {{cssxref("padding-inline-end")}}
- {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} Kurzschreibweisen
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
